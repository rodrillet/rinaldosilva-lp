# Facebook Conversions API (CAPI) - Implementação Completa

## 📋 Visão Geral

Esta implementação da Facebook Conversions API (CAPI) fornece tracking server-side de alta qualidade para maximizar a performance das campanhas no Facebook. A implementação segue as melhores práticas recomendadas pelo Facebook para garantir a nota máxima na qualidade dos eventos.

## 🏗️ Arquitetura

```
Frontend (Client-side)     Backend (Server-side)      Facebook
─────────────────────      ───────────────────        ────────
│ Facebook Pixel     │ ──► │ CAPI Service      │ ──► │ Graph API │
│ + CAPI Frontend    │     │ + Endpoint API    │     │           │
│ Cookies FBC/FBP    │     │ IP/UA Extraction  │     │           │
│ Event ID Generation│     │ SHA256 Hashing    │     │           │
└────────────────────┘     └───────────────────┘     └───────────┘
```

## 📁 Estrutura de Arquivos

```
├── services/
│   └── facebook-capi.service.ts       # Serviço principal da CAPI
├── lib/
│   └── facebook-capi-frontend.ts      # Utilitários frontend
├── app/api/
│   └── facebook-events/route.ts       # Endpoint API
├── docs/
│   ├── facebook-pixel-setup.md        # Pixel setup
│   └── facebook-capi-implementation.md # Esta documentação
└── .env.local                         # Configurações
```

## 🔧 Configuração

### Variáveis de Ambiente

```bash
# Meta Pixel Configuration
NEXT_PUBLIC_META_PIXEL_ID=549718907556036

# Facebook Conversions API
META_CONVERSIONS_API_ACCESS_TOKEN=seu_token_aqui
FACEBOOK_PIXEL_ID=549718907556036
FACEBOOK_ACCESS_TOKEN=seu_token_aqui
FACEBOOK_API_VERSION=v18.0
FACEBOOK_TEST_EVENT_CODE=TEST12345 # Para testes

# Environment
NODE_ENV=production
```

### Dependências

```bash
npm install axios
```

## 🚀 Uso

### 1. Frontend - Envio de Eventos

```typescript
import { facebookCAPI, FacebookCookieUtils } from '@/lib/facebook-capi-frontend';

// Garantir cookies do Facebook
FacebookCookieUtils.ensureFbp();

// PageView
await facebookCAPI.trackPageView({
  external_id: 'user_123',
  email: 'user@example.com'
});

// InitiateCheckout
await facebookCAPI.trackInitiateCheckout(497.00, 'BRL', {
  external_id: 'user_123',
  phone: '+5511999999999'
});

// ViewContent
await facebookCAPI.trackViewContent('Escola de Dons Espirituais', 'Educação', 497.00);

// Lead
await facebookCAPI.trackLead({
  email: 'lead@example.com',
  phone: '+5511888888888'
});

// Evento customizado
await facebookCAPI.trackCustomEvent('SpecialEvent', {
  content_name: 'Evento Especial',
  value: 100.00,
  currency: 'BRL'
}, {
  external_id: 'user_123'
});
```

### 2. Backend - Serviço CAPI

```typescript
import { createFacebookCAPIService, FacebookConversionEvent } from '@/services/facebook-capi.service';

// Criar instância do serviço
const facebookCAPI = createFacebookCAPIService();

// Validar configuração
const validation = facebookCAPI.validateConfig();
if (!validation.valid) {
  console.error('Configuração inválida:', validation.errors);
}

// Enviar evento único
const event: FacebookConversionEvent = {
  event_name: 'Purchase',
  event_time: Math.floor(Date.now() / 1000),
  event_id: 'purchase_123',
  user_data: {
    em: 'user@example.com', // Será automaticamente hasheado
    ph: '+5511999999999',   // Será automaticamente hasheado
    client_ip_address: '192.168.1.1',
    client_user_agent: 'Mozilla/5.0...',
    fbc: 'fb.1.1234567890.abc123',
    fbp: 'fb.1.1234567890.xyz789'
  },
  custom_data: {
    value: 497.00,
    currency: 'BRL',
    content_name: 'Escola de Dons Espirituais'
  },
  event_source_url: 'https://example.com/curso',
  action_source: 'website'
};

const result = await facebookCAPI.sendEvent(event);
```

## 🔒 Segurança e Privacidade

### Hashing Automático de PII

O sistema automaticamente aplica hash SHA256 nos seguintes campos:

- `em` (email)
- `ph` (phone)
- `fn` (first_name)
- `ln` (last_name)
- `db` (date_of_birth)
- `ge` (gender)
- `ct` (city)
- `st` (state)
- `zp` (zip_code)
- `country`

### Dados Não Hasheados

Estes campos são enviados sem hash:

- `client_ip_address`
- `client_user_agent`
- `fbc` (Facebook Click ID)
- `fbp` (Facebook Browser ID)
- `external_id`

### Normalização de Dados

Antes do hashing, os dados são normalizados:

- Convertidos para minúsculas
- Espaços extras removidos
- Telefones: apenas dígitos, código país adicionado se necessário
- Datas: formato YYYYMMDD

## 📊 Eventos Implementados

### Eventos Padrão

1. **PageView**
   - Automaticamente enviado no carregamento da página
   - Inclui dados de sessão e UTM

2. **InitiateCheckout**
   - Disparado ao clicar em CTAs de compra
   - Inclui valor e moeda

