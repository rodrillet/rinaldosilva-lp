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
    // Set target date to 3 days from now
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

  const TimerDigit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b00] to-[#ff9d00] blur-md rounded-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="relative bg-gradient-to-b from-black/80 to-black/90 text-white text-2xl font-bold w-16 h-16 rounded-lg flex items-center justify-center shadow-lg border border-[#ff6b00]/20 backdrop-blur-md overflow-hidden transform transition-transform group-hover:scale-105">
          <div className="absolute inset-x-0 -top-1/2 h-full bg-gradient-to-b from-transparent via-[#ff6b00]/20 to-transparent animate-shine"></div>
          <div className="animate-bounce-light">
            {String(value).padStart(2, "0")}
          </div>
        </div>
      </div>
      <div className="text-xs mt-2 font-medium text-white">{label}</div>
    </div>
  )

  const Separator = () => (
    <div className="flex items-center text-2xl font-bold text-[#ff6b00] animate-pulse mt-[-8px]">:</div>
  )

  return (
    <div className="space-y-3">
      <div className="flex justify-center gap-2 mt-2">
        <TimerDigit value={timeLeft.days} label="Dias" />
        <Separator />
        <TimerDigit value={timeLeft.hours} label="Horas" />
        <Separator />
        <TimerDigit value={timeLeft.minutes} label="Min" />
        <Separator />
        <TimerDigit value={timeLeft.seconds} label="Seg" />
      </div>
      {timeLeft.days < 2 && (
        <div className="flex justify-center mt-3">
          <p className="text-center text-red-600 text-sm font-bold animate-pulse px-4 py-2 rounded-full bg-gradient-to-r from-white/90 to-white/70 shadow-md border border-red-200 animate-scale">
            ⚠️ ATENÇÃO: Inscrições quase encerrando!
          </p>
        </div>
      )}
    </div>
  )
}
