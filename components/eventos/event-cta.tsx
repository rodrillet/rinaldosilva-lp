import { Button } from "@/components/ui/button"
import { EventCTAProps } from "@/types/eventos"

export function EventCTA({
  title,
  description,
  buttonText,
  buttonLink,
  onButtonClick,
  gradientColors = { from: "blue-600", to: "purple-600" },
  buttonColor = "bg-white",
  buttonTextColor = "text-blue-600"
}: EventCTAProps) {
  return (
    <div className={`bg-gradient-to-r from-${gradientColors.from} to-${gradientColors.to} rounded-lg p-8 text-white text-center`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-6 max-w-lg mx-auto">
        {description}
      </p>
      <a 
        href={buttonLink}
        target="_blank" 
        rel="noopener noreferrer"
        onClick={onButtonClick}
      >
        <Button className={`${buttonColor} ${buttonTextColor} hover:bg-gray-100 text-lg px-8 py-6`}>
          {buttonText}
        </Button>
      </a>
    </div>
  )
} 