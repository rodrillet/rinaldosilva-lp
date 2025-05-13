import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EventHeroProps } from "@/types/eventos"

export function EventHero({
  title,
  date,
  description,
  imageSrc,
  buttonText,
  buttonLink,
  onButtonClick,
  gradientColors = { from: "blue-600", to: "purple-600" },
  textColor = "text-white",
  badgeColor = "bg-white",
  badgeTextColor = "text-blue-600"
}: EventHeroProps) {
  return (
    <section className={`relative py-20 bg-gradient-to-r from-${gradientColors.from} to-${gradientColors.to} ${textColor}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className={`${badgeColor} ${badgeTextColor} px-3 py-1`}>{date}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            <p className="text-xl">
              {description}
            </p>
            <div className="pt-4">
              <a 
                href={buttonLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={onButtonClick}
              >
                <Button className={`${badgeColor} ${badgeTextColor} hover:bg-gray-100 text-lg px-8 py-6`}>
                  {buttonText}
                </Button>
              </a>
            </div>
          </div>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 