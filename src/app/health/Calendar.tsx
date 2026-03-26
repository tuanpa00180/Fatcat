"use client";
import { useState } from 'react';

interface CalendarProps {
  challengeId: string;
  history: string[]; // Danh sách các ngày đã check-in ["2026-03-01", "2026-03-02"]
  onCheckIn: (date: string) => void;
}

export default function Calendar({ challengeId, history, onCheckIn }: CalendarProps) {
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const todayStr = now.toISOString().split('T')[0];

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth(), i + 1);
    return d.toISOString().split('T')[0];
  });

  return (
    <div className="bg-white border-4 border-black p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
      <div className="grid grid-cols-7 gap-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
          <div key={d} className="text-center font-black text-xs pb-2">{d}</div>
        ))}
        {days.map(date => {
          const isChecked = history.includes(date);
          const isToday = date === todayStr;
          
          return (
            <button
              key={date}
              onClick={() => !isChecked && onCheckIn(date)}
              disabled={isChecked}
              className={`
                h-10 w-full border-2 border-black flex items-center justify-center font-bold text-sm
                transition-all transform active:scale-95
                ${isChecked ? 'bg-yellow-400' : 'bg-gray-100 hover:bg-pink-200'}
                ${isToday ? 'ring-4 ring-pink-500 ring-inset' : ''}
              `}
            >
              {isChecked ? '⚽' : date.split('-')[2]}
            </button>
          );
        })}
      </div>
      <p className="text-[10px] mt-4 font-bold uppercase text-gray-500 text-center">
        * Nhấn vào ngày hôm nay để ghi bàn!
      </p>
    </div>
  );
}