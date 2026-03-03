import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/content', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return (
    <article className="max-w-3xl mx-auto p-10">
      <div className="card-fat-cat bg-white">
        <h1 className="text-4xl font-black mb-4 text-pink-600">{data.title}</h1>
        <p className="text-gray-400 italic mb-8 border-b pb-4">{data.date}</p>
        
        {/* Render nội dung Markdown */}
        <div className="prose prose-slate lg:prose-xl">
          <MDXRemote source={content} />
        </div>
      </div>
    </article>
  );
}