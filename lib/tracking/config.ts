// Configurações para tracking e analytics
export const trackingConfig = {
  // ID do Google Tag Manager
  gtmId: 'GTM-KL4NV4FC',
  
  // Configurações para Facebook Pixel
  facebookPixel: {
    enabled: true,
    // Caso precise configurar mais opções específicas para o Facebook Pixel
  },
  
  // Configurações para Google Analytics
  googleAnalytics: {
    enabled: true,
    // Caso precise configurar opções específicas para o GA
  },
  
  // Lista de eventos personalizados para a aplicação
  customEvents: {
    PURCHASE: 'purchase',
    ADD_TO_CART: 'add_to_cart',
    COURSE_ENROLLMENT: 'course_enrollment',
    FORM_SUBMISSION: 'form_submission',
    CONTACT_CLICK: 'contact_click',
    SOCIAL_CLICK: 'social_click'
  }
};

export default trackingConfig;