3. **ViewContent**
   - Para visualização de conteúdo específico
   - Categorização automática

4. **Lead**
   - Para captura de leads
   - Dados de contato quando disponíveis

### Eventos Customizados

- `EnhancedPageView` - PageView com dados enriquecidos
- `ViewPricing` - Visualização da seção de preços
- `EngagedUser_30s` - Usuário engajado por 30s
- `EngagedUser_60s` - Usuário engajado por 60s
- `HighEngagement_120s` - Alto engajamento (120s)
- `ScrollDepth` - Profundidade de scroll
- `TimeOnPage` - Tempo na página
- `ViewSection` - Visualização de seções
- `CTAClick` - Cliques em CTAs

## 🎯 Desduplicação

O sistema implementa desduplicação completa:

1. **Event ID Único**: Cada evento recebe um ID único
2. **Sincronização**: Mesmo `event_id` usado no Pixel e CAPI
3. **Formato**: `{eventName}_{timestamp}_{random}`

```typescript
// Exemplo de desduplicação
const eventId = `PageView_${Date.now()}_abc123def456`;

// Pixel (client-side)
fbq('track', 'PageView', {}, { eventID: eventId });

// CAPI (server-side)
await facebookCAPI.sendEvent({
  event_id: eventId,
  // ... outros dados
});
```

## 🌐 Extração de Dados Server-side

### IP do Cliente

O sistema extrai automaticamente o IP real considerando:

- `cf-connecting-ip` (Cloudflare)
- `x-real-ip`
- `x-forwarded-for`
- `x-client-ip`
- Headers de proxy/CDN

### User Agent

Extraído diretamente do header `User-Agent` da requisição.

## 📈 Monitoramento e Logs

### Logs de Desenvolvimento

```javascript
// Console logs automáticos em desenvolvimento
console.log('✅ PageView enviado com sucesso para CAPI');
console.log('📊 Trace ID: fb_trace_123456789');
console.error('❌ Erro ao enviar evento:', error);
```

### Logs de Produção

- Logs estruturados para análise
- Trace IDs do Facebook para debugging
- Métricas de sucesso/falha

## 🧪 Testes

### Teste de Conectividade

```typescript
// Teste automático
const testResult = await facebookCAPI.testConnection();
console.log(testResult);

// Teste via endpoint
GET /api/facebook-events
```

### Código de Teste

Use `FACEBOOK_TEST_EVENT_CODE=TEST12345` para eventos de teste.

### Validação de Eventos

Use o Event Manager do Facebook para validar:

1. Acesse Events Manager
2. Selecione seu Pixel
3. Vá em "Test Events"
4. Verifique eventos em tempo real

## 🚨 Tratamento de Erros

### Tipos de Erro

1. **Configuração Inválida**
   ```typescript
   {
     success: false,
     error: 'Configuração inválida do Facebook CAPI',
     details: ['Pixel ID é obrigatório']
   }
   ```

2. **Erro da API**
   ```typescript
   {
     success: false,
     error: 'Facebook API Error (400): Invalid parameter',
     details: 'Code: 100'
   }
   ```

3. **Erro de Rede**
   ```typescript
   {
     success: false,
     error: 'Erro de conectividade: Não foi possível conectar com a API do Facebook'
   }
   ```

### Estratégias de Fallback

- Retry automático em caso de erro temporário
- Graceful degradation se CAPI falhar
- Pixel continua funcionando independentemente

## 📋 Checklist de Qualidade

Para garantir nota máxima no Facebook:

- ✅ **Event ID único** para desduplicação
- ✅ **Hash SHA256** para todos os PIIs
- ✅ **IP e User Agent** extraídos do servidor
- ✅ **FBC e FBP** capturados corretamente
- ✅ **Dados normalizados** antes do hash
- ✅ **Timestamp Unix** em segundos
- ✅ **Action Source** definido como 'website'
- ✅ **Custom Data** estruturado corretamente
- ✅ **Error Handling** robusto
- ✅ **Logs estruturados** para debugging

## 🔄 Fluxo Completo

1. **Usuário acessa a página**
   - Pixel carrega e executa
   - Cookies FBC/FBP são definidos
   - CAPI envia PageView

2. **Usuário interage (CTA click)**
   - Pixel envia InitiateCheckout
   - CAPI envia InitiateCheckout (mesmo event_id)
   - Dados são desduplicados automaticamente

3. **Servidor processa**
   - IP e User Agent extraídos
   - PIIs são hasheados
   - Evento enviado para Facebook

4. **Facebook processa**
   - Eventos são consolidados
   - Desduplicação por event_id
   - Atribuição melhorada

## 🎓 Próximos Passos

1. **Monitorar Qualidade**: Use Events Manager para verificar score
2. **Otimizar Dados**: Adicione mais dados de usuário quando disponível
3. **A/B Testing**: Compare performance com/sem CAPI
4. **Expansão**: Adicione mais eventos customizados conforme necessário

## 📞 Suporte

Para dúvidas sobre a implementação:

1. Verifique os logs no console (desenvolvimento)
2. Use o endpoint `GET /api/facebook-events` para testes
3. Consulte a documentação oficial do Facebook
4. Analise o Event Manager para validação

---

**⚠️ Importante**: Esta implementação está em conformidade com LGPD/GDPR e segue as melhores práticas de privacidade do Facebook. 