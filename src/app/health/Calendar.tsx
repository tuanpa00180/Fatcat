"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

interface CalendarProps {
  challengeId: string;
  history: string[]; 
  onCheckIn: (date: string) => void;
}

export default function Calendar({ challengeId, history, onCheckIn }: CalendarProps) {
  // 1. Lấy mốc thời gian LOCAL (tránh dùng UTC để không bị lệch ngày tại Việt Nam)
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset giờ về 0 để so sánh chính xác ngày

  // 2. LOGIC MẢNG THỨ CHUẨN: JavaScript quy định 0 = CN, 1 = T2...
  // Chúng ta sẽ hiển thị từ T2 -> CN để thuận mắt người Việt
  const weekLabels = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

  // 3. TẠO CỬA SỔ 35 NGÀY (Lấy từ Thứ Hai của tuần trước để lịch luôn thẳng hàng)
  const days = Array.from({ length: 35 }, (_, i) => {
    const d = new Date(today);
    // Tính toán để ngày đầu tiên luôn là Thứ Hai (Monday-centric)
    const currentDay = today.getDay(); // 0 (CN) -> 6 (T7)
    const diffToMonday = currentDay === 0 ? 6 : currentDay - 1; 
    
    d.setDate(today.getDate() - diffToMonday - 7 + i); // Lùi 1 tuần + khớp về Thứ 2
    return d;
  });

  // Hàm format ngày sang YYYY-MM-DD dựa trên giờ địa phương (Local Time)
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const todayStr = formatDate(today);

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 shadow-inner">
      {/* HIỂN THỊ TIÊU ĐỀ THỨ */}
      <div className="grid grid-cols-7 gap-3 mb-2">
        {weekLabels.map(label => (
          <div key={label} className={`text-center font-black text-[10px] uppercase tracking-widest ${label === 'CN' ? 'text-pink-500' : 'text-slate-400'}`}>
            {label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-3">
        {days.map(d => {
          const dateStr = formatDate(d);
          const isChecked = history.includes(dateStr);
          const isToday = dateStr === todayStr;
          const isFuture = d > today;
          const dayNumber = d.getDate();

          return (
            <button
              key={dateStr}
              onClick={() => !isChecked && !isFuture && onCheckIn(dateStr)}
              disabled={isChecked || isFuture}
              className={`
                h-12 w-full rounded-xl border-2 flex items-center justify-center font-bold text-xs transition-all
                ${isChecked ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg' : 
                  isFuture ? 'bg-slate-50 border-slate-50 text-slate-200' : 
                  'bg-white border-slate-100 text-slate-600 hover:border-emerald-400'}
                ${isToday ? 'border-pink-500 ring-4 ring-pink-50 shadow-md' : ''}
              `}
            >
              {isChecked ? '⚽' : dayNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
}