"use client";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { motion } from 'framer-motion';

export default function Calendar({ activeChallenges, onCheckIn }: any) {
  const today = new Date();
  const days = eachDayOfInterval({
    start: startOfMonth(today),
    end: endOfMonth(today),
  });

  return (
    <div className="p-8 border-4 border-black bg-white shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-4xl font-black mb-8 uppercase italic border-b-4 border-black pb-4">
        {format(today, 'MMMM yyyy')}
      </h2>
      
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className="text-center font-black text-xs uppercase text-gray-400 mb-2">{d}</div>
        ))}
        
        {days.map((day, idx) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            key={idx}
            onClick={() => onCheckIn(day)}
            className={`aspect-square border-2 border-black flex flex-col items-center justify-center relative
              ${isSameDay(day, today) ? 'bg-pink-500 text-white' : 'bg-white hover:bg-gray-100'}`}
          >
            <span className="font-bold text-lg">{format(day, 'd')}</span>
            {/* Hiển thị chấm tròn nếu có check-in */}
            <div className="flex gap-1 mt-1">
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}