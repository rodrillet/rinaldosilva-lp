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
    <div className="flex flex-col items-center">
      <div className="text-[10px] sm:text-xs text-red-400 font-bold animate-pulse mb-1">
        ESTA OFERTA EXPIRA EM:
      </div>
      <div className="flex justify-center gap-1 sm:gap-3">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-black to-gray-900 text-white text-base sm:text-2xl font-bold w-10 h-10 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shadow-inner border border-gray-700">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 text-gray-300">Dias</span>
        </div>
        <div className="flex items-center self-start mt-2 sm:mt-3 text-gray-600 text-lg px-0.5">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-black to-gray-900 text-white text-base sm:text-2xl font-bold w-10 h-10 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shadow-inner border border-gray-700">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 text-gray-300">Horas</span>
        </div>
        <div className="flex items-center self-start mt-2 sm:mt-3 text-gray-600 text-lg px-0.5">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-black to-gray-900 text-white text-base sm:text-2xl font-bold w-10 h-10 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shadow-inner border border-gray-700">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 text-gray-300">Min</span>
        </div>
        <div className="flex items-center self-start mt-2 sm:mt-3 text-gray-600 text-lg px-0.5">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-black to-gray-900 text-white text-base sm:text-2xl font-bold w-10 h-10 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shadow-inner border border-gray-700">
            <span className="animate-pulse">{String(timeLeft.seconds).padStart(2, "0")}</span>
          </div>
          <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 text-gray-300">Seg</span>
        </div>
      </div>
    </div>
  )
}
