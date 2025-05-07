"use client"

import { useEffect, useState } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to 7 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3) // Reduzindo para 3 dias para criar mais urgência
    targetDate.setHours(23, 59, 59, 0)

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-2">
      <div className="flex justify-center gap-4 mt-2">
        <div className="text-center">
          <div className="backdrop-blur-md bg-white/80 text-black text-2xl font-bold w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="text-xs mt-1">Dias</div>
        </div>
        <div className="text-center">
          <div className="backdrop-blur-md bg-white/80 text-black text-2xl font-bold w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="text-xs mt-1">Horas</div>
        </div>
        <div className="text-center">
          <div className="backdrop-blur-md bg-white/80 text-black text-2xl font-bold w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="text-xs mt-1">Min</div>
        </div>
        <div className="text-center">
          <div className="backdrop-blur-md bg-white/80 text-black text-2xl font-bold w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="text-xs mt-1">Seg</div>
        </div>
      </div>
      {timeLeft.days < 2 && (
        <p className="text-center text-red-600 text-sm font-bold animate-pulse px-4 py-2 rounded-full backdrop-blur-md bg-white/30 inline-block mx-auto">
          ATENÇÃO: Inscrições quase encerrando!
        </p>
      )}
    </div>
  )
}
