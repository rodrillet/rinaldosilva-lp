import { useEffect } from "react"
import { trackEvent } from "@/lib/tracking"
import { EventData } from "@/types/eventos"

export function useEventTracking(eventData: EventData) {
  useEffect(() => {
    // Rastrear visualização da página quando ela for carregada
    trackEvent('view_event_page', eventData)
  }, [eventData])

  // Retorna funções para rastrear diferentes interações do usuário
  return {
    trackRegisterClick: () => {
      trackEvent('register_interest', eventData)
    },
    trackShareClick: (platform: string) => {
      trackEvent('share', {
        content_type: 'event',
        content_name: eventData.event_name,
        share_platform: platform,
      })
    }
  }
} 