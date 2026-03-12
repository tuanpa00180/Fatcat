import ContactForm from "./ContactForm";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />
      <section className="px-10 py-32 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-10">
            <h1 className="text-[10vw] lg:text-[6vw] leading-none font-black uppercase tracking-tighter">
              Say <br /> <span className="text-pink-600 italic">Hello.</span>
            </h1>
            <p className="text-xl font-medium text-gray-500 italic leading-relaxed">
              Bạn có dự án thú vị, một bug khó nhằn cần giải quyết, hay chỉ đơn giản muốn tặng một chút pate cho mèo béo? Hãy để lại lời nhắn!
            </p>
            <div className="space-y-2">
              <p className="font-black uppercase text-xs tracking-widest text-gray-400">Trực tiếp</p>
              <p className="text-lg font-bold">meow@fatcat-qa.com</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}