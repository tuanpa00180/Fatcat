// src/app/blog/[id]/page.tsx
export default function BlogPostDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="p-20">
      <h1 className="text-4xl font-black">Bài viết số {id}</h1>
      <p className="mt-4 text-slate-600">
        Nội dung chi tiết của bài viết đang được tải...
      </p>
      {/* Sau này bạn sẽ fetch dữ liệu từ DB/Redis dựa trên id ở đây */}
    </div>
  );
}