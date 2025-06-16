import crypto from 'crypto';
import axios, { AxiosResponse } from 'axios';

// Interfaces completas para tipagem
export interface UserData {
  em?: string; // Email (hashed)
  ph?: string; // Phone (hashed)
  fn?: string; // First name (hashed)
  ln?: string; // Last name (hashed)
  db?: string; // Date of birth YYYYMMDD (hashed)
  ge?: string; // Gender f/m (hashed)
  ct?: string; // City (hashed)
  st?: string; // State (hashed)
  zp?: string; // Zip code (hashed)
  country?: string; // Country code (not hashed)
  external_id?: string; // External ID (usually not hashed if it's an internal ID)
  client_ip_address?: string;
  client_user_agent?: string;
  fbc?: string; // Facebook click ID
  fbp?: string; // Facebook browser ID
}

export interface CustomData {
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  contents?: Array<{
    id: string;
    quantity?: number;
    item_price?: number;
  }>;
  num_items?: number;
  predicted_ltv?: number;
  search_string?: string;
  status?: string;
  [key: string]: any;
}

export interface FacebookConversionEvent {
  event_name: string;
  event_time: number;
  event_id?: string;
  user_data: UserData;
  custom_data?: CustomData;
  event_source_url?: string;
  action_source: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
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
  private pixelId: string;
  private accessToken: string;
  private apiVersion: string;
  private testEventCode?: string;

  constructor(
    pixelId: string,
    accessToken: string,
    options?: {
      apiVersion?: string;
      testEventCode?: string;
    }
  ) {
    this.pixelId = pixelId;
    this.accessToken = accessToken;
    this.apiVersion = options?.apiVersion || process.env.FACEBOOK_API_VERSION || 'v20.0';
    this.testEventCode = options?.testEventCode;

    if (!this.pixelId || !this.accessToken) {
      throw new Error('Facebook Pixel ID and Access Token are required');
    }
  }

  /**
   * Normaliza e faz hash SHA256 de dados PII
   */
  private hashSHA256(value: string): string {
    if (!value) return '';
    
    // Normalização completa antes do hash
    const normalized = value
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' '); // Remove espaços extras múltiplos
    
