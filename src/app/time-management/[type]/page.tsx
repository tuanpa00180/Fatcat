// src/app/time-management/[type]/page.tsx
"use client";
import { useState } from 'react';
import { tasks as initialTasks, sortTasks } from '@/data/task-store';
import TaskPopup from '@/components/TaskPopup';

export default function TaskListPage({ params }: { params: { type: 'work' | 'personal' } }) {
  const [showPopup, setShowPopup] = useState(false);
  const filteredTasks = initialTasks.filter(t => t.type === params.type);
  const sortedTasks = sortTasks(filteredTasks);
  const isFull = filteredTasks.length >= 20;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black uppercase italic">
          {params.type === 'work' ? "List Trâu Ngựa 🐃" : "List Mèo Béo 🐱"}
        </h1>
        
        <button 
          disabled={isFull}
          onClick={() => setShowPopup(true)}
          className={`flex items-center gap-2 p-4 rounded-2xl font-bold transition-all ${
            isFull ? 'bg-slate-200 cursor-not-allowed' : 'bg-black text-white hover:scale-105'
          }`}
        >
          {isFull ? <span>🔒 Đã đủ gánh nặng</span> : "Tạo nhiệm vụ +"}
        </button>
      </header>

      {sortedTasks.length === 0 ? (
        <div className="text-center py-20 bg-emerald-50 rounded-3xl border-2 border-dashed border-emerald-200">
          <p className="text-2xl font-bold text-emerald-600">
            🎉 Chúc mừng bạn đã được nghỉ hưu. Hãy hưởng thụ sự tự do!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedTasks.map(task => (
            <Link href={`/time-management/${params.type}/${task.id}`} key={task.id}>
               <TaskCard task={task} />
            </Link>
          ))}
        </div>
      )}

      {showPopup && <TaskPopup onClose={() => setShowPopup(false)} type={params.type} />}
    </div>
  );
}