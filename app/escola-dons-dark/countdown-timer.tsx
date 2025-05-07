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
      <div className="relative">
        <div className="bg-zinc-800 text-white text-xl font-medium w-14 h-14 rounded-lg flex items-center justify-center shadow-sm backdrop-blur-md overflow-hidden border border-purple-700/40">
          {String(value).padStart(2, "0")}
        </div>
      </div>
      <div className="text-xs mt-1 font-medium text-zinc-400">{label}</div>
    </div>
  )

  const Separator = () => <div className="flex items-center text-xl font-bold text-purple-500 mt-[-8px]">:</div>

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
          <p className="text-center text-white text-sm font-medium px-4 py-2 rounded-full bg-purple-900/40 shadow-sm border border-purple-500/30">
            ⚠️ ATENÇÃO: Inscrições quase encerrando!
          </p>
        </div>
      )}
    </div>
  )
}
