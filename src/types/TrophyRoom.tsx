import { motion } from 'framer-motion';
import { Trophy, Medal, Star } from 'lucide-react';

export default function TrophyRoom({ achievements }: { achievements: any[] }) {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-black uppercase tracking-tighter mb-10 flex items-center gap-4">
        <Trophy /> FAT CAT TROPHY ROOM
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {achievements.map((ach, i) => (
          <div key={i} className="group relative flex flex-col items-center">
             {/* Icon Cúp dựa trên AwardType */}
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, 0] }}
              className="w-24 h-24 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] cursor-help"
            >
              <Trophy size={40} color="black" />
            </motion.div>
            
            <div className="mt-4 text-center">
              <p className="text-[10px] font-black uppercase leading-tight">{ach.challengeTitle}</p>
              <p className="text-[9px] text-gray-500 font-bold mt-1">{ach.startDate} - {ach.endDate}</p>
            </div>

            {/* Tooltip mô tả */}
            <div className="absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white p-3 text-[10px] w-40 z-50 pointer-events-none">
              <p className="font-bold uppercase mb-1">Thành tựu đạt được:</p>
              {ach.description}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-black" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}