'use client';
import { useState, useEffect } from 'react';
import { useTime } from 'hooks/useTime';
import { Clock } from 'lucide-react';

export default function TimeWidget() {
  const { currentTime, currentDate } = useTime();
  const [greeting, setGreeting] = useState("");
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, [currentTime]);

  return (
    <div className="p-4 bg-gradient-to-br from-amber-200 to-rose-400 h-full w-full flex flex-col items-center justify-center text-white">
      <div className="flex items-center mb-2">
        <Clock className="mr-2 text-white" size={20} />
        <h2 className="text-sm leading-3 font-semibold text-white opacity-90">{greeting}</h2>
      </div>
      
      <div className="text-3xl font-bold mb-2">{currentTime}</div>
      
      <div className="text-sm bg-amber-100/40 px-4 py-1 text-white font-bold rounded-full backdrop-blur-sm">
        {currentDate}
      </div>
    </div>
  );
}