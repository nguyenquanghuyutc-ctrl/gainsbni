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
    name: '',
    phone: '',
    address: '',
    memberName: '',
  },
  shortTermGoals: {
    items: [],
  },
  industry: {
    description: '',
    services: [],
  },
  achievements: [],
  successTransfers: [],
  interests: {
    items: [],
  },
  network: {
    items: [],
  },
  bniInfo: {
    role: '',
    chapter: '',
    chapterDescription: '',
  },
});
