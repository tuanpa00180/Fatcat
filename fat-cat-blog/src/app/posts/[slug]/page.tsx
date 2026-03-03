// src/app/posts/[slug]/page.tsx

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-pink-500 mb-4">
        🐱 Đang đọc bài: {params.slug}
      </h1>
      <div className="bg-yellow-100 p-6 rounded-3xl border-4 border-black inline-block">
        <p className="text-lg">
          Chào Sen! Đây là nội dung của bài viết về QA. 
          Hệ thống đang được chú mèo béo cấu hình...
        </p>
      </div>
      <div className="mt-8">
        <a href="/" className="text-blue-500 underline">🐾 Quay về trang chủ</a>
      </div>
    </div>
  );
}