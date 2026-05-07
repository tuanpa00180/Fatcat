// src/components/TaskPopup.tsx
"use client";
import { useRouter } from 'next/navigation';

export default function TaskPopup({ onClose, type }: { onClose: () => void, type: string }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-6">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 text-center shadow-2xl border border-slate-100">
        <h2 className="text-2xl font-black text-slate-800 leading-tight mb-4">
          Bạn có chắc là muốn thử thách, làm khó, và biến cuộc sống của mình gần với địa ngục hơn không?
        </h2>
        
        <div className="grid grid-cols-1 gap-4 mt-8">
          <button 
            onClick={() => router.push(`/time-management/${type}/new`)}
            className="group relative overflow-hidden bg-orange-500 text-white p-6 rounded-2xl font-black uppercase transition-all hover:bg-orange-600 active:scale-95"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🔥</span>
              <span>Có, tôi muốn xuống địa ngục</span>
            </div>
          </button>

          <button 
            onClick={onClose}
            className="group bg-sky-100 text-sky-700 p-6 rounded-2xl font-black uppercase transition-all hover:bg-sky-200 active:scale-95"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🏖️</span>
              <span>Không, tôi chỉ muốn nằm thẳng</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}