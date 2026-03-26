"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link"; // 1. Import Link của Next.js

// 2. Cấu trúc lại dữ liệu để có đường dẫn (href)
const menuItems = [
  { 
    title: "Xu hướng", 
    sub: [
      { name: "Công nghệ 2026", link: "/blog/tech-2026" }, 
      { name: "AI trong QA", link: "/blog/ai-qa" }, 
      { name: "UI/UX Trend", link: "/blog/ui-ux" }
    ] 
  },
  { 
    title: "Phát triển cá nhân", 
    sub: [
      { name: "Kỹ năng mềm", link: "/soft-skills" }, 
      { name: "Quản lý thời gian", link: "/time-management" }, 
      { name: "Senior Mindset", link: "/senior-mindset" }, 
      { name: "Sức khỏe là nhất", link: "/health" } // ĐÃ TRỎ ĐẾN TRANG HEALTH
    ] 
  },
  { 
    title: "Thử thách nhỏ hàng ngày", 
    sub: [
      { name: "1 Day 1 Bug", link: "/challenges/bug" }, 
      { name: "Code Clean", link: "/challenges/clean-code" }, 
      { name: "Daily Exercise", link: "/challenges/exercise" }
    ] 
  }
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-8 border-b border-gray-100 bg-white sticky top-0 z-50">
      {/* 3. Link Logo về trang chủ */}
      <Link href="/" className="text-2xl font-black tracking-tighter hover:text-pink-600 transition-colors">
        FAT CAT QA.
      </Link>
      
      <div className="flex gap-12">
        {menuItems.map((item) => (
          <div key={item.title} className="relative group py-2">
            <button className="text-xs font-bold uppercase tracking-widest hover:text-pink-600 transition-colors">
              {item.title}
            </button>
            
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
              <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {item.sub.map(subItem => (
                  // 4. Thay <a> bằng <Link> và dùng subItem.link
                  <Link 
                    href={subItem.link} 
                    key={subItem.name} 
                    className="block py-2 text-sm font-bold hover:text-pink-600 border-b border-gray-100 last:border-0 transition-colors"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}