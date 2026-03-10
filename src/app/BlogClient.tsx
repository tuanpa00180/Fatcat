"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { title: "Xu hướng", sub: ["Công nghệ 2026", "AI trong QA", "UI/UX Trend"] },
  {
    title: "Phát triển cá nhân",
    sub: ["Kỹ năng mềm", "Quản lý thời gian", "Senior QA Mindset"],
  },
  {
    title: "Thử thách nhỏ hàng ngày",
    sub: ["1 Day 1 Bug", "Code Clean", "Daily Challenge"],
  },
    {
    title: "Liên hệ",
    sub: ["Contact", "About me"],
  },
];

export default function BlogClient({ posts }: { posts: any[] }) {
  return (
    <main className="bg-white text-black min-h-screen font-sans">
      {/* NAV BAR */}
      <nav className="flex justify-between items-center px-10 py-8 border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="text-2xl font-black tracking-tighter">FAT CAT QA.</div>
        <div className="hidden md:flex gap-12">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="relative group py-2 cursor-pointer"
            >
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-pink-600 transition-colors">
                {item.title} <ChevronDown size={12} />
              </div>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
                <div className="bg-white border-4 border-black p-5 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                  {item.sub.map((sub) => (
                    <a
                      href="#"
                      key={sub}
                      className="block py-3 text-xs font-black uppercase tracking-widest hover:text-pink-600 border-b border-gray-50 last:border-0"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-10 py-24 bg-[#f9f9f9] border-b border-gray-100">
        <h1 className="text-[10vw] leading-[0.8] font-black uppercase tracking-tighter">
          Quality <br /> <span className="text-gray-300 italic">Obsessed.</span>
        </h1>
      </section>

      {/* GRID POSTS VỚI HIỆU ỨNG LẬT SÁCH 3D */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {posts.map((post, index) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post.slug}
            className={`group relative p-16 overflow-visible perspective-1000 ${index % 2 === 0 ? "md:border-r" : ""} border-b`}
          >
            {/* Container cho hiệu ứng lật sách */}
            <div className="relative w-full aspect-[4/5] transform-style-3d group-hover:rotate-y-[-20deg] transition-transform duration-700 ease-out pointer-events-none md:pointer-events-auto">
              <div className="absolute inset-0 z-10 bg-gray-200 border-[3px] border-black shadow-2xl overflow-hidden">
                <img
                  src={post.frontMatter.image || "/images/default.jpg"}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  alt="blog cover"
                  loading="lazy"
                />
                {/* Lớp phủ chặn hoàn toàn các text lạ hiện lên */}
                <div className="absolute inset-0 z-20 bg-transparent" />
              </div>

              <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20 z-15" />
            </div>

            {/* Title Card nổi lên trên */}
            <div className="absolute bottom-10 left-10 right-10 z-30 bg-white border-4 border-black p-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] transform translate-z-20 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500">
              <span className="text-[10px] font-black text-pink-600 block mb-2">
                {post.frontMatter.date}
              </span>
              <h2 className="text-2xl font-black uppercase italic leading-tight">
                {post.frontMatter.title}
              </h2>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase">
                Đọc bài viết <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
