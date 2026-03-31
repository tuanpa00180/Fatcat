"use client";
import { useRouter } from "next/navigation"; // 1. Import router
import { ArrowLeft } from "lucide-react"; // 2. Dùng icon cho xịn (Cài: npm install lucide-react)
import { useEffect, useState } from "react";
import ChallengeForm from "./ChallengeForm";
import Calendar from "./Calendar";
import Link from "next/link";
import { Trophy } from "lucide-react"; // Đảm bảo đã cài lucide-react

export default function HealthPage() {
  const [challenges, setChallenges] = useState<any[]>([]);
  const router = useRouter(); // 3. Khởi tạo router

  const fetchChallenges = async () => {
    try {
      const res = await fetch("/api/challenges");
      const data = await res.json();
      setChallenges(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
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

  // LOGIC SENIOR: Tách biệt dữ liệu "Đang thực hiện"
  // Việc filter ở đây giúp UI luôn sạch sẽ mà không mất dữ liệu trong Redis
  const activeChallenges = challenges.filter((ch) => !ch.isCompleted);

  return (
    <div className="min-h-screen bg-stone-50 pb-20 relative">
      {/* NÚT BACK XỊN XÒ */}
      <button
        onClick={() => router.back()} // Hoặc router.push('/') nếu muốn cố định về Home
        className="fixed top-8 left-8 z-50 group flex items-center gap-3 bg-white border-4 border-black p-3 px-5 font-black uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Rời khỏi phòng tập</span>
      </button>
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

          <div className="mb-10">
            <Link
              href="/health/trophy"
              className="group block relative overflow-hidden bg-slate-900 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(255,215,0,1)] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
            >
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-xl border-2 border-black group-hover:rotate-12 transition-transform">
                    <Trophy className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                      Câu lạc bộ Fat Cat QA
                    </h2>
                    <p className="text-yellow-400 font-bold text-sm uppercase">
                      Nơi lưu trữ những thành tựu vĩ đại ➔
                    </p>
                  </div>
                </div>
                <div className="text-6xl opacity-20 group-hover:opacity-100 transition-opacity">
                  🏆
                </div>
              </div>
              {/* Hiệu ứng ánh sáng quét qua khi hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </div>
          {/* CỘT PHẢI: DANH SÁCH THỬ THÁCH */}
          <section className="space-y-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-black uppercase text-slate-800">
                  Mục tiêu đang chạy
                </h2>
                <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded-md text-xs font-bold">
                  {activeChallenges.length}
                </span>
              </div>

              {/* Link nhanh tới phòng truyền thống để xem lại cúp */}
              <Link
                href="/health/trophy"
                className="text-xs font-bold text-emerald-600 hover:underline uppercase"
              >
                Xem thành tựu 🏆
              </Link>
            </div>

            {activeChallenges.length === 0 ? (
              <div className="border-4 border-dashed border-slate-200 p-20 text-center rounded-3xl">
                <p className="text-slate-400 font-bold italic">
                  Hết mục tiêu rồi! Tạo thử thách mới để săn cúp đi bạn ơi! 🐱
                </p>
              </div>
            ) : (
              activeChallenges.map((ch) => (
                <div
                  key={ch.id}
                  className="group relative bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-sm"
                >
                  {/* Render nội dung thử thách và Calendar ở đây */}
                  <h3 className="text-3xl font-black text-slate-900 mb-4">
                    {ch.shortDesc}
                  </h3>
                  <Calendar
                    challengeId={ch.id}
                    history={ch.history || []}
                    onCheckIn={(date) => handleCheckIn(ch.id, date)}
                  />
                </div>
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
