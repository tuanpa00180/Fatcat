"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const socialLinks = [
  {
    icon: <Linkedin size={20} />,
    link: "https://www.linkedin.com/in/tuan-phan-anh-500730111/",
    label: "LinkedIn",
  },
  {
    icon: <Facebook size={20} />,
    link: "https://www.facebook.com/share/1AKb5YKvN8/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    icon: <Instagram size={20} />,
    link: "https://instagram.com/yourhandle",
    label: "Instagram",
  },
  { icon: <Mail size={20} />, link: "mailto:tuanpa1@email.com", label: "Email" },
];

const experiences = [
  {
    year: "2022 — Present",
    role: "Senior Automation & Manual QA Engineer",
    company: "Bfast System",
    desc: "Dẫn dắt đội ngũ 12 tester, tối ưu hóa quy trình automation.",
  },
  {
    year: "2020 — 2022",
    role: "QA Lead",
    company: "CMC Global",
    desc: "Logistic - xây dựng framework từ con số 0.",
  },
    {
    year: "2019 — 2020",
    role: "Senior Data QA",
    company: "Viettel Telecom - Data Analysis Center ",
    desc: "Chuyển đổi dữ liệu số.",
  },
  {
    year: "2018",
    role: "Senior Tester",
    company: "Panasonic R&D Center",
    desc: "Automotive and Internet Of Think.",
  },
    {
    year: "2015 — 2018",
    role: "Tester/Test Lead",
    company: "FPT Software - IVS ",
    desc: "Automotive and Internet Of Think.",
  },

];

const certifications = [
  {
    title: "ISTQB Test Manager Advanced Level",
    provider: "ISTQB Org",
    icon: <Award className="text-pink-500" />,
  },
  {
    title: "Google Project Management",
    provider: "Coursera",
    icon: <GraduationCap className="text-blue-500" />,
  },
];

export default function AboutClient() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <main className="bg-white text-black min-h-screen font-sans">
      {/* SECTION 1: HERO FLEX */}
      <section className="px-10 py-32 border-b border-gray-100 bg-[#000] text-white">
        <motion.h1
          {...fadeInUp}
          className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter mb-10"
        >
          The <br /> <span className="text-pink-600">Quality Architect.</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
          <div className="text-xl font-medium leading-relaxed italic opacity-80">
            "Không chỉ là tìm lỗi, tôi kiến tạo sự hoàn mỹ trong từng dòng code
            và quy trình vận hành."
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: EXPERIENCE (Bố cục tạp chí) */}
      <section className="px-10 py-24 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-gray-100">
        <div className="md:col-span-4 uppercase font-black text-xs tracking-[0.3em] flex items-center gap-2">
          <Briefcase size={16} /> Experience
        </div>
        <div className="md:col-span-8 space-y-16">
          {experiences.map((exp) => (
            <motion.div {...fadeInUp} key={exp.role} className="group">
              <div className="text-sm font-bold text-gray-400 mb-2">
                {exp.year}
              </div>
              <h3 className="text-4xl font-black uppercase group-hover:text-pink-600 transition-colors">
                {exp.role}
              </h3>
              <div className="text-lg font-bold mt-1 uppercase italic">
                {exp.company}
              </div>
              <p className="mt-4 text-gray-500 max-w-xl">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CERTIFICATES & AWARDS */}
      <section className="px-10 py-24 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4 uppercase font-black text-xs tracking-[0.3em] flex items-center gap-2">
          <Award size={16} /> Recognition
        </div>
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <motion.div
              {...fadeInUp}
              key={cert.title}
              className="p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <div className="mb-4">{cert.icon}</div>
              <h4 className="text-xl font-black uppercase leading-tight">
                {cert.title}
              </h4>
              <p className="text-xs font-bold text-gray-400 mt-2 uppercase">
                {cert.provider}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
