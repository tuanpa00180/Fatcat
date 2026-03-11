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
      
      {/* ... Phần Hero ... */}

      <section className="grid grid-cols-1 md:grid-cols-2">
        {posts.map((post, index) => (
          // Gọi Component PostCard đã tách
          <PostCard key={post.slug} post={post} index={index} />
        ))}
      </section>

      <Footer />
    </main>
  );
}