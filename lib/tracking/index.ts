/**
 * Arquivos de exportação para os componentes e funções de tracking
 */

import { useEffect } from 'react';
import { Tracking } from './types';

// Componentes
export { default as GoogleTagManager } from './GoogleTagManager';

// Funções de debug (apenas em desenvolvimento)
export * from './debug';

// Tipos
export * from './types';

/**
 * Função utilitária para enviar eventos para o dataLayer
 * @param eventName Nome do evento
 * @param eventParams Parâmetros adicionais do evento
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
        timestamp: new Date().toISOString(),
      });
      
      // Log para debug em desenvolvimento
      if (process.env.NODE_ENV !== 'production') {
        console.log('[GTM Event]', eventName, eventParams);
      }
    }
  } catch (error) {
    console.error('[GTM Event Error]', error);
  }
};

/**
 * Hook para enviar eventos de visualização de página
 * @param pageTitle Título da página
 * @param pagePath Caminho da página (opcional, usa window.location.pathname por padrão)
 */
export const usePageView = (pageTitle: string, pagePath?: string) => {
  useEffect(() => {
    try {
      // Enviar o evento de visualização de página
      trackEvent('page_view', {
        page_title: pageTitle,
        page_path: pagePath || (typeof window !== 'undefined' ? window.location.pathname : ''),
        page_location: typeof window !== 'undefined' ? window.location.href : '',
      });
    } catch (error) {
      console.error('[Page View Error]', error);
    }
  }, [pageTitle, pagePath]);
}; 