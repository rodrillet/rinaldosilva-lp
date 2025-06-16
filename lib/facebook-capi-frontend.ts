import { CustomData } from '@/services/facebook-capi.service';

// Interface para dados do usuário que podem ser coletados no frontend
export interface FrontendUserData {
  external_id?: string;
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
  date_of_birth?: string;
  gender?: string;
}

// Interface para evento do frontend
export interface FrontendEvent {
  event_name: string;
  user_data?: FrontendUserData;
  custom_data?: CustomData;
  timestamp?: number;
}

// Interface para resposta da API
interface FacebookEventResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: any;
  facebook_response?: any;
}

/**
 * Utilitário para trabalhar com cookies do Facebook
 */
export class FacebookCookieUtils {
  /**
   * Obtém o valor do cookie _fbc (Facebook Click ID)
   */
  static getFbc(): string | null {
    if (typeof document === 'undefined') return null;
    
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === '_fbc') {
        return decodeURIComponent(value);
      }
    }
    return null;
  }

  /**
   * Obtém o valor do cookie _fbp (Facebook Browser ID)
   */
  static getFbp(): string | null {
    if (typeof document === 'undefined') return null;
    
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === '_fbp') {
        return decodeURIComponent(value);
      }
    }
    return null;
  }

  /**
   * Gera um novo _fbp se não existir
   */
  static generateFbp(): string {
    const timestamp = Math.floor(Date.now() / 1000);
    const random = Math.floor(Math.random() * 2147483647);
    return `fb.1.${timestamp}.${random}`;
  }

  /**
   * Define o cookie _fbp se não existir
   */
  static ensureFbp(): string {
    let fbp = this.getFbp();
    
    if (!fbp) {
      fbp = this.generateFbp();
      
      // Definir cookie por 90 dias
      const expires = new Date();
      expires.setTime(expires.getTime() + (90 * 24 * 60 * 60 * 1000));
      
      document.cookie = `_fbp=${fbp}; expires=${expires.toUTCString()}; path=/; SameSite=Lax; Secure`;
    }
    
    return fbp;
  }

  /**
   * Obtém todos os dados de cookies do Facebook
   */
  static getAllFacebookCookies(): { fbc: string | null; fbp: string | null } {
    return {
      fbc: this.getFbc(),
      fbp: this.getFbp()
    };
  }
}

/**
 * Classe principal para envio de eventos do Facebook
 */
export class FacebookCAPIFrontend {
  private static instance: FacebookCAPIFrontend;
  private readonly apiEndpoint = '/api/facebook-events';
  private readonly debugMode: boolean;

  constructor(debugMode = false) {
    this.debugMode = debugMode;
  }

  /**
   * Singleton para obter instância
   */
  static getInstance(debugMode = false): FacebookCAPIFrontend {
    if (!FacebookCAPIFrontend.instance) {
      FacebookCAPIFrontend.instance = new FacebookCAPIFrontend(debugMode);
    }
    return FacebookCAPIFrontend.instance;
  }

