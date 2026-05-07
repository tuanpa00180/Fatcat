"use client";
import { useState } from 'react';
import { tasks as initialTasks } from '@/data/task-store';
import { sortTasks, canCreateTask } from '@/utils/priority-logic';
import TaskPopup from '@/components/TaskPopup';
import TaskCard from '@/components/TaskCard';
import Link from 'next/link';

export default function TaskListPage({ params }: { params: { type: 'work' | 'personal' } }) {
  const [showPopup, setShowPopup] = useState(false);
  
  // Logic lấy dữ liệu
  const filteredTasks = initialTasks.filter(t => t.type === params.type);
  const sortedTasks = sortTasks(filteredTasks);
  const isLocked = !canCreateTask(filteredTasks); // Dùng hàm từ utils

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white min-h-screen">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black uppercase italic italic text-slate-800">
          {params.type === 'work' ? "Hệ Trâu Ngựa 🐃" : "Hệ Mèo Béo 🐱"}
        </h1>
        
        <button 
          onClick={() => setShowPopup(true)}
          disabled={isLocked}
          className={`px-6 py-3 rounded-2xl font-black transition-all ${
            isLocked 
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
            : 'bg-black text-white hover:scale-105 active:scale-95 shadow-lg'
          }`}
        >
          {isLocked ? "🔒 Full Slot" : "THÊM NHIỆM VỤ +"}
        </button>
      </header>

      {sortedTasks.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
          <p className="text-slate-500 font-bold">Chưa có "nợ nần" nào ở đây cả!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {sortedTasks.map(task => (
            <Link href={`/time-management/${params.type}/${task.id}`} key={task.id}>
              <TaskCard task={task} />
            </Link>
          ))}
        </div>
      )}

      {showPopup && <TaskPopup type={params.type} onClose={() => setShowPopup(false)} />}
    </div>
  );
}