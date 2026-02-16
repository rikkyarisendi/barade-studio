import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BARADE STUDIO - Creative Design & Web Development",
  description: "Professional graphic design and web development services. We bring your vision to life with stunning visuals and cutting-edge web solutions.",
  keywords: "graphic design, web design, branding, logo design, web development, creative studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}