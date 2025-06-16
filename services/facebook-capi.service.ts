import crypto from 'crypto';
import axios, { AxiosResponse } from 'axios';

// Interfaces completas para tipagem
export interface UserData {
  // PII - Dados que precisam de hashing
  em?: string; // email
  ph?: string; // phone
  fn?: string; // first_name
  ln?: string; // last_name
  db?: string; // date_of_birth (YYYYMMDD)
  ge?: string; // gender (m/f)
  ct?: string; // city
  st?: string; // state
  zp?: string; // zip_code
  country?: string; // country
  
  // Non-PII - Dados que NÃO precisam de hashing
  external_id?: string;
  client_ip_address?: string;
  client_user_agent?: string;
  fbc?: string; // Facebook click ID
  fbp?: string; // Facebook browser ID
  subscription_id?: string;
  fb_login_id?: string;
  lead_id?: string;
}

export interface CustomData {
  // Dados do produto/conteúdo
  content_name?: string;
  content_category?: string;
  content_type?: string;
  content_ids?: string[];
  contents?: Array<{
    id: string;
    quantity: number;
    delivery_category?: string;
    item_price?: number;
  }>;
  
  // Dados financeiros
  value?: number;
  currency?: string;
  predicted_ltv?: number;
  num_items?: number;
  
  // Dados do pedido
  order_id?: string;
  status?: string;
  search_string?: string;
  
  // Dados customizados específicos
  [key: string]: any;
}

export interface FacebookConversionEvent {
  event_name: string;
  event_time: number; // Unix timestamp em segundos
  event_id?: string; // ID único para desduplicação
  user_data: UserData;
  custom_data?: CustomData;
  event_source_url?: string;
  action_source: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
  opt_out?: boolean;
  data_processing_options?: string[];
  data_processing_options_country?: number;
  data_processing_options_state?: number;
}

export interface FacebookCAPIPayload {
  data: FacebookConversionEvent[];
  test_event_code?: string;
  partner_agent?: string;
  namespace_id?: string;
  upload_id?: string;
  upload_tag?: string;
  upload_source?: string;
}

export interface FacebookCAPIResponse {
  events_received: number;
  messages: string[];
  fbtrace_id: string;
}

export interface FacebookCAPIConfig {
  pixelId: string;
  accessToken: string;
  apiVersion?: string;
  testEventCode?: string;
}

export class FacebookCAPIService {
  private readonly pixelId: string;
  private readonly accessToken: string;
  private readonly apiVersion: string;
  private readonly testEventCode?: string;
  private readonly baseUrl: string;

  constructor(config: FacebookCAPIConfig) {
    this.pixelId = config.pixelId;
    this.accessToken = config.accessToken;
    this.apiVersion = config.apiVersion || 'v18.0';
    this.testEventCode = config.testEventCode;
    this.baseUrl = `https://graph.facebook.com/${this.apiVersion}/${this.pixelId}/events`;

    // Validação dos parâmetros obrigatórios
    if (!this.pixelId || !this.accessToken) {
      throw new Error('Facebook Pixel ID e Access Token são obrigatórios');
    }
  }

  /**
   * Método privado para hashing SHA256
   * Normaliza a string (minúsculas, sem espaços extras) e retorna o hash SHA256 em hexadecimal
   */
  private hashSHA256(value: string): string {
    if (!value || typeof value !== 'string') {
      return '';
    }
    
    // Normalização: minúsculas e remoção de espaços extras
    const normalizedValue = value.toLowerCase().trim();
    
    // Gerar hash SHA256 em hexadecimal
    return crypto.createHash('sha256').update(normalizedValue).digest('hex');
  }

  /**
   * Método privado para processar dados do usuário
   * Aplica hashing SHA256 a todos os campos de PII
   * Mantém outros campos sem alteração
   */
  private processUserData(userData: Partial<UserData>): UserData {
    const processedData: UserData = {};

    // Campos PII que precisam de hashing
    const piiFields = ['em', 'ph', 'fn', 'ln', 'db', 'ge', 'ct', 'st', 'zp', 'country'];
    
    piiFields.forEach(field => {
      if (userData[field as keyof UserData]) {
        let value = userData[field as keyof UserData] as string;
        
        // Processamento especial para telefone
        if (field === 'ph') {
          // Remove todos os caracteres não numéricos
          value = value.replace(/[^\d]/g, '');
          // Adiciona código do país se não estiver presente (Brasil +55)
          if (value.length === 11 && !value.startsWith('55')) {
            value = '55' + value;
          }
        }
        
        // Processamento especial para data de nascimento
        if (field === 'db') {
          // Garantir formato YYYYMMDD
          value = value.replace(/[^\d]/g, '');
        }
        
        processedData[field as keyof UserData] = this.hashSHA256(value);
      }
    });

    // Campos não-PII que NÃO precisam de hashing
    const nonPiiFields = [
      'external_id', 'client_ip_address', 'client_user_agent', 
      'fbc', 'fbp', 'subscription_id', 'fb_login_id', 'lead_id'
    ];
    
    nonPiiFields.forEach(field => {
      if (userData[field as keyof UserData]) {
        processedData[field as keyof UserData] = userData[field as keyof UserData];
      }
    });

    return processedData;
  }

