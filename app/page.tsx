'use client';

import Link from 'next/link';
import { Sparkles, Zap, Download, Folder, ArrowRight, Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <div className="px-6 py-2 bg-gradient-to-r from-red-600/10 to-amber-600/10 rounded-full border-2 border-red-600/20">
              <span className="text-red-600 font-semibold text-sm">✨ Công cụ tạo bảng Gains chuyên nghiệp</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient">BNI Gains 2.0</span>
            <br />
            <span className="text-slate-800 dark:text-slate-100">Builder</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Tạo bảng Gains 2.0 chuyên nghiệp cho thành viên BNI Chapter của bạn.
            <br />
            Đơn giản, nhanh chóng và hiện đại - Tốc độ chuẩn BNI! 🚀
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/create" className="btn-primary text-lg px-8 py-4 flex items-center gap-2 group">
              Tạo Gains ngay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/gallery" className="btn-outline text-lg px-8 py-4 flex items-center gap-2">
              <Folder className="w-5 h-5" />
              Xem thư viện
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div className="card-hover p-8 animate-slide-up">
          <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-4">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
            Giao diện hiện đại
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Thiết kế đẹp mắt, chuyên nghiệp với màu sắc BNI đặc trưng. WOW ngay từ cái nhìn đầu tiên!
          </p>
        </div>

        <div className="card-hover p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
            Siêu nhanh
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Nhập liệu dễ dàng, preview realtime. Tạo bảng Gains chỉ trong vài phút - tốc độ chuẩn BNI!
          </p>
        </div>

        <div className="card-hover p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4">
            <Download className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
            Xuất đa dạng
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Xuất ra PNG, JPG hoặc PDF với chất lượng cao. Sẵn sàng để in ấn hoặc chia sẻ online!
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="card p-12 mb-16 animate-scale-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
          Tại sao chọn Gains 2.0 Builder?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-100">Không cần kiến thức thiết kế</h4>
              <p className="text-slate-600 dark:text-slate-400">Chỉ cần nhập thông tin, hệ thống tự động tạo layout đẹp mắt</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-100">Lưu trữ không giới hạn</h4>
              <p className="text-slate-600 dark:text-slate-400">Tạo và quản lý nhiều bảng Gains cho tất cả thành viên</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-100">100% miễn phí</h4>
              <p className="text-slate-600 dark:text-slate-400">Hoàn toàn miễn phí, không có phí ẩn, không quảng cáo</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-100">Responsive design</h4>
              <p className="text-slate-600 dark:text-slate-400">Hoạt động mượt mà trên mọi thiết bị: PC, tablet, điện thoại</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-100">Preview realtime</h4>
              <p className="text-slate-600 dark:text-slate-400">Xem trước ngay khi nhập, không cần đợi chờ</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-100">Chất lượng cao</h4>
              <p className="text-slate-600 dark:text-slate-400">File xuất ra có độ phân giải cao, sẵn sàng để in</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center animate-fade-in">
        <div className="card p-12 bg-gradient-to-br from-red-50 to-amber-50 dark:from-red-950/20 dark:to-amber-950/20 border-2 border-red-200 dark:border-red-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">
            Sẵn sàng tạo bảng Gains của bạn?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Chỉ mất vài phút để tạo một bảng Gains chuyên nghiệp.
            Hãy bắt đầu ngay hôm nay!
          </p>
          <Link href="/create" className="btn-primary text-xl px-10 py-5 inline-flex items-center gap-3 group">
            <Sparkles className="w-6 h-6" />
            Tạo ngay bây giờ
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
