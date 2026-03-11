"use client";

// 1. Import các thư viện bên ngoài trước
import Link from 'next/link';
import { motion } from 'framer-motion';

// 2. Import các Component nội bộ (Dùng Path Alias @/ cho chuyên nghiệp)
import Navbar from '@/components/layouts/Navbar';
import PostCard from '@/components/blog/PostCard';
import Footer from '@/components/layouts/Footer';

// 3. Định nghĩa Interface cho Type Safety (Tránh lỗi "any")
interface Post {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    image?: string;
    description: string;
  };
}

export default function BlogClient({ posts }: { posts: Post[] }) {
  return (
    <main className="bg-white text-black min-h-screen font-sans">
      <Navbar />

      {/* --- PHẦN HERO CỦA BẠN --- */}
      <section className="px-10 py-32 border-b border-gray-100 bg-[#f9f9f9]">
        <h1 className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter">
          Quality <br /> <span className="text-gray-300 italic">Obsessed.</span>
        </h1>
      </section>

      {/* --- GRID POSTS: Đây là nơi chúng ta sửa --- */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {posts.map((item, index) => (
          // Chúng ta gọi Component PostCard đã tạo trước đó
          // Truyền 'item' vào prop 'post' của PostCard
          <PostCard key={item.slug} post={item} index={index} />
        ))}
      </section>

      <Footer />
    </main>
  );
}