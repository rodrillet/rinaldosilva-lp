import { Card, CardContent } from "@/components/ui/card"
import { 
  EventDetailItemProps, 
  EventDetailsProps, 
  EventFeatureItemProps, 
  EventFeaturesProps 
} from "@/types/eventos"

export function EventDetailItem({ icon, label, value, subValue, iconColor = "text-blue-600" }: EventDetailItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className={`h-5 w-5 ${iconColor} mt-0.5 shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-600">{value}</p>
        {subValue && <p className="text-gray-500 text-sm">{subValue}</p>}
      </div>
    </div>
  )
}

export function EventDetails({ title, children, className = "" }: EventDetailsProps) {
  return (
    <Card className={`border-0 shadow-lg ${className}`}>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="space-y-4">
          {children}
        </div>
      </CardContent>
    </Card>
  )
}

export function EventFeatureItem({ icon, children, iconColor = "text-blue-600" }: EventFeatureItemProps) {
  return (
    <li className="flex items-start gap-3">
      <div className={`h-5 w-5 ${iconColor} mt-0.5 shrink-0`}>
        {icon}
      </div>
      <span className="text-gray-700">{children}</span>
    </li>
  )
}

export function EventFeatures({ title, children, className = "" }: EventFeaturesProps) {
  return (
    <Card className={`border-0 shadow-lg ${className}`}>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <ul className="space-y-3">
          {children}
        </ul>
      </CardContent>
    </Card>
  )
} 