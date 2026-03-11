import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Cột 1: Brand & Slogan */}
        <div className="space-y-4">
          <div className="text-xl font-black tracking-tighter">FAT CAT QA.</div>
          <p className="text-sm text-gray-500 max-w-xs italic">
            Nghệ thuật kiểm thử và tư duy tối ưu hóa quy trình cho một cuộc sống thong thả.
          </p>
        </div>

        {/* Cột 2: Quick Links */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-pink-600">Điều hướng</span>
          <Link href="/" className="text-sm font-bold hover:text-pink-600 transition">Journal</Link>
          <Link href="/about" className="text-sm font-bold hover:text-pink-600 transition">About Me</Link>
          <Link href="#" className="text-sm font-bold hover:text-pink-600 transition">Contact</Link>
        </div>

        {/* Cột 3: Social & Newsletter */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-pink-600">Kết nối</span>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          © 2026 Crafted with Passion & Pate
        </p>
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}