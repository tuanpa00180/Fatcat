import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home() {
  // 1. Đọc danh sách file trong thư mục content
  // Thay thế đoạn định nghĩa path cũ bằng đoạn này:
const contentDir = path.join(process.cwd(), 'src', 'content');
  const files = fs.readdirSync(contentDir);

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = fs.readFileSync(path.join(contentDir, filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);
    return { slug, frontMatter };
  });

  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-5xl font-black text-pink-600 mb-10 text-center">🐾 FAT CAT QA BLOG</h1>
      
      <div className="grid gap-8">
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <div className="card-fat-cat hover:cursor-pointer">
              <h2 className="text-2xl font-bold text-black">{post.frontMatter.title}</h2>
              <p className="text-gray-500 my-2">{post.frontMatter.date}</p>
              <p className="text-gray-700">{post.frontMatter.description}</p>
              <div className="mt-4 text-pink-500 font-bold">Đọc thêm để bắt bug... 🔍</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}