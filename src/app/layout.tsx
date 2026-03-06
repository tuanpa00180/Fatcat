import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fat Cat QA - Quality Obsessed Blog",
  description: "Nơi chia sẻ kiến thức QA với phong cách tạp chí Roadbook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}