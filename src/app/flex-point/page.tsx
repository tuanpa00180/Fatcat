import Link from 'next/link';

export default function FlexPoint() {
  const achievements = [
    { title: "Bug Hunter Pro", desc: "Tìm ra 50+ bug logic trong 1 tuần", icon: "🐜" },
    { title: "Automation Master", desc: "Viết script chạy nhanh hơn mèo đuổi chuột", icon: "🤖" },
    { title: "ISTQB Certified", desc: "Chứng chỉ quốc tế - 'Pate' hạng sang", icon: "📜" },
  ];

  return (
    <main className="min-h-screen bg-pink-50 p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-pink-600 font-bold hover:underline">← Về hang mèo</Link>
        
        <h1 className="text-5xl font-black text-black mt-6 mb-10 italic uppercase">
          Flex Point <span className="text-pink-500">_</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div key={index} className="card-fat-cat bg-white p-6 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] transition-all">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-black mb-2">{item.title}</h3>
              <p className="text-gray-600 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-yellow-300 border-4 border-black rounded-3xl">
          <h2 className="text-2xl font-black mb-4">Tại sao nên chọn Fat Cat QA?</h2>
          <ul className="list-disc pl-5 font-bold space-y-2">
            <li>Kỹ năng soi bug kỹ như mèo soi cá.</li>
            <li>Báo cáo bug chi tiết, Dev không thể chối cãi.</li>
            <li>Tâm thế bình tĩnh trước mọi deadline.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}