/**
 * 路由常量定义
 */
export const ROUTE_PATHS = {
  HOME: '/',
} as const;

/**
 * 礼品卡类型定义
 */
export interface GiftCard {
  id: string;
  name: string;
  rate: number; // 每美元兑换的奈拉(NGN)金额
  category: string;
  color: string;
}

/**
 * 客户评价类型定义
 */
export interface CustomerReview {
  id: string;
  name: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
}

/**
 * 核心礼品卡数据
 */
export const GIFT_CARDS: GiftCard[] = [
  {
    id: 'steam',
    name: 'Steam Gift Card',
    rate: 1450,
    category: 'Gaming',
    color: '#1b2838'
  },
  {
    id: 'apple',
    name: 'Apple / iTunes',
    rate: 1420,
    category: 'Entertainment',
    color: '#555555'
  },
  {
    id: 'amazon',
    name: 'Amazon Gift Card',
    rate: 1380,
    category: 'Shopping',
    color: '#ff9900'
  },
  {
    id: 'vanilla',
    name: 'Vanilla Visa [300-500]',
    rate: 1550,
    category: 'Financial',
    color: '#00477e'
  },
  {
    id: 'xbox',
    name: 'Xbox Card [UK/GLOBAL]',
    rate: 1410,
    category: 'Gaming',
    color: '#107c10'
  },
  {
    id: 'google',
    name: 'Google Play Card',
    rate: 1380,
    category: 'Entertainment',
    color: '#4285f4'
  },
  {
    id: 'sephora',
    name: 'Sephora Gift Card',
    rate: 1480,
    category: 'Beauty',
    color: '#000000'
  },
  {
    id: 'walmart',
    name: 'Walmart Gift Card',
    rate: 1350,
    category: 'Shopping',
    color: '#004c91'
  }
];

/**
 * 客户评价数据
 */
export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: '1',
    name: 'Adebayo Okafor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'Joyce is a trustworthy person and fastest in payments transactions, reliable, friendly and understanding. Love Prstmit! Best rates in Nigeria.',
    rating: 5,
    date: 'January 12, 2026'
  },
  {
    id: '2',
    name: 'Fatima Abdullahi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'They respect and value their customers 100%. Truly fast and amazing rates. It\'s a pleasure meeting you guys! WhatsApp trading is so convenient.',
    rating: 5,
    date: 'February 1, 2026'
  },
  {
    id: '3',
    name: 'Chinedu Okwu',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    content: 'She is the fastest and most reliable I\'ve ever done business with. Click away from putting a smile on your face. Instant payment guaranteed!',
    rating: 5,
    date: 'February 10, 2026'
  },
  {
    id: '4',
    name: 'Amina Hassan',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: 'Best gift card exchange platform in Africa! Joyce responds within seconds on WhatsApp. Professional service, competitive rates, instant payment.',
    rating: 5,
    date: 'February 8, 2026'
  }
];

/**
 * 平台统计数据
 */
export const STATS = [
  {
    label: 'Satisfied Customers',
    value: '100K+',
    description: 'Trusted across Africa'
  },
  {
    label: 'Cards Traded Daily',
    value: '30+',
    description: 'Different gift card types'
  },
  {
    label: 'Average Payout Time',
    value: '180s',
    description: 'Lightning fast payments'
  },
  {
    label: 'Success Rate',
    value: '99.9%',
    description: 'Guaranteed transactions'
  }
];

/**
 * 汇率计算工具函数
 * @param amount 礼品卡面值(USD)
 * @param rate 汇率
 * @returns 预计支付金额(NGN)
 */
export function calculatePayout(amount: number, rate: number): number {
  return amount * rate;
}
