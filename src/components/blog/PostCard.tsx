"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PostCardProps {
  post: any;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <Link 
      href={`/posts/${post.slug}`} 
      className={`group relative p-16 overflow-visible perspective-1000 ${index % 2 === 0 ? 'md:border-r' : ''} border-b border-gray-100`}
    >
      {/* 3D Book Effect */}
      <div className="relative w-full aspect-[4/5] transform-style-3d group-hover:rotate-y-[-20deg] transition-transform duration-700 ease-out">
        <div className="absolute inset-0 z-10 bg-gray-200 border-[3px] border-black shadow-2xl overflow-hidden">
          <img 
            src={post.frontMatter.image || "/images/default.jpg"} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            alt={post.frontMatter.title}
          />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20 z-15" />
      </div>

      {/* Floating Info Card */}
      <div className="absolute bottom-10 left-10 right-10 z-30 bg-white border-4 border-black p-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] transform translate-z-20 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500">
        <span className="text-[10px] font-black text-pink-600 block mb-2 uppercase tracking-widest">
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
  );
}