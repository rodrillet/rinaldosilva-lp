/**
 * Arquivos de exportação para os componentes e funções de tracking
 */

// Componentes
export { default as GoogleTagManager } from './GoogleTagManager';

// Tipos
export * from './types';

/**
 * Função utilitária para enviar eventos para o dataLayer
 * @param eventName Nome do evento
 * @param eventParams Parâmetros adicionais do evento
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
}; 