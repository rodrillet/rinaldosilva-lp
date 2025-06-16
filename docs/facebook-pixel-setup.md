# Implementação do Facebook Pixel - Escola de Dons Espirituais

## Visão Geral

Esta implementação inclui o Facebook Pixel (Meta Pixel) com recursos avançados de tracking e dados de alta qualidade para maximizar a performance dos anúncios e conversões.

## Recursos Implementados

### 1. Meta Pixel Básico
- **Pixel ID**: 549718907556036
- **PageView**: Trackeo automático com dados enriquecidos
- **Noscript fallback**: Para usuários com JavaScript desabilitado

### 2. Eventos Automatizados
- ✅ **PageView** - Visualização da página com dados completos
- ✅ **InitiateCheckout** - Quando clica nos CTAs principais
- ✅ **ViewContent** - Quando visualiza seção de preços
- ✅ **ScrollDepth** - Profundidade do scroll (25%, 50%, 75%, 100%)
- ✅ **TimeOnPage** - Tempo na página (30s, 60s, 120s)
- ✅ **ViewSection** - Visualização de cada seção específica
- ✅ **EngagedUser** - Usuários com alto engajamento

### 3. Dados de Alta Qualidade Coletados

#### Dados do Usuário:
- `external_id` - ID único gerado para cada usuário
- `fbp` - Facebook Browser ID (cookie)
- `fbc` - Facebook Click ID (se vier do Facebook)
- `client_user_agent` - Informações do navegador
- `client_ip_address` - IP do usuário (para server-side)

#### Dados da Sessão:
- `session_id` - ID único da sessão
- `landing_page` - URL de entrada
- `referrer` - Página de origem
- `utm_*` - Todos os parâmetros UTM
- `browser` - Detalhes do navegador
- `language` - Idioma do usuário
- `screen_resolution` - Resolução da tela
- `viewport` - Tamanho da janela
- `timezone` - Fuso horário
- `device_type` - Tipo de dispositivo (mobile/desktop)

#### Dados do Produto:
- `content_name` - "Escola de Dons Espirituais"
- `content_category` - "Educação Religiosa"
- `content_type` - "product"
- `value` - 497.00
- `currency` - "BRL"
- `predicted_ltv` - 1500.00

### 4. Cookies e Armazenamento
- **First-party cookies** para melhor tracking
- **localStorage** para persistência de dados
- **sessionStorage** para dados temporários
- **GDPR/LGPD compliant** com hashing de dados sensíveis

### 5. Server-Side Tracking (Opcional)
- Utilitários prontos em `lib/facebook-conversions.ts`
- Conversions API preparada para uso
- Hash automático de dados pessoais (GDPR/LGPD)

## Como Funciona

### 1. Inicialização
Quando a página carrega:
- Gera/recupera ID único do usuário
- Coleta dados da sessão e dispositivo
- Configura cookies de primeira parte
- Envia PageView enriquecido

### 2. Tracking Automático
Durante a navegação:
- Monitora scroll depth
- Tracka tempo na página
- Detecta visualização de seções
- Identifica quando usuário vê preços

### 3. Eventos de Conversão
Quando o usuário interage:
- Cliques em CTAs → `InitiateCheckout`
- Visualização de preços → `ViewContent`
- Alto engajamento → `Lead`
- Compra finalizada → `Purchase` (configurar externamente)

## Configuração

### Variáveis de Ambiente Necessárias:
```env
NEXT_PUBLIC_META_PIXEL_ID=549718907556036
META_CONVERSIONS_API_ACCESS_TOKEN=seu_token_aqui
```

### Verificação de Funcionamento:

1. **Facebook Events Manager**:
   - Acesse events.facebook.com
   - Verifique se os eventos estão chegando
   - Monitore qualidade dos dados

2. **Chrome DevTools**:
   - Console → procure por logs do Facebook
   - Application → veja cookies `_fbp`, `fb_user_id`
   - Network → verifique chamadas para facebook.com

3. **Facebook Pixel Helper** (extensão Chrome):
   - Instale a extensão oficial
   - Verifique se pixel está disparando
   - Confirme eventos customizados

## Eventos Personalizados Implementados

### CTAClick
```javascript
fbq('trackCustom', 'CTAClick', {
  cta_text: "texto do botão",
  cta_position: "seção da página",
  value: 497.00,
  currency: 'BRL'
});
```

### ViewSection
```javascript
fbq('trackCustom', 'ViewSection', {
  section_name: "inicio|conteudo|investimento|mentor",
  timestamp: "ISO timestamp"
});
```

### ScrollDepth
```javascript
fbq('trackCustom', 'ScrollDepth', {
  scroll_depth: 25, // 25%, 50%, 75%, 100%
  time_on_page: 45 // segundos
});
```

### EngagedUser
```javascript
fbq('trackCustom', 'EngagedUser_30s', {
  content_name: 'Escola de Dons Espirituais',
  time_spent: 30,
  funnel_stage: 'interest'
});
```

## Funil de Conversão Implementado

1. **Awareness** - PageView inicial
2. **Interest** - 30s na página
3. **Consideration** - 60s na página + ViewPricing
4. **Decision** - 120s na página + múltiplos CTAs
5. **Action** - InitiateCheckout

## Próximos Passos Recomendados

1. **Configurar Audiências Personalizadas**:
   - Visitantes da landing page
   - Usuários que visualizaram preços
   - Usuários com alto engajamento

2. **Configurar Campanhas de Retargeting**:
   - Para quem viu preços mas não comprou
   - Para usuários com alto engajamento
   - Para diferentes fases do funil

3. **Implementar Server-Side Events**:
   - Usar `lib/facebook-conversions.ts`
   - Melhorar qualidade dos dados
   - Backup para iOS 14.5+

4. **Otimizar com Base nos Dados**:
   - Analisar qual seção gera mais conversões
   - Otimizar CTAs com base nos cliques
   - Ajustar tempo de exibição de elementos

## Compliance e Privacidade

- ✅ **LGPD/GDPR Compliant**: Dados pessoais são hasheados
- ✅ **Cookies Seguros**: SameSite=Lax, Secure
- ✅ **Transparência**: Usuário pode optar por não participar
- ✅ **Data Minimization**: Coletamos apenas dados necessários

## Monitoramento e Qualidade

### KPIs para Acompanhar:
- **Events Match Quality**: >8.0 no Events Manager
- **Pixel Quality Score**: >8.0
- **Attribution Score**: >7.0
- **Data Richness**: Máximo de parâmetros preenchidos

### Troubleshooting:
1. Eventos não aparecem → Verificar Pixel ID
2. Qualidade baixa → Verificar dados do usuário
3. Duplicados → Verificar event_id único
4. iOS não trackea → Implementar server-side

---

**Status**: ✅ Implementado e Funcional
**Última Atualização**: Janeiro 2025
**Responsável**: Sistema de Tracking Avançado 