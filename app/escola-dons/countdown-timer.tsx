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

  const TimerDigit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="relative group">
        <div className="absolute inset-0 bg-[#ff6b00] blur-sm rounded-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="relative bg-gradient-to-b from-white to-white/90 text-black text-2xl font-bold w-14 h-14 rounded-lg flex items-center justify-center shadow-lg border border-white/30 backdrop-blur-md overflow-hidden">
          <div className="absolute inset-x-0 -top-1/2 h-full bg-gradient-to-b from-transparent via-[#ff6b00]/10 to-transparent animate-shine"></div>
          {String(value).padStart(2, "0")}
        </div>
      </div>
      <div className="text-xs mt-1 font-medium">{label}</div>
    </div>
  )

  return (
    <div className="space-y-2">
      <div className="flex justify-center gap-3 mt-2">
        <TimerDigit value={timeLeft.days} label="Dias" />
        <div className="flex items-center text-xl font-bold mt-[-4px]">:</div>
        <TimerDigit value={timeLeft.hours} label="Horas" />
        <div className="flex items-center text-xl font-bold mt-[-4px]">:</div>
        <TimerDigit value={timeLeft.minutes} label="Min" />
        <div className="flex items-center text-xl font-bold mt-[-4px]">:</div>
        <TimerDigit value={timeLeft.seconds} label="Seg" />
      </div>
      {timeLeft.days < 2 && (
        <div className="flex justify-center mt-3">
          <p className="text-center text-red-600 text-sm font-bold animate-pulse px-4 py-2 rounded-full bg-gradient-to-r from-white/90 to-white/70 shadow-md border border-red-200">
            ⚠️ ATENÇÃO: Inscrições quase encerrando!
          </p>
        </div>
      )}
    </div>
  )
}
