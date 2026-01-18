import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home, PlusCircle, Folder } from "lucide-react";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "BNI Gains 2.0 - Tạo bảng Gains chuyên nghiệp",
  description: "Công cụ tạo bảng Gains 2.0 cho thành viên BNI Chapter. Dễ dàng, nhanh chóng và chuyên nghiệp.",
  keywords: "BNI, Gains, Gains 2.0, BNI Panda, Chapter, Networking",
  authors: [{ name: "BNI Gains Builder" }],
  openGraph: {
    title: "BNI Gains 2.0 Builder",
    description: "Tạo bảng Gains chuyên nghiệp cho BNI Chapter",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="glass sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                  BNI
                </div>
                <div>
                  <div className="font-bold text-lg text-gradient">Gains 2.0</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Builder</div>
                </div>
              </Link>

              <div className="flex gap-2">
                <Link
                  href="/"
                  className="px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-slate-700 dark:text-slate-300"
                >
                  <Home className="w-4 h-4" />
                  <span className="hidden md:inline">Trang chủ</span>
                </Link>
                <Link
                  href="/create"
                  className="px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-slate-700 dark:text-slate-300"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span className="hidden md:inline">Tạo mới</span>
                </Link>
                <Link
                  href="/gallery"
                  className="px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-slate-700 dark:text-slate-300"
                >
                  <Folder className="w-4 h-4" />
                  <span className="hidden md:inline">Thư viện</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="glass border-t border-slate-200 dark:border-slate-800 mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-slate-600 dark:text-slate-400">
              <p className="font-semibold mb-2">BNI Gains 2.0 Builder</p>
              <p className="text-sm">Công cụ tạo bảng Gains chuyên nghiệp cho thành viên BNI</p>
              <p className="text-xs mt-4">© 2026 BNI Chapter. Made with ❤️ for BNI Community</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
