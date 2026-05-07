// src/app/time-management/page.tsx
import Link from 'next/link';

export default function TimeManagementPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-black text-slate-800 mb-12">QUẢN LÝ THỜI GIAN</h1>
      <div className="flex gap-8">
        <Link href="/time-management/work" className="group">
          <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200 hover:border-orange-500 transition-all text-center shadow-xl">
            <span className="text-6xl">🐃</span>
            <h2 className="mt-4 font-bold group-hover:text-orange-500">CÔNG VIỆC</h2>
            <p className="text-xs text-slate-400">(Thân phận trâu ngựa)</p>
          </div>
        </Link>
        
        <Link href="/time-management/personal" className="group">
          <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200 hover:border-pink-500 transition-all text-center shadow-xl">
            <span className="text-6xl">🐱</span>
            <h2 className="mt-4 font-bold group-hover:text-pink-500">CÁ NHÂN</h2>
            <p className="text-xs text-slate-400">(Mèo béo hưởng thụ)</p>
          </div>
        </Link>
      </div>
      <Link href="/" className="mt-12 text-slate-400 underline">Quay về trang chủ</Link>
    </div>
  );
}