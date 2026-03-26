"use client";
import { useEffect, useState } from "react";
import ChallengeForm from "./ChallengeForm";
import Calendar from "./Calendar";

export default function HealthPage() {
  const [challenges, setChallenges] = useState<any[]>([]);

  const fetchChallenges = async () => {
    const res = await fetch("/api/challenges");
    const data = await res.json();
    setChallenges(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  const handleCheckIn = async (challengeId: string, date: string) => {
    const res = await fetch("/api/checkin", {
      method: "POST",
      body: JSON.stringify({ challengeId, date }),
    });
    if (res.ok) fetchChallenges(); // Reload dữ liệu để thấy quả bóng vàng
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <div className="max-w-5xl mx-auto p-6 space-y-16">
        {/* HEADER ĐÃ ĐƯỢC CHUỐT LẠI */}
        <header className="relative pt-10 text-center">
          <div className="absolute inset-0 -top-4 -z-10 flex justify-center opacity-10">
            <span className="text-[120px] font-black uppercase tracking-tighter text-slate-900 select-none">
              HEALTH
            </span>
          </div>

          <h1 className="relative text-6xl font-black uppercase tracking-tight text-slate-900">
            Sức khỏe <span className="text-emerald-500 italic">là nhất</span>
          </h1>

          <div className="mt-4 flex justify-center gap-2">
            <span className="h-1.5 w-12 bg-emerald-500 rounded-full"></span>
            <span className="h-1.5 w-4 bg-slate-300 rounded-full"></span>
          </div>

          <p className="mt-6 text-slate-500 font-medium tracking-wide uppercase text-sm">
            Kỷ luật là sức mạnh của{" "}
            <span className="text-slate-900 font-bold">Fat Cat QA</span>
          </p>
        </header>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
          {/* CỘT TRÁI: FORM (Nên bọc trong card trắng, bo góc nhẹ) */}
          <section className="sticky top-32">
            <ChallengeForm onRefresh={fetchChallenges} />
          </section>

          {/* CỘT PHẢI: DANH SÁCH THỬ THÁCH */}
          <section className="space-y-10">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-black uppercase text-slate-800">
                Thử thách đang chạy
              </h2>
              <div className="flex-1 h-[2px] bg-slate-200"></div>
            </div>

            {challenges.map((ch) => (
              <div
                key={ch.id}
                className="group relative bg-white border-2 border-slate-200 p-8 rounded-2xl hover:border-emerald-500 transition-all shadow-sm hover:shadow-xl"
              >
                {/* Badge trạng thái */}
                <div className="absolute -top-3 right-8 px-4 py-1 bg-emerald-500 text-white text-xs font-black uppercase rounded-full shadow-lg">
                  Active
                </div>

                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-1">
                      {ch.shortDesc}
                    </h3>
                    <div className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                      <span>Mục tiêu: {ch.targetValue} ngày</span>
                      <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
                      <span className="text-emerald-600">
                        Streak: {ch.currentStreak || 0} 🔥
                      </span>
                    </div>
                  </div>
                </div>

                <Calendar
                  challengeId={ch.id}
                  history={ch.history || []}
                  onCheckIn={(date) => handleCheckIn(ch.id, date)}
                />
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
