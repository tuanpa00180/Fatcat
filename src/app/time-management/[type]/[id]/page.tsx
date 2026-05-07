"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getPostById, saveTask, Priority, Task } from '@/data/task-store';

export default function TaskFormPage({ params }: { params: { type: 'work' | 'personal', id: string } }) {
  const router = useRouter();
  const isEdit = params.id !== 'new';
  
  // --- KHAI BÁO STATE (Sửa lỗi thiếu name) ---
  const [summary, setSummary] = useState('');
  const [desc, setDesc] = useState('');
  const [priority, setPriority] = useState<Priority>(4);
  const [imageUrl, setImageUrl] = useState('');
  const [showHistory, setShowHistory] = useState(false); // <--- ĐÂY LÀ DÒNG FIX LỖI

  // Load dữ liệu cũ nếu là trang Chỉnh sửa
  useEffect(() => {
    if (isEdit) {
      const existingTask = getPostById(params.id);
      if (existingTask) {
        setSummary(existingTask.summary);
        setDesc(existingTask.description);
        setPriority(existingTask.priority);
        setImageUrl(existingTask.imageUrl);
      }
    }
  }, [isEdit, params.id]);

  const handleSave = () => {
    const taskData: Task = {
      id: isEdit ? params.id : Math.random().toString(36).substring(7),
      type: params.type,
      summary,
      description: desc,
      priority,
      imageUrl,
      createdAt: isEdit ? (getPostById(params.id)?.createdAt || new Date()) : new Date(),
    };

    saveTask(taskData);
    router.push(`/time-management/${params.type}`);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-black">{isEdit ? "CHỈNH SỬA" : "TẠO MỚI"}</h1>
        
        <input 
          value={summary} 
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Tên nhiệm vụ..."
          className="w-full p-4 border-2 rounded-2xl"
        />

        {/* Nút xem lịch sử chỉ Enable khi đang ở chế độ Chỉnh sửa */}
        <button 
          onClick={() => setShowHistory(true)} // <--- ĐÃ HẾT LỖI
          disabled={!isEdit}
          className={`w-full p-3 rounded-xl font-bold transition ${isEdit ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-400'}`}
        >
          Xem cập nhật mới nhất
        </button>

        <button 
          onClick={handleSave}
          className="w-full p-6 bg-black text-white rounded-2xl font-black hover:bg-emerald-600 transition"
        >
          LƯU LẠI
        </button>
      </div>

      {/* POPUP LỊCH SỬ (Sửa lỗi logic hiển thị) */}
      {showHistory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[200]">
          <div className="bg-white p-8 rounded-3xl max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Lịch sử thay đổi</h2>
            <p className="text-slate-500 italic">Tính năng đang được Senior Dev hoàn thiện...</p>
            <button 
              onClick={() => setShowHistory(false)} 
              className="mt-6 w-full p-3 bg-slate-100 rounded-xl font-bold"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}