  /**
   * Gera um event_id único para desduplicação
   */
  private generateEventId(eventName: string): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    return `${eventName}_${timestamp}_${random}`;
  }

  /**
   * Obtém a URL atual da página
   */
  private getCurrentUrl(): string {
    if (typeof window === 'undefined') return '';
    return window.location.href;
  }

  /**
   * Log para depuração
   */
  private log(message: string, data?: any): void {
    if (this.debugMode) {
      console.log(`[Facebook CAPI Frontend] ${message}`, data || '');
    }
  }

  /**
   * Envia evento para o Facebook Pixel (client-side) com event_id
   */
  private sendToPixel(eventName: string, eventId: string, customData?: CustomData): void {
    try {
      // Verificar se fbq está disponível
      if (typeof window !== 'undefined' && (window as any).fbq) {
        const fbq = (window as any).fbq;
        
        // Enviar evento com event_id para desduplicação
        const trackingData = {
          ...customData,
          eventID: eventId // Importante para desduplicação
        };
        
        fbq('track', eventName, customData || {}, { eventID: eventId });
        
        this.log(`Evento ${eventName} enviado para Pixel com ID: ${eventId}`, trackingData);
      } else {
        console.warn('Facebook Pixel (fbq) não está disponível');
      }
    } catch (error) {
      console.error('Erro ao enviar evento para Facebook Pixel:', error);
    }
  }

  /**
   * Envia evento para o backend (server-side)
   */
  private async sendToBackend(
    eventName: string, 
    eventId: string, 
    userData: FrontendUserData, 
    customData?: CustomData,
    timestamp?: number
  ): Promise<FacebookEventResponse> {
    try {
      // Obter cookies do Facebook
      const { fbc, fbp } = FacebookCookieUtils.getAllFacebookCookies();
      
      // Montar dados do usuário com cookies
      const userDataWithCookies = {
        ...userData,
        fbc: fbc || undefined,
        fbp: fbp || FacebookCookieUtils.ensureFbp()
      };

      // Payload para o backend
      const payload = {
        event_name: eventName,
        event_id: eventId,
        event_source_url: this.getCurrentUrl(),
        user_data: userDataWithCookies,
        custom_data: customData,
        timestamp: timestamp || Date.now()
      };

      this.log(`Enviando para backend:`, payload);

      // Fazer requisição para o backend
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const responseData: FacebookEventResponse = await response.json();

      if (response.ok) {
        this.log(`Evento ${eventName} enviado com sucesso para CAPI`);
      } else {
        console.error(`Erro ao enviar evento ${eventName} para CAPI:`, responseData);
      }

      return responseData;

    } catch (error: any) {
      const errorResponse: FacebookEventResponse = {
        success: false,
        error: 'Erro na requisição para backend',
        details: error.message
      };
      
      console.error('Erro ao enviar evento para backend:', error);
      return errorResponse;
    }
  }

  /**
   * Método principal para enviar evento
   * Envia tanto para Pixel (client-side) quanto para CAPI (server-side)
   */
  public async sendEvent(event: FrontendEvent): Promise<FacebookEventResponse> {
    try {
      // Gerar event_id único
      const eventId = this.generateEventId(event.event_name);
      
      this.log(`Processando evento: ${event.event_name} (ID: ${eventId})`);

      // Enviar para Pixel (client-side) - não bloqueia
      this.sendToPixel(event.event_name, eventId, event.custom_data);

      // Enviar para CAPI (server-side) - aguarda resposta
      const capiResponse = await this.sendToBackend(
        event.event_name,
        eventId,
        event.user_data || {},
        event.custom_data,
        event.timestamp
      );

      return capiResponse;

    } catch (error: any) {
      const errorResponse: FacebookEventResponse = {
        success: false,
        error: 'Erro geral ao processar evento',
        details: error.message
      };
      
      console.error('Erro geral ao enviar evento:', error);
      return errorResponse;
    }
  }

  /**
   * Métodos de conveniência para eventos específicos
   */

  /**
   * Evento PageView
   */
  public async trackPageView(userData?: FrontendUserData): Promise<FacebookEventResponse> {
    return this.sendEvent({
      event_name: 'PageView',
      user_data: userData,
      custom_data: {
        content_name: document.title,
        content_category: 'landing_page'
      }
    });
  }

  /**
   * Evento InitiateCheckout
   */
  public async trackInitiateCheckout(
    value: number, 
    currency = 'BRL', 
    userData?: FrontendUserData
  ): Promise<FacebookEventResponse> {
    return this.sendEvent({
      event_name: 'InitiateCheckout',
      user_data: userData,
      custom_data: {
        value,
        currency,
        content_type: 'product'
      }
    });
  }

  /**
   * Evento ViewContent
   */
  public async trackViewContent(
    contentName: string,
    contentCategory?: string,
    value?: number,
    userData?: FrontendUserData
  ): Promise<FacebookEventResponse> {
    return this.sendEvent({
      event_name: 'ViewContent',
      user_data: userData,
      custom_data: {
        content_name: contentName,
        content_category: contentCategory,
        value,
        currency: 'BRL'
      }
    });
  }

  /**
   * Evento Lead
   */
  public async trackLead(userData?: FrontendUserData): Promise<FacebookEventResponse> {
    return this.sendEvent({
      event_name: 'Lead',
      user_data: userData,
      custom_data: {
        content_name: 'Escola de Dons Espirituais Lead'
      }
    });
  }

  /**
   * Evento customizado
   */
  public async trackCustomEvent(
    eventName: string,
    customData?: CustomData,
    userData?: FrontendUserData
  ): Promise<FacebookEventResponse> {
    return this.sendEvent({
      event_name: eventName,
      user_data: userData,
      custom_data: customData
    });
  }

  /**
   * Teste de conectividade
   */
  public async testConnection(): Promise<FacebookEventResponse> {
    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'GET'
      });
      
      return await response.json();
    } catch (error: any) {
      return {
        success: false,
        error: 'Erro ao testar conexão',
        details: error.message
      };
    }
  }
}

// Export de conveniência
export const facebookCAPI = FacebookCAPIFrontend.getInstance(
  process.env.NODE_ENV === 'development'
); 