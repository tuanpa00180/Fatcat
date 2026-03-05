import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

// Hàm này giúp Next.js biết trước các đường dẫn cần tạo
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src', 'content');
  const files = fs.readdirSync(contentDir);

  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  // Ở Next.js 15, params là một Promise, cần await nó
  const { slug } = await params; 

  const contentDir = path.join(process.cwd(), 'src', 'content');
  const filePath = path.join(contentDir, `${slug}.mdx`);

  // Log để debug trên Vercel (xem trong tab Logs)
  console.log("Đang tìm file tại:", filePath);

  if (!fs.existsSync(filePath)) {
    console.log("Không tìm thấy file!");
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <div className="prose mt-6">
        <MDXRemote source={content} />
      </div>
    </div>
  );
}