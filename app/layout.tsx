import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "BARADE STUDIO - Creative Design & Web Development",
  description:
    "Professional graphic design and web development services. We bring your vision to life with stunning visuals and cutting-edge web solutions.",
  keywords:
    "graphic design, web design, branding, logo design, web development, creative studio",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning> {/* ✅ Tambahin suppressHydrationWarning */}
      <body className="antialiased"> {/* ✅ Jangan kasih bg hardcoded di sini */}
        <ThemeProvider> {/* ✅ Wrap children dengan ThemeProvider */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}