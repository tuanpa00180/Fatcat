"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Giả lập gửi mail trong 2 giây
    setTimeout(() => setStatus("success"), 2000);
  };

  if (status === "success") {
    return (
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        className="p-20 border-4 border-black bg-pink-100 text-center shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
      >
        <h2 className="text-4xl font-black uppercase italic mb-4">Meow! Đã nhận thư!</h2>
        <p className="font-bold uppercase tracking-widest text-sm">Tôi sẽ phản hồi bạn nhanh hơn cách một con mèo nhảy vào hộp giấy.</p>
        <button onClick={() => setStatus("idle")} className="mt-8 underline font-black uppercase text-xs">Gửi thư khác</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name Input */}
        <div className="relative group">
          <input 
            required
            type="text" 
            placeholder="Tên của bạn"
            className="w-full p-5 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-1 focus:translate-y-1 transition-all outline-none font-bold uppercase text-xs"
          />
        </div>
        
        {/* Email Input */}
        <div className="relative group">
          <input 
            required
            type="email" 
            placeholder="Email liên hệ"
            className="w-full p-5 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-1 focus:translate-y-1 transition-all outline-none font-bold uppercase text-xs"
          />
        </div>
      </div>

      {/* Message Input */}
      <div className="relative group">
        <textarea 
          required
          rows={5}
          placeholder="Lời nhắn cho chú mèo béo..."
          className="w-full p-5 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-1 focus:translate-y-1 transition-all outline-none font-bold uppercase text-xs resize-none"
        />
      </div>

      {/* Submit Button */}
      <button 
        disabled={status === "sending"}
        type="submit"
        className="w-full md:w-auto px-12 py-5 bg-black text-white font-black uppercase italic tracking-widest flex items-center justify-center gap-3 hover:bg-pink-600 transition-colors disabled:bg-gray-400"
      >
        {status === "sending" ? "Đang gửi..." : "Gửi thông điệp"} <Send size={18} />
      </button>
    </form>
  );
}