    return crypto.createHash('sha256').update(normalized, 'utf8').digest('hex');
  }

  /**
   * Normaliza telefone para o formato brasileiro [country_code][number]
   */
  private normalizePhone(phone: string): string {
    if (!phone) return '';
    
    // Remove todos os caracteres não numéricos
    const digitsOnly = phone.replace(/\D/g, '');
    
    // Se já tem código do país (55), mantém como está
    if (digitsOnly.startsWith('55') && digitsOnly.length >= 12) {
      return digitsOnly;
    }
    
    // Se não tem código do país, adiciona 55 (Brasil)
    if (digitsOnly.length >= 10) {
      return '55' + digitsOnly;
    }
    
    return digitsOnly;
  }

  /**
   * Normaliza data de nascimento para formato YYYYMMDD
   */
  private normalizeDateOfBirth(dateStr: string): string {
    if (!dateStr) return '';
    
    // Remove caracteres não numéricos
    const digitsOnly = dateStr.replace(/\D/g, '');
    
    // Se já está no formato YYYYMMDD
    if (digitsOnly.length === 8 && digitsOnly.startsWith('19') || digitsOnly.startsWith('20')) {
      return digitsOnly;
    }
    
    // Tenta parsear diferentes formatos comuns
    const formats = [
      /^(\d{2})\/(\d{2})\/(\d{4})$/, // DD/MM/YYYY
      /^(\d{2})-(\d{2})-(\d{4})$/, // DD-MM-YYYY
      /^(\d{4})-(\d{2})-(\d{2})$/, // YYYY-MM-DD
      /^(\d{4})\/(\d{2})\/(\d{2})$/, // YYYY/MM/DD
    ];

    for (const format of formats) {
      const match = dateStr.match(format);
      if (match) {
        if (format.source.startsWith('^(\\d{4})')) {
          // YYYY-MM-DD ou YYYY/MM/DD
          return match[1] + match[2] + match[3];
        } else {
          // DD/MM/YYYY ou DD-MM-YYYY
          return match[3] + match[2] + match[1];
        }
      }
    }
    
    // Se não conseguiu parsear, retorna apenas os dígitos se tiver 8
    return digitsOnly.length === 8 ? digitsOnly : '';
  }

  /**
   * Normaliza gênero para f ou m
   */
  private normalizeGender(gender: string): string {
    if (!gender) return '';
    
    const normalized = gender.toLowerCase().trim();
    
    if (normalized.startsWith('f') || normalized === 'feminino' || normalized === 'mulher') {
      return 'f';
    }
    if (normalized.startsWith('m') || normalized === 'masculino' || normalized === 'homem') {
      return 'm';
    }
    
    return '';
  }

  /**
   * Processa dados do usuário separando PII (que deve ser hasheado) de não-PII
   */
  private processUserData(userData: any): UserData {
    const processed: UserData = {};

    // Dados que devem ser hasheados (PII)
    if (userData.email) {
      processed.em = this.hashSHA256(userData.email);
    }
    
    if (userData.phone) {
      const normalizedPhone = this.normalizePhone(userData.phone);
      processed.ph = normalizedPhone ? this.hashSHA256(normalizedPhone) : undefined;
    }
    
    if (userData.first_name) {
      processed.fn = this.hashSHA256(userData.first_name);
    }
    
    if (userData.last_name) {
      processed.ln = this.hashSHA256(userData.last_name);
    }
    
    if (userData.date_of_birth) {
      const normalizedDate = this.normalizeDateOfBirth(userData.date_of_birth);
      processed.db = normalizedDate ? this.hashSHA256(normalizedDate) : undefined;
    }
    
    if (userData.gender) {
      const normalizedGender = this.normalizeGender(userData.gender);
      processed.ge = normalizedGender ? this.hashSHA256(normalizedGender) : undefined;
    }
    
    if (userData.city) {
      processed.ct = this.hashSHA256(userData.city);
    }
    
    if (userData.state) {
      processed.st = this.hashSHA256(userData.state);
    }
    
    if (userData.zip_code) {
      processed.zp = this.hashSHA256(userData.zip_code);
    }

    // Dados que NÃO devem ser hasheados
    if (userData.country) {
      processed.country = userData.country.toLowerCase();
    }
    
    // external_id: não hashear se for um ID interno anônimo
    // Se for PII (como email criptografado), deveria ser hasheado
    if (userData.external_id) {
      // Verifica se parece com email ou PII
      if (userData.external_id.includes('@') || userData.external_id.includes('.com')) {
        processed.external_id = this.hashSHA256(userData.external_id);
      } else {
        processed.external_id = userData.external_id;
      }
    }

    // Dados técnicos (nunca hasheados)
    if (userData.client_ip_address) {
      processed.client_ip_address = userData.client_ip_address;
    }
    
    if (userData.client_user_agent) {
      processed.client_user_agent = userData.client_user_agent;
    }
    
    if (userData.fbc) {
      processed.fbc = userData.fbc;
    }
    
    if (userData.fbp) {
      processed.fbp = userData.fbp;
    }

    return processed;
  }

  /**
   * Envia eventos para a API de Conversões do Facebook
   */
  async sendEvents(
    events: Omit<FacebookConversionEvent, 'user_data'>[], 
    rawUserData: any,
    options?: {
      testEventCode?: string;
    }
  ): Promise<{
    success: boolean;
    events_received?: number;
    fbtrace_id?: string;
    messages?: any[];
    error?: string;
  }> {
    try {
      // Processa dados do usuário uma vez para todos os eventos
      const processedUserData = this.processUserData(rawUserData);

      // Adiciona user_data processado a cada evento
      const processedEvents: FacebookConversionEvent[] = events.map(event => ({
        ...event,
        user_data: processedUserData
      }));

      const payload = {
        data: processedEvents,
        partner_agent: 'escola-dons-capi-v1.0',
        // test_event_code deve ser usado APENAS em ambiente de teste
        ...(options?.testEventCode || this.testEventCode ? { 
          test_event_code: options?.testEventCode || this.testEventCode 
        } : {})
      };

      console.log('🔵 [FacebookCAPI] Enviando eventos:', {
        pixelId: this.pixelId,
        apiVersion: this.apiVersion,
        eventsCount: processedEvents.length,
        eventNames: processedEvents.map(e => e.event_name),
        isTest: !!(options?.testEventCode || this.testEventCode),
        userDataFields: Object.keys(processedUserData)
      });

      const url = `https://graph.facebook.com/${this.apiVersion}/${this.pixelId}/events`;
      
      const response: AxiosResponse = await axios.post(url, payload, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 segundos timeout
      });

      console.log('✅ [FacebookCAPI] Eventos enviados com sucesso:', response.data);

      return {
        success: true,
        events_received: response.data.events_received,
        fbtrace_id: response.data.fbtrace_id,
        messages: response.data.messages
      };

    } catch (error: any) {
      console.error('❌ [FacebookCAPI] Erro ao enviar eventos:', {
        error: error.message,
        response: error.response?.data,
        status: error.response?.status,
        events: events.map(e => ({ name: e.event_name, id: e.event_id }))
      });

      return {
        success: false,
        error: error.response?.data?.error?.message || error.message
      };
    }
  }

  /**
   * Valida a configuração do serviço
   */
  validateConfig(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.pixelId) {
      errors.push('Facebook Pixel ID é obrigatório');
    }

    if (!this.accessToken) {
      errors.push('Facebook Access Token é obrigatório');
    }

    if (!this.apiVersion) {
      errors.push('Facebook API Version é obrigatória');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Testa a conectividade com a API do Facebook
   */
  async testConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      const testEvent: Omit<FacebookConversionEvent, 'user_data'> = {
        event_name: 'PageView',
        event_time: Math.floor(Date.now() / 1000),
        event_id: `test_${Date.now()}`,
        action_source: 'website',
        event_source_url: 'https://example.com/test'
      };

      const result = await this.sendEvents(
        [testEvent], 
        { external_id: 'test_user' },
        { testEventCode: 'TEST12345' }
      );

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
    apiVersion: process.env.FACEBOOK_API_VERSION || 'v20.0',
    // test_event_code deve ser usado APENAS em ambiente de desenvolvimento/teste
    testEventCode: process.env.NODE_ENV === 'production' ? undefined : process.env.FACEBOOK_TEST_EVENT_CODE
  };

  const finalConfig = { ...defaultConfig, ...config };
  return new FacebookCAPIService(finalConfig.pixelId, finalConfig.accessToken, {
    apiVersion: finalConfig.apiVersion,
    testEventCode: finalConfig.testEventCode
  });
} 