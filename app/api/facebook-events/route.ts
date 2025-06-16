import { NextRequest, NextResponse } from 'next/server';
import { createFacebookCAPIService, FacebookCAPIService, FacebookConversionEvent, UserData, CustomData } from '@/services/facebook-capi.service';

// Interface para dados recebidos do frontend
interface FacebookEventRequest {
  event_name: string;
  event_id: string;
  event_source_url: string;
  user_data: {
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
    fbc?: string; // Facebook click ID
    fbp?: string; // Facebook browser ID
  };
  custom_data?: CustomData;
  timestamp?: number;
}

/**
 * Extrai o IP real do cliente considerando proxies e CDNs
 */
function getClientIP(request: NextRequest): string {
  // Headers comuns para IP real
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip'); // Cloudflare
  const xClientIP = request.headers.get('x-client-ip');
  const xForwarded = request.headers.get('x-forwarded');
  const forwardedProto = request.headers.get('forwarded-for');
  const forwarded = request.headers.get('forwarded');

  // Ordem de prioridade para obter o IP real
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  if (realIP) {
    return realIP;
  }

  if (forwardedFor) {
    // X-Forwarded-For pode conter múltiplos IPs separados por vírgula
    // O primeiro é o IP original do cliente
    return forwardedFor.split(',')[0].trim();
  }

  if (xClientIP) {
    return xClientIP;
  }

  if (xForwarded) {
    return xForwarded.split(',')[0].trim();
  }

  if (forwardedProto) {
    return forwardedProto.split(',')[0].trim();
  }

  if (forwarded) {
    // Header Forwarded tem formato complexo: for=ip;proto=http;by=ip
    const forMatch = forwarded.match(/for=([^;,\s]+)/);
    if (forMatch) {
      return forMatch[1].replace(/"/g, '');
    }
  }

  // Fallback para desenvolvimento local
  return '127.0.0.1';
}

/**
 * Extrai User Agent do cabeçalho
 */
function getUserAgent(request: NextRequest): string {
  return request.headers.get('user-agent') || 'Unknown';
}

/**
 * Valida dados do evento
 */
function validateEventData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.event_name || typeof data.event_name !== 'string') {
    errors.push('event_name é obrigatório e deve ser string');
  }

  if (!data.event_id || typeof data.event_id !== 'string') {
    errors.push('event_id é obrigatório e deve ser string');
  }

  if (!data.event_source_url || typeof data.event_source_url !== 'string') {
    errors.push('event_source_url é obrigatório e deve ser string');
  }

  if (!data.user_data || typeof data.user_data !== 'object') {
    errors.push('user_data é obrigatório e deve ser objeto');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}



/**
 * Handler para requisições POST
 */
export async function POST(request: NextRequest) {
  try {
    // Parse do body da requisição
    const body: FacebookEventRequest = await request.json();
    
    // Log da requisição para depuração (apenas em desenvolvimento)
    if (process.env.NODE_ENV === 'development') {
      console.log('📥 Recebido evento do frontend:', JSON.stringify(body, null, 2));
    }

    // Validar dados recebidos
    const validation = validateEventData(body);
    if (!validation.valid) {
      console.error('❌ Dados inválidos:', validation.errors);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Dados inválidos', 
          details: validation.errors 
        },
        { status: 400 }
      );
    }

    // Extrair dados do servidor (mais confiáveis)
    const clientIP = getClientIP(request);
    const userAgent = getUserAgent(request);

    console.log(`🌐 Cliente: IP=${clientIP}, UA=${userAgent.substring(0, 50)}...`);

    // Montar evento para CAPI (sem user_data pois será processado pelo serviço)
    const event: Omit<FacebookConversionEvent, 'user_data'> = {
      event_name: body.event_name,
      event_id: body.event_id,
      event_time: body.timestamp ? Math.floor(body.timestamp / 1000) : Math.floor(Date.now() / 1000),
      event_source_url: body.event_source_url,
      action_source: 'website',
      custom_data: body.custom_data || {}
    };

    // Log do evento processado (apenas em desenvolvimento)
    if (process.env.NODE_ENV === 'development') {
      console.log('📤 Enviando evento para CAPI:', JSON.stringify(event, null, 2));
    }

    // Criar instância do serviço CAPI
    const facebookCAPI = createFacebookCAPIService();

    // Validar configuração
    const configValidation = facebookCAPI.validateConfig();
    if (!configValidation.valid) {
      console.error('❌ Configuração inválida:', configValidation.errors);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Configuração inválida do Facebook CAPI', 
          details: configValidation.errors 
        },
        { status: 500 }
      );
    }

    // Preparar dados brutos do usuário para o serviço processar
    const rawUserData = {
      ...body.user_data,
      client_ip_address: clientIP,
      client_user_agent: userAgent
    };

    // Enviar evento para Facebook
    const result = await facebookCAPI.sendEvents([event], rawUserData);

    if (result.success) {
      console.log(`✅ Evento ${body.event_name} enviado com sucesso para Facebook CAPI`);
      return NextResponse.json({
        success: true,
        message: 'Evento enviado com sucesso',
        facebook_response: {
          events_received: result.events_received,
          fbtrace_id: result.fbtrace_id,
          messages: result.messages
        }
      });
    } else {
      console.error(`❌ Falha ao enviar evento ${body.event_name}:`, result.error);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Falha ao enviar evento para Facebook', 
          details: result.error 
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('❌ Erro no endpoint /api/facebook-events:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erro interno do servidor',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

/**
 * Handler para requisições GET (para teste)
 */
export async function GET() {
  try {
    // Criar instância do serviço para teste
    const facebookCAPI = createFacebookCAPIService();
    
    // Validar configuração
    const configValidation = facebookCAPI.validateConfig();
    
    if (!configValidation.valid) {
      return NextResponse.json({
        status: 'error',
        message: 'Configuração inválida',
        errors: configValidation.errors
      }, { status: 500 });
    }

    // Testar conectividade
    const connectionTest = await facebookCAPI.testConnection();

    return NextResponse.json({
      status: connectionTest.success ? 'ok' : 'error',
      message: connectionTest.success ? 'Facebook CAPI configurado e funcionando' : 'Erro na conexão',
      config_valid: configValidation.valid,
      connection_test: connectionTest,
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    return NextResponse.json({
      status: 'error',
      message: 'Erro ao testar Facebook CAPI',
      error: error.message
    }, { status: 500 });
  }
} 