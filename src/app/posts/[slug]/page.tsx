import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Định vị thư mục content (CỰC KỲ QUAN TRỌNG)
  const contentDir = path.join(process.cwd(), 'src', 'content');
  const filePath = path.join(contentDir, `${slug}.mdx`);

  // Kiểm tra file có tồn tại không, nếu không trả về 404 của Next.js
  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return (
    <article className="max-w-3xl mx-auto p-10">
      <div className="card-fat-cat bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] border-4 border-black p-8 rounded-3xl">
        <h1 className="text-4xl font-black mb-4 text-pink-600 uppercase tracking-tighter">
          {data.title}
        </h1>
        <p className="text-gray-400 italic mb-8 border-b-2 border-dashed pb-4">
          Ngày bắt bug: {data.date}
        </p>
        
        {/* Nội dung bài viết */}
        <div className="prose prose-slate max-w-none prose-headings:text-black prose-p:text-gray-800">
          <MDXRemote source={content} />
        </div>
        
        <div className="mt-10 pt-6 border-t-4 border-black">
           <a href="/" className="font-bold text-black hover:text-pink-600">← Quay lại hang mèo</a>
        </div>
      </div>
    </article>
  );
}