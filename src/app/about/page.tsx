import AboutClient from "./AboutClient";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "About Me | Fat Cat QA",
  description:
    "Kinh nghiệm làm việc và chứng chỉ quốc tế của một Senior QA Engineer.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutClient />
      <Footer />
    </>
  );
}
