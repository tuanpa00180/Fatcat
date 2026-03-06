import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogClient from './BlogClient';

export const dynamic = 'force-dynamic';

export default function Home() {
  const contentDir = path.join(process.cwd(), 'src', 'content');
  
  // Kiểm tra an toàn nếu thư mục chưa tồn tại
  if (!fs.existsSync(contentDir)) {
    return <div className="p-10">Vui lòng tạo thư mục src/content và thêm file .mdx</div>;
  }

  const files = fs.readdirSync(contentDir);

  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace('.mdx', '');
      const markdownWithMeta = fs.readFileSync(path.join(contentDir, filename), 'utf-8');
      const { data: frontMatter } = matter(markdownWithMeta);
      return { slug, frontMatter };
    });

  return <BlogClient posts={posts} />;
}