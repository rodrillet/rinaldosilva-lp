"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="flex items-center gap-1 text-xs">
      <div className="flex items-center">
        <span className="font-bold">{formatNumber(timeLeft.days)}</span>
        <span className="text-gray-400 ml-1">d</span>
      </div>
      <span className="text-gray-500">:</span>
      <div className="flex items-center">
        <span className="font-bold">{formatNumber(timeLeft.hours)}</span>
        <span className="text-gray-400 ml-1">h</span>
      </div>
      <span className="text-gray-500">:</span>
      <div className="flex items-center">
        <span className="font-bold">{formatNumber(timeLeft.minutes)}</span>
        <span className="text-gray-400 ml-1">m</span>
      </div>
      <span className="text-gray-500">:</span>
      <div className="flex items-center">
        <span className="font-bold">{formatNumber(timeLeft.seconds)}</span>
        <span className="text-gray-400 ml-1">s</span>
      </div>
    </div>
  );
} 