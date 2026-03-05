import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { ArrowRight, Globe, Camera, Zap } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function Home() {
  const contentDir = path.join(process.cwd(), 'src', 'content');
  const files = fs.readdirSync(contentDir);

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = fs.readFileSync(path.join(contentDir, filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);
    return { slug, frontMatter };
  });

  return (
    <main className="bg-white text-black min-h-screen font-sans">
      {/* --- NAV BAR --- */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
        <div className="text-xl font-black tracking-tighter">FAT CAT QA.</div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
          <Link href="/" className="hover:text-pink-600 transition">Journal</Link>
          <Link href="/flex-point" className="hover:text-pink-600 transition">Portfolio</Link>
          <Link href="#" className="hover:text-pink-600 transition">About</Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="px-8 py-20 border-b border-gray-100">
        <h1 className="text-[12vw] leading-[0.9] font-black uppercase tracking-tighter mb-10">
          Quality <br /> <span className="text-gray-200">Obsessed.</span>
        </h1>
        <p className="max-w-2xl text-xl text-gray-600 font-medium leading-relaxed">
          Nơi một Senior QA chia sẻ về nghệ thuật bắt bug, tối ưu quy trình và cuộc sống thong thả như một chú mèo béo.
        </p>
      </section>

      {/* --- GRID POSTS (Kiểu Roadbook) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-100">
        {posts.map((post, index) => (
          <Link 
            href={`/posts/${post.slug}`} 
            key={post.slug}
            className={`group p-8 border-gray-100 transition-all hover:bg-gray-50 ${
              index % 2 === 0 ? 'md:border-r' : ''
            } border-b md:border-b-0`}
          >
            <div className="aspect-[16/9] bg-gray-100 overflow-hidden mb-8 relative">
                {/* Image Placeholder - Sau này bạn thay bằng thẻ Image thực tế */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-black text-4xl italic group-hover:scale-110 transition-transform duration-700">
                   FAT CAT #{index + 1}
                </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-600 mb-4 block">
                  {post.frontMatter.date} — QA JOURNAL
                </span>
                <h2 className="text-3xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4">
                  {post.frontMatter.title}
                </h2>
                <p className="mt-4 text-gray-500 line-clamp-2 italic">
                  {post.frontMatter.description}
                </p>
              </div>
              <div className="p-2 border border-black rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* --- FOOTER --- */}
      <footer className="p-20 text-center">
        <div className="text-[8vw] font-black opacity-5 mb-10 select-none">FAT CAT QA</div>
        <p className="text-xs font-bold tracking-[0.3em] uppercase">© 2026 Developed with Passion & Pate</p>
      </footer>
    </main>
  );
}