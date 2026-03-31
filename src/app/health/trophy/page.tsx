"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Medal, Star } from 'lucide-react';

export default function TrophyPage() {
  const [achievements, setAchievements] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTrophies = async () => {
      const res = await fetch('/api/challenges');
      const data = await res.json();
      // CHỈ LẤY NHỮNG THỬ THÁCH ĐÃ HOÀN THÀNH
      const completed = data.filter((ch: any) => ch.isCompleted === true);
      setAchievements(completed);
    };
    fetchTrophies();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-20 p-6">
      {/* Nút Back về trang Health */}
      <button 
        onClick={() => router.push('/health')}
        className="mb-10 flex items-center gap-2 font-black uppercase text-sm border-2 border-white/20 p-2 px-4 hover:bg-white hover:text-black transition-all"
      >
        <ArrowLeft className="w-4 h-4" /> Quay lại tập luyện
      </button>

      <header className="text-center mb-20">
        <h1 className="text-7xl font-black uppercase italic text-yellow-400 drop-shadow-[0_5px_15px_rgba(234,179,8,0.4)]">
          Hall of Fame
        </h1>
        <p className="mt-4 text-slate-400 font-bold uppercase tracking-[0.2em]">Bảng vàng kỷ luật Fat Cat</p>
      </header>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {achievements.length === 0 ? (
          <div className="col-span-3 text-center py-20 border-2 border-dashed border-white/10 rounded-3xl">
            <p className="text-slate-500 font-bold italic">Chưa có chiếc cúp nào ở đây... Hãy tiếp tục kỷ luật nhé! 🐱</p>
          </div>
        ) : (
          achievements.map(trophy => (
            <div key={trophy.id} className="relative group bg-slate-900 border-2 border-white/10 p-8 rounded-3xl hover:border-yellow-400 transition-all text-center overflow-hidden">
              <div className="absolute top-4 right-4 text-yellow-400/20 group-hover:text-yellow-400 transition-colors">
                <Star className="fill-current w-6 h-6" />
              </div>
              
              <div className="inline-block p-5 bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-2xl mb-6 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                <Medal className="w-12 h-12 text-slate-900" />
              </div>

              <h3 className="text-2xl font-black uppercase text-white mb-2">{trophy.shortDesc}</h3>
              <p className="text-slate-400 font-bold text-xs uppercase mb-6">Hoàn thành vào: {new Date(trophy.completedAt).toLocaleDateString('vi-VN')}</p>
              
              <div className="py-2 px-4 bg-white/5 rounded-full inline-block">
                <span className="text-yellow-400 font-black">STREAK: {trophy.targetValue} NGÀY ⚽</span>
              </div>

              {/* Hiệu ứng hào quang khi hover */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-400/10 blur-[60px] group-hover:bg-yellow-400/20 transition-all"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}