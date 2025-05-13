/**
 * Funções de debug para o Google Tag Manager
 */

/**
 * Verifica se o Google Tag Manager está carregado corretamente
 * Use esta função em desenvolvimento para verificar se o GTM está funcionando
 */
export const checkGTMStatus = () => {
  if (typeof window === 'undefined') return { loaded: false, message: 'Window not available' };

  try {
    // Verifica se o dataLayer existe
    const dataLayerExists = !!window.dataLayer;
    
    // Verifica se o script do GTM está presente
    const scriptExists = !!document.getElementById('gtm-script');
    const noscriptExists = document.querySelectorAll('noscript iframe[src*="googletagmanager"]').length > 0;
    
    // Verifica se há objetos GTM na janela
    const gtmObjectsExist = Object.keys(window).some(key => key.includes('gtm'));
    
    return {
      loaded: dataLayerExists && (scriptExists || gtmObjectsExist),
      dataLayer: {
        exists: dataLayerExists,
        events: dataLayerExists ? window.dataLayer.length : 0,
        content: dataLayerExists ? JSON.stringify(window.dataLayer) : null
      },
      dom: {
        scriptExists,
        noscriptExists
      },
      gtmObjectsExist
    };
  } catch (error) {
    return {
      loaded: false,
      error: error.message
    };
  }
};

/**
 * Injeta um evento de teste no dataLayer
 * Use esta função para verificar se os eventos estão sendo enviados corretamente
 */
export const injectTestEvent = () => {
  if (typeof window === 'undefined') return false;
  
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'test_event',
      test_id: `test_${Date.now()}`,
      timestamp: new Date().toISOString()
    });
    
    return true;
  } catch (error) {
    console.error('[GTM Test Event Error]', error);
    return false;
  }
}; 