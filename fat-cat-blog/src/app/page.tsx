// src/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-24">
      <div className="card-fat-cat text-center bg-white p-10 rounded-[3rem] border-8 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-6xl font-black text-black mb-4">FAT CAT QA 🐱</h1>
        <p className="text-2xl font-bold text-gray-700 mb-8">
          Chào mừng các "Sen" đến với động của một Senior QA thích mèo béo!
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link href="/flex-point" className="bg-yellow-400 border-4 border-black px-6 py-3 rounded-xl font-black hover:bg-yellow-300 transition-all">
            XEM CHIẾN TÍCH (FLEX)
          </Link>
          <Link href="/posts/bai-viet-dau-tien" className="bg-white border-4 border-black px-6 py-3 rounded-xl font-black hover:bg-gray-100 transition-all">
            ĐỌC BLOG
          </Link>
        </div>
      </div>
      
      <div className="mt-12 text-black font-mono">
        Status: Đang đợi Pate... 🐟
      </div>
    </main>
  )
}