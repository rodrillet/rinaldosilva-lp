"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialProps {
  testimonial: {
    name: string
    role: string
    location: string
    testimony: string
    result: string
    isVideo?: boolean
    videoThumbnail?: string
    isWhatsApp?: boolean
    whatsappImage?: string
  }
  index: number
}

export function TestimonialCard({ testimonial, index }: TestimonialProps) {
  return (
    <Card className="border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden card-glow">
      <div className="bg-gradient-to-r from-[#d4fb00] to-[#c0e500] h-2"></div>
      <CardContent className="p-8 space-y-4">
        {testimonial.isVideo ? (
          <div className="relative aspect-video mb-4 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 group-hover:bg-black/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] flex items-center justify-center cursor-pointer shadow-lg transform transition-transform group-hover:scale-110 animate-ripple">
                <div className="w-0 h-0 border-t-6 border-t-transparent border-l-10 border-l-black border-b-6 border-b-transparent ml-1"></div>
              </div>
            </div>
            <Image
              src={testimonial.videoThumbnail || `/placeholder.svg?key=zrvid${index}`}
              alt={`Depoimento em vídeo de ${testimonial.name}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ) : testimonial.isWhatsApp ? (
          <div className="flex justify-center mb-4">
            <div className="relative rounded-xl overflow-hidden border-2 border-green-500 shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
              <Image
                src={testimonial.whatsappImage || `/placeholder.svg?key=zrwpp${index}`}
                alt={`Print de WhatsApp de ${testimonial.name}`}
                width={250}
                height={400}
                className="object-contain"
              />
              <div className="absolute top-0 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded-br-md font-medium">
                WhatsApp
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden shadow-md bg-gradient-to-br from-[#d4fb00]/30 to-white p-[2px] animate-pulse">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src={`/placeholder.svg?key=zrj26&height=100&width=100&query=pessoa ${index + 1} cristã retrato`}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gradient-primary">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
            <p className="text-xs text-gray-500">{testimonial.location}</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-2 -left-2 text-4xl text-gradient-primary opacity-30">"</div>
          <p className="text-gray-700 italic relative z-10 pl-4 leading-relaxed">{testimonial.testimony}</p>
          <div className="absolute -bottom-4 -right-2 text-4xl text-gradient-primary opacity-30">"</div>
        </div>
        
        <div className="mt-4 bg-gradient-shimmer p-4 rounded-lg shadow-inner">
          <p className="font-semibold text-sm mb-1">Resultado alcançado:</p>
          <p className="text-gray-700 font-medium">{testimonial.result}</p>
        </div>
        
        <div className="flex text-[#ff9d00]">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-4 w-4 fill-current animate-soft-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 