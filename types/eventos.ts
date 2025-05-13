import { ReactNode } from "react"

export type EventData = {
  event_name: string
  event_date: string
  event_location: string
  event_category: string
  event_price?: number
  [key: string]: any
}

export type GradientColors = {
  from: string
  to: string
}

export type EventHeroProps = {
  title: string
  date: string
  description: string
  imageSrc: string
  buttonText: string
  buttonLink: string
  onButtonClick?: () => void
  gradientColors?: GradientColors
  textColor?: string
  badgeColor?: string
  badgeTextColor?: string
}

export type EventCTAProps = {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  onButtonClick?: () => void
  gradientColors?: GradientColors
  buttonColor?: string
  buttonTextColor?: string
}

export type EventDetailItemProps = {
  icon: ReactNode
  label: string
  value: string
  subValue?: string
  iconColor?: string
}

export type EventDetailsProps = {
  title: string
  children: ReactNode
  className?: string
}

export type EventFeatureItemProps = {
  icon: ReactNode
  children: ReactNode
  iconColor?: string
}

export type EventFeaturesProps = {
  title: string
  children: ReactNode
  className?: string
}

export type EventLayoutProps = {
  children: ReactNode
} 