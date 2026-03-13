"use client"; // Cần dòng này để dùng hiệu ứng hover
import { motion } from "framer-motion";
import { useState } from "react";

const menuItems = [
  { title: "Xu hướng", sub: ["Công nghệ 2026", "AI trong QA", "UI/UX Trend"] },
  { title: "Phát triển cá nhân", sub: ["Kỹ năng mềm", "Quản lý thời gian", "Senior Mindset", "Sức khỏe là nhất"] },
  { title: "Thử thách nhỏ hàng ngày", sub: ["1 Day 1 Bug", "Code Clean", "Daily Exercise"] }
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-8 border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="text-2xl font-black tracking-tighter">FAT CAT QA.</div>
      
      <div className="flex gap-12">
        {menuItems.map((item) => (
          <div key={item.title} className="relative group py-2">
            <button className="text-xs font-bold uppercase tracking-widest hover:text-pink-600 transition-colors">
              {item.title}
            </button>
            
            {/* Mega Menu thả xuống khi hover */}
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
              <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {item.sub.map(sub => (
                  <a href="#" key={sub} className="block py-2 text-sm font-bold hover:text-pink-600 border-b border-gray-100 last:border-0">
                    {sub}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}