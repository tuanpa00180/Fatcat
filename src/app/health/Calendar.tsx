"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

interface CalendarProps {
  challengeId: string;
  history: string[]; 
  onCheckIn: (date: string) => void;
}

export default function Calendar({ challengeId, history, onCheckIn }: CalendarProps) {
  // Lấy thời điểm hiện tại để làm mốc
  const today = new Date();
  
  // LOGIC SENIOR: Tạo danh sách 35 ngày (5 tuần) tính từ 7 ngày trước đến 28 ngày sau
  // Điều này đảm bảo khi bạn ở cuối tháng, bạn vẫn thấy được tuần đầu của tháng sau.
  const days = Array.from({ length: 35 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - 7 + i); // Lùi lại 7 ngày để xem lịch sử gần nhất
    return d.toISOString().split('T')[0];
  });

  const todayStr = today.toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 shadow-inner">
      <div className="grid grid-cols-7 gap-3">
        {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(d => (
          <div key={d} className="text-center font-black text-[10px] text-slate-400 uppercase tracking-widest pb-2">
            {d}
          </div>
        ))}
        
        {days.map(date => {
          const isChecked = history.includes(date);
          const isToday = date === todayStr;
          const isFuture = date > todayStr;
          const dayNumber = new Date(date).getDate();
          const monthName = new Date(date).toLocaleString('default', { month: 'short' });

          return (
            <div key={date} className="relative group">
              <button
                onClick={() => !isChecked && !isFuture && onCheckIn(date)}
                disabled={isChecked || isFuture}
                className={`
                  h-12 w-full rounded-xl border-2 flex flex-col items-center justify-center font-bold text-xs
                  transition-all duration-300 relative overflow-hidden
                  ${isChecked 
                    ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-100' 
                    : isFuture 
                      ? 'bg-slate-50 border-slate-50 text-slate-300 cursor-not-allowed'
                      : 'bg-white border-slate-100 text-slate-600 hover:border-emerald-400 hover:text-emerald-500'}
                  ${isToday ? 'border-pink-500 ring-2 ring-pink-100' : ''}
                `}
              >
                {/* Hiển thị tên tháng nếu là ngày mùng 1 để dễ nhận biết lật trang */}
                {dayNumber === 1 && (
                  <span className="absolute top-1 text-[8px] uppercase opacity-60">{monthName}</span>
                )}
                
                <span className="relative z-10">
                  {isChecked ? '⚽' : dayNumber}
                </span>

                {isToday && !isChecked && (
                  <span className="absolute bottom-1 w-1 h-1 bg-pink-500 rounded-full animate-ping"></span>
                )}
              </button>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Thành công
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div> Hôm nay
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-slate-100 border border-slate-200 rounded-full"></div> Sắp tới
        </div>
      </div>
    </div>
  );
}