  /**
   * Método principal para envio de eventos
   * Aceita array de eventos e código de teste opcional
   */
  public async sendEvents(
    events: FacebookConversionEvent[],
    testEventCode?: string
  ): Promise<{ success: boolean; response?: FacebookCAPIResponse; error?: string }> {
    try {
      // Validação dos eventos
      if (!events || events.length === 0) {
        throw new Error('Pelo menos um evento deve ser fornecido');
      }

      // Processar cada evento
      const processedEvents = events.map(event => {
        // Garantir que event_time seja Unix timestamp em segundos
        const eventTime = event.event_time || Math.floor(Date.now() / 1000);
        
        // Processar user_data com hashing adequado
        const processedUserData = this.processUserData(event.user_data);
        
        // Gerar event_id se não fornecido
        const eventId = event.event_id || `${event.event_name}_${eventTime}_${crypto.randomUUID()}`;

        return {
          ...event,
          event_time: eventTime,
          event_id: eventId,
          user_data: processedUserData
        };
      });

      // Montar payload da requisição
      const payload: FacebookCAPIPayload = {
        data: processedEvents,
        partner_agent: 'escola-dons-capi-v1.0'
      };

      // Adicionar código de teste se fornecido
      if (testEventCode || this.testEventCode) {
        payload.test_event_code = testEventCode || this.testEventCode;
      }

      // Log do payload para depuração (apenas em desenvolvimento)
      if (process.env.NODE_ENV === 'development') {
        console.log('Facebook CAPI Payload:', JSON.stringify(payload, null, 2));
      }

      // Fazer requisição HTTP
      const response: AxiosResponse<FacebookCAPIResponse> = await axios.post(
        this.baseUrl,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.accessToken}`,
            'User-Agent': 'escola-dons-capi/1.0'
          },
          timeout: 10000, // 10 segundos de timeout
          validateStatus: (status: number) => status < 500 // Considerar status < 500 como válidos
        }
      );

      // Log de sucesso
      console.log(`✅ Facebook CAPI: ${response.data.events_received} eventos enviados com sucesso`);
      console.log(`📊 Trace ID: ${response.data.fbtrace_id}`);
      
      if (response.data.messages && response.data.messages.length > 0) {
        console.log('📝 Mensagens:', response.data.messages);
      }

      return {
        success: true,
        response: response.data
      };

    } catch (error: any) {
      // Log detalhado do erro
      const errorMessage = this.formatError(error);
      console.error('❌ Erro ao enviar eventos para Facebook CAPI:', errorMessage);
      
      // Log adicional em desenvolvimento
      if (process.env.NODE_ENV === 'development') {
        console.error('Detalhes do erro:', error);
      }

      return {
        success: false,
        error: errorMessage
      };
    }
  }

  /**
   * Método de conveniência para enviar um único evento
   */
  public async sendEvent(
    event: FacebookConversionEvent,
    testEventCode?: string
  ): Promise<{ success: boolean; response?: FacebookCAPIResponse; error?: string }> {
    return this.sendEvents([event], testEventCode);
  }

  /**
   * Método para formatar erros de forma consistente
   */
  private formatError(error: any): string {
    if (error.response) {
      // Erro da API do Facebook
      const status = error.response.status;
      const data = error.response.data;
      
      if (data && data.error) {
        return `Facebook API Error (${status}): ${data.error.message} (Code: ${data.error.code})`;
      }
      
      return `HTTP Error ${status}: ${error.response.statusText}`;
    }
    
    if (error.request) {
      // Erro de rede/conectividade
      return 'Erro de conectividade: Não foi possível conectar com a API do Facebook';
    }
    
    // Outros erros
    return error.message || 'Erro desconhecido';
  }

  /**
   * Método para validar configuração
   */
  public validateConfig(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.pixelId) {
      errors.push('Pixel ID é obrigatório');
    }

    if (!this.accessToken) {
      errors.push('Access Token é obrigatório');
    }

    // Validar formato do Pixel ID (deve ser numérico)
    if (this.pixelId && !/^\d+$/.test(this.pixelId)) {
      errors.push('Pixel ID deve conter apenas números');
    }

    // Validar formato do Access Token
    if (this.accessToken && !this.accessToken.startsWith('EAA')) {
      console.warn('⚠️ Access Token pode estar em formato incorreto (deveria começar com EAA)');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Método para testar conectividade
   */
  public async testConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      const testEvent: FacebookConversionEvent = {
        event_name: 'Test',
        event_time: Math.floor(Date.now() / 1000),
        event_id: `test_${Date.now()}`,
        user_data: {
          external_id: 'test_user'
        },
        action_source: 'website'
      };

      const result = await this.sendEvent(testEvent, 'TEST12345');
      return { success: result.success, error: result.error };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

// Factory function para criar instância do serviço
export function createFacebookCAPIService(config?: Partial<FacebookCAPIConfig>): FacebookCAPIService {
  const defaultConfig: FacebookCAPIConfig = {
    pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || process.env.FACEBOOK_PIXEL_ID || '',
    accessToken: process.env.META_CONVERSIONS_API_ACCESS_TOKEN || process.env.FACEBOOK_ACCESS_TOKEN || '',
    apiVersion: process.env.FACEBOOK_API_VERSION || 'v18.0',
    testEventCode: process.env.FACEBOOK_TEST_EVENT_CODE
  };

  const finalConfig = { ...defaultConfig, ...config };
  return new FacebookCAPIService(finalConfig);
} 