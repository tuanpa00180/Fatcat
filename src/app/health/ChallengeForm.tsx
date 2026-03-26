"use client";
import { useState } from 'react';

export default function ChallengeForm({ onRefresh }: { onRefresh: () => void }) {
  const [formData, setFormData] = useState({
    shortDesc: '',
    detailDesc: '',
    awardType: 'cup',
    targetValue: 10,
    unit: 'continuous_days',
    deadline: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/challenges', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      alert("Đã tạo thử thách! Lên đường săn cúp thôi! 🏆");
      onRefresh(); // Load lại danh sách
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 border-4 border-black bg-yellow-50 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-6">
      <h3 className="text-2xl font-black uppercase italic italic border-b-4 border-black pb-2">Tạo Thử Thách Mới</h3>
      
      <div>
        <label className="block font-black text-xs uppercase mb-2">Tên thử thách (VD: Cai nước ngọt)</label>
        <input 
          onChange={e => setFormData({...formData, shortDesc: e.target.value})}
          className="w-full p-3 border-4 border-black outline-none focus:bg-white" 
          placeholder="Nhập tên ngắn gọn..." 
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-black text-xs uppercase mb-2">Số ngày mục tiêu</label>
          <input 
            type="number"
            onChange={e => setFormData({...formData, targetValue: parseInt(e.target.value)})}
            className="w-full p-3 border-4 border-black outline-none" 
            defaultValue={10}
          />
        </div>
        <div>
          <label className="block font-black text-xs uppercase mb-2">Loại thành tựu</label>
          <select 
            onChange={e => setFormData({...formData, awardType: e.target.value})}
            className="w-full p-3 border-4 border-black outline-none font-bold"
          >
            <option value="cup">🏆 Cúp Vô Địch</option>
            <option value="ball_gold">⚽ Quả Bóng Vàng</option>
            <option value="medal_gold">🥇 Huy Chương Vàng</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-black text-xs uppercase mb-2">Deadline kết thúc</label>
        <input 
          type="date"
          onChange={e => setFormData({...formData, deadline: e.target.value})}
          className="w-full p-3 border-4 border-black outline-none" 
          required
        />
      </div>

      <button type="submit" className="w-full py-4 bg-black text-white font-black uppercase hover:bg-pink-600 transition-colors shadow-[5px_5px_0px_0px_rgba(219,39,119,1)]">
        Kích hoạt thử thách 🚀
      </button>
    </form>
  );
}