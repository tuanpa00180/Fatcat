"use client";
import { useEffect, useState } from 'react';
import ChallengeForm from './ChallengeForm';
import Calendar from './Calendar';

export default function HealthPage() {
  const [challenges, setChallenges] = useState<any[]>([]);

  const fetchChallenges = async () => {
    const res = await fetch('/api/challenges');
    const data = await res.json();
    setChallenges(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  const handleCheckIn = async (challengeId: string, date: string) => {
    const res = await fetch('/api/checkin', {
      method: 'POST',
      body: JSON.stringify({ challengeId, date })
    });
    if (res.ok) fetchChallenges(); // Reload dữ liệu để thấy quả bóng vàng
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-black uppercase italic italic text-black bg-yellow-400 inline-block px-4 py-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          Sức khỏe là nhất
        </h1>
        <p className="mt-4 font-bold text-gray-700">Kỷ luật là sức mạnh của Fat Cat QA 🐱</p>
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        {/* CỘT TRÁI: TẠO THỬ THÁCH */}
        <ChallengeForm onRefresh={fetchChallenges} />

        {/* CỘT PHẢI: DANH SÁCH & LỊCH */}
        <div className="space-y-8">
          <h2 className="text-2xl font-black uppercase">Thử thách hiện tại</h2>
          {challenges.length === 0 && <p className="italic text-gray-500">Chưa có mục tiêu nào. Tạo ngay đi!</p>}
          
          {challenges.map(ch => (
            <div key={ch.id} className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-black text-pink-600 uppercase">{ch.shortDesc}</h3>
                  <p className="text-sm font-bold">Mục tiêu: {ch.targetValue} ngày liên tục</p>
                  <p className="text-xs font-bold text-gray-500">Streak hiện tại: {ch.currentStreak || 0} 🔥</p>
                </div>
                <div className="text-4xl">
                   {ch.isCompleted ? '🏆' : '⏳'}
                </div>
              </div>

              {/* Nhúng Cuốn Lịch vào đây */}
              <Calendar 
                challengeId={ch.id} 
                history={ch.history || []} 
                onCheckIn={(date) => handleCheckIn(ch.id, date)} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}