export interface CompanyInfo {
  name: string;
  phone: string;
  address: string;
  logo?: string;
  memberPhoto?: string;
  memberName: string;
}

export interface ShortTermGoals {
  items: string[];
}

export interface Industry {
  description: string;
  services: string[];
}

export interface Achievement {
  description: string;
}

export interface SuccessTransfer {
  count: number;
  description: string;
}

export interface Interests {
  items: string[];
}

export interface Network {
  items: string[];
}

export interface BNIInfo {
  role: string;
  chapter: string;
  chapterDescription: string;
}

export interface GainsData {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  companyInfo: CompanyInfo;
  shortTermGoals: ShortTermGoals;
  industry: Industry;
  achievements: Achievement[];
  successTransfers: SuccessTransfer[];
  interests: Interests;
  network: Network;
  bniInfo: BNIInfo;
}

export const createEmptyGainsData = (): GainsData => ({
  companyInfo: {
    name: 'CÔNG TY TNHH GIÁO DỤC UPPER EDUCATION',
    phone: '0985 861 668',
    address: '196 Lê Lai, Phường Hạc Thành - Thanh Hóa',
    memberName: 'LÊ DUY SÁNG',
  },
  shortTermGoals: {
    items: [
      'Giúp 1000 học sinh tiếp cận sinh trắc vân tay 2026',
      '50 chủ doanh nghiệp phát triển cá nhân bền vững theo cá nhân hóa, đúng quy luật tự nhiên'
    ],
  },
  industry: {
    description: 'Bạn có thể kết nối tôi với ngành nghề:',
    services: [
      'Trung tâm giáo dục và Trường tư thục',
      'Bảo hiểm, chủ spa',
      'Cá nhân đam mê khởi nghiệp, phát triển bản thân, làm hệ thống',
      'Chủ doanh nghiệp dưới 50 nhân sự và chủ doanh nghiệp đào tạo lớp kế cận'
    ],
  },
  achievements: [
    { description: 'Kỹ năng tự học cá nhân hóa: Đọc, ghi chép, Ghi nhớ.' },
    { description: 'Kỹ năng phân tích tâm lý và hành vi con người: Sinh trắc vân tay, DISC, Nhân tướng, NLP, Nhân số học, Tử vi, Phong thủy.' },
    { description: 'Sale master: Coach sales cá nhân hóa' },
    { description: 'Thiền dài ngày: từ 3- 10 ngày.' }
  ],
  successTransfers: [
    { count: 0, description: 'Hiểu rất sâu về bản chất con người và các quy luật tự nhiên.' },
    { count: 0, description: 'Góc nhìn đa chiều các ngành nghề, bẩm sinh có tố chất là tầm nhìn xa và trực giác nhạy bén.' },
    { count: 0, description: 'Tôi là có 7 năm sinh sống và làm việc với người Do Thái tại ISRAEL.' },
    { count: 0, description: 'Tôi có kinh nghiệm coach và làm việc con người 9 năm từ cuối năm 2016.' }
  ],
  interests: {
    items: [
      'Tôi thích đọc sách đặc biệt sách lịch sử và các sách về binh pháp.',
      'Tôi muốn chạy bộ và rèn luyện nó theo giai đoạn từ 1997 để rèn ý chí bản thân.',
      'Tôi đam mê thiền và các bộ môn tĩnh tâm.'
    ],
  },
  network: {
    items: [
      'Tôi là thành viên hội sinh trắc vân tay',
      'Đã từng thành viên hội mầm non thanh hóa',
      'Hiệp hội các Coach, Các thầy Phong Thủy'
    ],
  },
  bniInfo: {
    role: 'Trưởng ban Đào tạo',
    chapter: 'BNI PANDA',
    chapterDescription: 'Tôi chịu trách nhiệm ĐÀO TẠO và hướng dẫn đào tạo NK1 của BNI Panda Chapter, đây là chapter có tốc độ mở nhanh nhất Thanh Nghệ Tĩnh và Việt Nam trong chương trình mở mới 100 Chapter của toàn quốc.',
  },
});
