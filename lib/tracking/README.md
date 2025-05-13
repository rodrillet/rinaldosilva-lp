# Módulo de Tracking

Este módulo contém os componentes e funções relacionados ao tracking e análise do site.

## Componentes

### GoogleTagManager

Componente principal que insere o script do Google Tag Manager no site. Este componente deve ser adicionado no arquivo `app/layout.tsx` para que seja carregado em todas as páginas.

```tsx
import { GoogleTagManager } from "@/lib/tracking";

// No seu componente de layout
<GoogleTagManager />
```

## Funções Utilitárias

### trackEvent

Função para enviar eventos personalizados para o dataLayer do Google Tag Manager.

```tsx
import { trackEvent } from "@/lib/tracking";

// Exemplo de uso
trackEvent('button_click', { 
  buttonName: 'inscrever',
  pagePath: '/escola-ministerial'
});
```

## Configuração do ID do GTM

O ID do GTM (`GTM-KL4NV4FC`) está configurado diretamente no componente GoogleTagManager. Caso necessite mudar, atualize-o no arquivo `lib/tracking/GoogleTagManager.tsx`.

## Eventos Padrão

Lista de eventos padrão que são rastreados:

- `page_view`: Visualização de página
- `button_click`: Clique em botão 
- `form_submit`: Envio de formulário
- `link_click`: Clique em link externo

## Extensibilidade

Para adicionar novos métodos de tracking:

1. Crie um novo componente na pasta `lib/tracking`
2. Exporte o componente no arquivo `index.ts`
3. Atualize esta documentação com informações sobre o novo componente 