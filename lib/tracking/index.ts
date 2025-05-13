export { default as GoogleTagManager } from './GoogleTagManager';
export { default as trackingConfig } from './config';

// Função para enviar eventos para o dataLayer
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });
  }
};

// Função para enviar eventos de conversão
export const trackConversion = (conversionId: string, params: Record<string, any> = {}) => {
  trackEvent('conversion', {
    conversion_id: conversionId,
    ...params
  });
};

// Função para enviar eventos de pageview
export const trackPageView = (path: string, title: string) => {
  trackEvent('pageview', {
    page_path: path,
    page_title: title
  });
};
