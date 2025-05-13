import { trackEvent } from '@/lib/tracking';

// Eventos relacionados à Escola de Cura
export const trackEscolaDeCuraView = () => {
  trackEvent('view_event_page', {
    event_name: 'Escola de Cura',
    event_date: '2024-05-27',
    event_location: 'Goiânia',
    event_category: 'curso',
  });
};

export const trackEscolaDeCuraRegisterClick = () => {
  trackEvent('begin_registration', {
    event_name: 'Escola de Cura',
    event_date: '2024-05-27',
    event_price: 97.00,
    event_location: 'Goiânia',
    event_category: 'curso',
  });
};

export const trackEscolaDeCuraShare = (platform: string) => {
  trackEvent('share', {
    content_type: 'event',
    content_name: 'Escola de Cura',
    share_platform: platform,
  });
}; 