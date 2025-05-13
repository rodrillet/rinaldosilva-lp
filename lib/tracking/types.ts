/**
 * Namespace para tipos relacionados a tracking
 */
export namespace Tracking {
  /** Eventos do Google Analytics */
  export type AnalyticsEvent = {
    action: string;
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
  };

  /** Configuração do dataLayer */
  export interface DataLayerConfig {
    push: (event: Record<string, any>) => void;
  }
}

/**
 * Extensão da interface Window para incluir dataLayer
 */
declare global {
  interface Window { 
    dataLayer: any[];
  }
} 