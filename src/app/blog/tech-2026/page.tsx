"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock3 } from "lucide-react"; // Đảm bảo đã cài lucide-react

// 1. DỮ LIỆU GIẢ LẬP (Mô phỏng dữ liệu từ DB, sắp xếp mới nhất lên đầu)
const posts = [
  {
    id: 1,
    title: "Sự lên ngôi của Micro-Frontend năm 2026",
    date: "31/03/2026",
    image: "/images/tech-2026-1.jpg",
    excerpt:
      "Khám phá cách kiến trúc này giải quyết bài toán quản lý Codebase khổng lồ...",
  },
  {
    id: 2,
    title: "Next.js 18.x: Cuộc cách mạng về Server Component",
    date: "25/03/2026",
    image: "/images/tech-2026-2.jpg",
    excerpt: "Chúng ta sẽ không còn cần useEffect cho Client...",
  },
  {
    id: 3,
    title: "Tailwind CSS v5.0: Phá bỏ giới hạn về hiệu năng",
    date: "20/03/2026",
    image: "/images/tech-2026-3.jpg",
    excerpt: "Tốc độ Compile vượt trội, hỗ trợ Dynamic Utilities...",
  },
  {
    id: 4,
    title: "QA Automation trong kỷ nguyên AI",
    date: "15/03/2026",
    image: "/images/tech-2026-4.jpg",
    excerpt: "AI sẽ tự động viết Test Case, tự động fix Bug...",
  },
  {
    id: 5,
    title: "Sức mạnh của Edge Computing trên Cloudflare Worker",
    date: "10/03/2026",
    image: "/images/tech-2026-5.jpg",
    excerpt: "Giảm độ trễ xuống dưới 10ms, xử lý dữ liệu ngay tại Edge...",
  },
  {
    id: 6,
    title: "WebAssembly (WASM): Đưa Code Native lên trình duyệt",
    date: "05/03/2026",
    image: "/images/tech-2026-6.jpg",
    excerpt:
      "Chạy Game 3D, xử lý Video, Machine Learning ngay trên trình duyệt...",
  },
];

// 2. COMPONENT BÀI VIẾT (Đóng gói để dễ bảo trì)
const PostCard = ({
  post,
  isFeatured,
}: {
  post: any;
  isFeatured?: boolean;
}) => {
  return (
    <Link
      href={`/blog/${post.id}`}
      className={`group block relative bg-white border-2 border-slate-200 overflow-hidden transition-all hover:border-emerald-500 shadow-sm ${
        isFeatured ? "rounded-2xl h-full" : "rounded-xl h-[120px]"
      }`}
    >
      <div
        className={`flex ${isFeatured ? "flex-col h-full" : "items-center h-full gap-5 p-4"}`}
      >
        <div
          className={`relative ${isFeatured ? "w-full h-1/2" : "w-[100px] h-[80px] shrink-0 rounded-md overflow-hidden"}`}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className={`p-6 ${isFeatured ? "" : "flex-1 py-2 px-0"}`}>
          <h3
            className={`font-black text-slate-900 group-hover:text-emerald-600 transition-colors ${
              isFeatured ? "text-2xl mb-2" : "text-sm mb-1 line-clamp-2"
            }`}
          >
            {post.title}
          </h3>

          <p
            className={`text-slate-500 font-medium tracking-wide uppercase text-[10px] flex items-center gap-1.5 ${
              isFeatured ? "mb-4" : ""
            }`}
          >
            <Clock3 className="w-3 h-3 text-slate-400" /> {post.date}
          </p>

          {isFeatured && (
            <p className="text-sm text-slate-600 line-clamp-2">
              {post.excerpt}
            </p>
          )}
        </div>
      </div>
    </Link> // 🎯 PHẢI ĐÓNG BẰNG THẺ LINK NHƯ THẾ NÀY
  );
};

export default function Tech2026Page() {
  const router = useRouter();

  // LOGIC SENIOR: Tách bài mới nhất và các bài còn lại
  const [featuredPost, ...otherPosts] = posts;

  // 3. LOGIC SẮP XẾP CHUYỂN DỊCH (Grid Area Mapping)
  // Chúng ta sẽ gán Grid-Area cho từng thẻ bài viết để kiểm soát vị trí.
  // 6 ô: [Ô FEATURED, Ô DÀI 1, Ô DÀI 2]
  //     [Ô DÀI 5,      Ô DÀI 4, Ô DÀI 3]
  // 🎯 SẮP XẾP MẢNG AREA ĐÚNG CHIỀU KIM ĐỒNG HỒ
  // area-1 (Top-Mid) -> area-2 (Top-Right) -> area-3 (Bottom-Right) -> area-4 (Bottom-Mid) -> area-5 (Bottom-Left)
  // THỨ TỰ CHẠY THEO KIM ĐỒNG HỒ QUANH BÀI CHÍNH
  const areaMapping = ["area-1", "area-2", "area-3", "area-4", "area-5"];

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <div className="max-w-7xl mx-auto p-6 space-y-16">
        {/* HEADER VÀ NÚT BACK */}
        <header className="pt-10 flex items-center gap-6">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 font-black uppercase text-xs border-2 border-slate-200 p-2.5 px-5 rounded-full hover:bg-slate-100 hover:text-black transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ
          </button>

          <div className="flex-1 flex justify-between items-baseline gap-4">
            <h1 className="text-5xl font-black uppercase tracking-tight text-slate-900">
              Công nghệ <span className="text-emerald-500 italic">2026</span>
            </h1>
            <p className="mt-6 text-slate-500 font-medium tracking-wide uppercase text-xs">
              Xu hướng{" "}
              <span className="text-slate-900 font-bold">mới nhất</span>
            </p>
          </div>

          <div className="h-0.5 flex-1 bg-slate-200 rounded-full"></div>
        </header>

        <section className="grid-tech-2026 mt-12">
          {/* BÀI VIẾT LỚN NHẤT (PHẢI CÓ CLASS area-featured) */}
          <div className="area-featured h-full">
            <PostCard post={featuredPost} isFeatured={true} />
          </div>

          {/* 5 BÀI CÒN LẠI CHẠY QUANH */}
          {otherPosts.slice(0, 5).map((post, index) => (
            <div key={post.id} className={`${areaMapping[index]} h-full`}>
              <PostCard post={post} isFeatured={false} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
