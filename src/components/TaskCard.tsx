// src/components/TaskCard.tsx
import Image from 'next/image';
import { Task, Priority } from '@/data/task-store';

const priorityLabels: Record<Priority, string> = {
  1: "🔥 Ngay lập tức",
  2: "🚫 Không thể chờ",
  3: "⏰ Cần làm xong sớm",
  4: "📅 Chỉ cần trong ngày",
  5: "🔄 Nên là thói quen",
  6: "⏳ Để sau cũng được",
  7: "🛌 Nằm nghỉ đã khỏi nhắc"
};

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="group relative bg-white border border-slate-200 p-4 rounded-3xl shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-6">
      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100">
        <Image 
          src={task.imageUrl || '/images/default-task.jpg'} 
          alt={task.summary} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
            task.priority <= 2 ? 'bg-red-50 text-red-600 border-red-100' : 'bg-slate-50 text-slate-500 border-slate-100'
          }`}>
            {priorityLabels[task.priority]}
          </span>
        </div>
        <h3 className="font-bold text-slate-800 text-lg leading-tight line-clamp-1">
          {task.summary}
        </h3>
        <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-tighter">
          Tạo lúc: {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </div>

      <div className="text-slate-300 group-hover:text-emerald-500 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    </div>
  );
}