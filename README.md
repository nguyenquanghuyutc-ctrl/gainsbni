# BNI Gains 2.0 Builder 🚀

Công cụ tạo bảng Gains 2.0 chuyên nghiệp cho thành viên BNI Chapter. Đơn giản, nhanh chóng và hiện đại - Tốc độ chuẩn BNI!

![BNI Gains 2.0](https://img.shields.io/badge/BNI-Gains%202.0-red?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Tính năng

- ✅ **Form nhập liệu đầy đủ**: Tất cả thông tin cần thiết cho bảng Gains 2.0
- ✅ **Preview realtime**: Xem trước ngay khi nhập liệu
- ✅ **Upload hình ảnh**: Logo công ty và ảnh đại diện
- ✅ **Xuất file đa dạng**: PNG, JPG và PDF chất lượng cao
- ✅ **Quản lý thư viện**: Lưu và quản lý nhiều bảng Gains
- ✅ **Responsive design**: Hoạt động mượt mà trên mọi thiết bị
- ✅ **Animations đẹp mắt**: Transitions và effects hiện đại
- ✅ **100% miễn phí**: Không quảng cáo, không giới hạn

## 🛠️ Công nghệ

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Export**: html2canvas, jsPDF
- **Storage**: LocalStorage

## 📦 Cài đặt & Chạy

### Yêu cầu

- Node.js 18.17 trở lên
- npm hoặc yarn

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Build production

```bash
npm run build
npm start
```

## 🚀 Deploy lên Vercel

### Cách 1: Deploy qua Vercel Dashboard

1. Push code lên GitHub repository
2. Truy cập [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import repository từ GitHub
5. Click "Deploy"

### Cách 2: Deploy qua Vercel CLI

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

### Cách 3: Deploy tự động

Cấu hình GitHub Actions để tự động deploy khi push code:

1. Tạo file `.github/workflows/deploy.yml`
2. Vercel sẽ tự động detect và deploy

## 📖 Hướng dẫn sử dụng

### 1. Tạo bảng Gains mới

1. Click vào "Tạo mới" trên navigation
2. Điền đầy đủ thông tin:
   - Thông tin doanh nghiệp
   - Mục tiêu ngắn hạn
   - Ngành nghề
   - Thành tích
   - Sở thích
   - Mạng lưới mối quan hệ
   - Thông tin BNI
3. Upload logo công ty và ảnh đại diện
4. Xem preview bên phải
5. Click "Lưu Gains" để lưu lại

### 2. Xuất file

1. Sau khi điền thông tin, scroll xuống phần "Xuất bảng Gains"
2. Chọn định dạng: PNG, JPG hoặc PDF
3. File sẽ tự động download

### 3. Quản lý thư viện

1. Truy cập trang "Thư viện"
2. Xem tất cả các bảng Gains đã tạo
3. Search theo tên
4. Edit hoặc xóa bảng Gains

## 📁 Cấu trúc thư mục

```
bang-gains/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── create/            # Trang tạo Gains
│   └── gallery/           # Trang thư viện
├── components/            # React components
│   ├── GainsForm.tsx      # Form nhập liệu
│   ├── GainsPreview.tsx   # Preview component
│   ├── GainsExport.tsx    # Export buttons
│   └── GainsGallery.tsx   # Gallery component
├── types/                 # TypeScript types
│   └── gains.ts          # Data interfaces
├── utils/                # Utility functions
│   ├── storage.ts        # LocalStorage utils
│   └── export.ts         # Export utils
└── public/               # Static assets
```

## 🎨 Customization

### Thay đổi màu sắc BNI

Edit file `app/globals.css`:

```css
:root {
  --primary: 348 83% 47%;  /* BNI Red */
  --accent: 45 93% 47%;    /* BNI Gold */
}
```

### Tùy chỉnh layout bảng Gains

Edit file `components/GainsPreview.tsx`

## 🐛 Troubleshooting

### Lỗi khi xuất file

- Đảm bảo bạn đã điền đầy đủ thông tin
- Kiểm tra console để xem lỗi chi tiết
- Thử refresh lại trang

### Không lưu được dữ liệu

- Kiểm tra LocalStorage của browser có bị disable không
- Clear cache và thử lại
- Kiểm tra dung lượng LocalStorage

### Preview không hiển thị đúng

- Hard refresh (Ctrl + Shift + R)
- Clear cache
- Kiểm tra CSS có load đầy đủ không

## 📝 License

MIT License - Free to use for BNI Community

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh! Hãy tạo Pull Request hoặc Issue.

## 📧 Liên hệ

Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ qua chapter của bạn.

---

**Made with ❤️ for BNI Community**

🚀 **Tốc độ chuẩn BNI!**
