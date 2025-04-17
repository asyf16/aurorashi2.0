'use client';
import { useState, useEffect } from 'react';
import { useTime } from 'hooks/useTime';
import { Clock } from 'lucide-react';

export default function WeatherWidget() {
  const { currentTime, currentDate } = useTime();
  const [greeting, setGreeting] = useState("");
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, [currentTime]);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-500 to-cyan-300 h-full w-full flex flex-col items-center justify-center text-white">
    </div>
  );
}