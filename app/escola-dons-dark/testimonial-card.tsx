"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Play } from "lucide-react"

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
  if (!testimonial) {
    return null;
  }
  
  return (
    <Card className="border border-zinc-800 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-zinc-900/90">
      <div className="h-1 bg-purple-600"></div>
      <CardContent className="p-6 sm:p-8 space-y-4">
        {testimonial.isVideo ? (
          <div className="relative aspect-video mb-4 rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 group-hover:bg-black/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center cursor-pointer shadow-md transform transition-transform group-hover:scale-110">
                <Play className="h-5 w-5 text-purple-500 ml-0.5" />
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
            <div className="relative rounded-2xl overflow-hidden border border-purple-600 shadow-md group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              <Image
                src={testimonial.whatsappImage || `/placeholder.svg?key=zrwpp${index}`}
                alt={`Print de WhatsApp de ${testimonial.name}`}
                width={250}
                height={400}
                className="object-contain"
              />
              <div className="absolute top-0 left-0 bg-purple-600 text-white text-xs px-2 py-1 rounded-br-md font-medium">
                WhatsApp
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden shadow-sm border border-zinc-700 bg-zinc-800 p-[2px]">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src="/images/rinaldo-silva-1.jpeg"
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h4 className="font-medium text-purple-400">{testimonial.name}</h4>
            <p className="text-sm text-zinc-300">{testimonial.role}</p>
            <p className="text-xs text-zinc-400">{testimonial.location}</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-2 -left-2 text-4xl text-purple-600/50 opacity-50">"</div>
          <p className="text-zinc-300 italic relative z-10 pl-4 leading-relaxed">{testimonial.testimony}</p>
          <div className="absolute -bottom-4 -right-2 text-4xl text-purple-600/50 opacity-50">"</div>
        </div>

        <div className="mt-4 bg-purple-900/20 p-4 rounded-2xl">
          <p className="font-medium text-sm mb-1 text-zinc-300">Resultado alcançado:</p>
          <p className="text-zinc-100 font-medium">{testimonial.result}</p>
        </div>

        <div className="flex text-amber-400">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
