import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogClient from './BlogClient';

export const dynamic = 'force-dynamic';

// Thêm Interface này vào trên cùng file page.tsx nếu chưa có
interface Post {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    image?: string;
    description: string;
  };
}
export default function Home() {
  const contentDir = path.join(process.cwd(), 'src', 'content');
  
  // Kiểm tra an toàn nếu thư mục chưa tồn tại
  if (!fs.existsSync(contentDir)) {
    return <div className="p-10">Vui lòng tạo thư mục src/content và thêm file .mdx</div>;
  }

  const files = fs.readdirSync(contentDir);

const posts: Post[] = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = fs.readFileSync(path.join(contentDir, filename), 'utf-8');
    const { data } = matter(markdownWithMeta);
    
    // Ép kiểu (Type Casting) ở đây để khớp với Post interface
    return { 
      slug, 
      frontMatter: data as Post['frontMatter'] 
    };
  });

  return <BlogClient posts={posts} />;
}