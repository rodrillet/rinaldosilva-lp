"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Data final (7 dias a partir de agora)
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center gap-3 mt-3">
      <div className="flex flex-col items-center">
        <div className="bg-black text-white text-2xl font-bold w-14 h-14 rounded-lg flex items-center justify-center shadow-inner">
          {String(timeLeft.days).padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-gray-300">Dias</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-black text-white text-2xl font-bold w-14 h-14 rounded-lg flex items-center justify-center shadow-inner">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-gray-300">Horas</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-black text-white text-2xl font-bold w-14 h-14 rounded-lg flex items-center justify-center shadow-inner">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-gray-300">Min</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-black text-white text-2xl font-bold w-14 h-14 rounded-lg flex items-center justify-center shadow-inner">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
        <span className="text-xs mt-1 text-gray-300">Seg</span>
      </div>
    </div>
  )
}
