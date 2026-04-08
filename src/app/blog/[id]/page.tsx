// src/app/blog/[id]/page.tsx
"use client";
import { useRouter } from 'next/navigation';
import { ArrowLeft, Cpu, Globe, Zap } from 'lucide-react';

export default function BlogPostDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;

  // Giả lập nội dung dựa trên ID (Sau này bạn sẽ fetch từ API/Redis)
  const isWasm = id === "3"; // Giả sử WASM là bài số 3 trong mảng của bạn

  return (
    <div className="min-h-screen bg-stone-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* NÚT BACK CHUẨN UX */}
        <button 
          onClick={() => router.back()}
          className="mb-12 flex items-center gap-2 font-black uppercase text-xs border-2 border-slate-200 p-3 px-6 rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
        </button>

        {/* NỘI DUNG BÀI VIẾT TEST */}
        <article className="bg-white border-2 border-slate-900 p-8 md:p-16 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <header className="space-y-6">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Technology 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              {isWasm ? "WebAssembly (WASM): Đưa Code Native lên trình duyệt" : `Bài viết số ${id}`}
            </h1>
            <div className="flex items-center gap-4 text-slate-400 font-bold text-sm">
              <span>By Senior Dev</span>
              <span>•</span>
              <span>April 2026</span>
            </div>
          </header>

          <div className="mt-12 prose prose-slate max-w-none">
            <p className="text-xl leading-relaxed text-slate-600 italic border-l-4 border-emerald-500 pl-6">
              "Tương lai của Web không chỉ dừng lại ở JavaScript. WASM đang mở ra cánh cửa cho hiệu năng Native ngay trên Chrome và Safari."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100">
                <Cpu className="w-8 h-8 text-emerald-500 mb-4" />
                <h4 className="font-bold mb-2">Hiệu năng Native</h4>
                <p className="text-sm text-slate-500">Chạy C++, Rust, Go với tốc độ gần như tương đương phần cứng.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100">
                <Zap className="w-8 h-8 text-amber-500 mb-4" />
                <h4 className="font-bold mb-2">Tốc độ tải cực nhanh</h4>
                <p className="text-sm text-slate-500">Định dạng nhị phân giúp giảm dung lượng và tăng tốc parse code.</p>
              </div>
            </div>

            <p className="text-slate-700 leading-8">
              Đây là nội dung giả lập để kiểm tra tính năng Dynamic Route. 
              Khi bạn click vào bài viết từ trang <strong>Tech 2026</strong>, 
              Next.js sẽ nhận diện ID từ URL và render ra trang này mà không bị lỗi 404.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}