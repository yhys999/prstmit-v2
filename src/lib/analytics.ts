/**
 * Google Analytics & Google Ads 跟踪配置
 * 
 * 使用前需要：
 * 1. 在 Google Analytics 4 创建账户并获取 Measurement ID (G-XXXXXXXXXX)
 * 2. 在 Google Ads 创建账户并获取 Conversion ID (AW-XXXXXXXXXX)
 * 3. 将实际ID替换下面的占位符
 */

// ==================== 配置区域 ====================
// TODO: 替换为你的实际Google Analytics 4 Measurement ID
export const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // 格式: G-XXXXXXXXXX

// TODO: 替换为你的实际Google Ads Conversion ID
export const GOOGLE_ADS_ID = 'AW-XXXXXXXXXX'; // 格式: AW-XXXXXXXXXX

// 转化标签配置
export const CONVERSION_LABELS = {
  WHATSAPP_CLICK: 'XXXXXXXXXX', // WhatsApp按钮点击
  CALCULATOR_USE: 'YYYYYYYYYY', // 计算器使用
  PHONE_CLICK: 'ZZZZZZZZZZ',    // 电话点击
  EMAIL_CLICK: 'AAAAAAAAAA',    // 邮件点击
  PAGE_VIEW: 'BBBBBBBBBB',      // 页面浏览
};

// ==================== 辅助函数 ====================

/**
 * 检查是否应该启用跟踪
 */
export const isTrackingEnabled = (): boolean => {
  // 在生产环境且用户同意Cookie时启用
  return process.env.NODE_ENV === 'production' && 
         !GA4_MEASUREMENT_ID.includes('XXXX');
};

/**
 * 声明 gtag 函数类型
 */
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * 初始化 gtag 函数
 */
const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
};

// ==================== Google Analytics 4 ====================

/**
 * 初始化 Google Analytics 4
 */
export const initGA4 = () => {
  if (!isTrackingEnabled()) {
    console.log('Analytics is disabled in development or not configured');
    return;
  }

  // 加载 gtag.js 脚本
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // 初始化配置
  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID, {
    send_page_view: true,
    cookie_flags: 'SameSite=None;Secure',
  });

  console.log('Google Analytics 4 initialized');
};

/**
 * 跟踪页面浏览
 */
export const trackPageView = (url: string) => {
  if (!isTrackingEnabled()) return;

  gtag('event', 'page_view', {
    page_path: url,
    page_title: document.title,
    page_location: window.location.href,
  });
};

/**
 * 跟踪自定义事件
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (!isTrackingEnabled()) return;

  gtag('event', eventName, eventParams);
  console.log('Event tracked:', eventName, eventParams);
};

// ==================== Google Ads 转化跟踪 ====================

/**
 * 初始化 Google Ads
 */
export const initGoogleAds = () => {
  if (!isTrackingEnabled()) {
    console.log('Google Ads is disabled in development or not configured');
    return;
  }

  // Google Ads 配置
  gtag('config', GOOGLE_ADS_ID);
  console.log('Google Ads initialized');
};

/**
 * 跟踪Google Ads转化
 */
export const trackConversion = (
  conversionLabel: string,
  conversionValue?: number,
  currency: string = 'NGN'
) => {
  if (!isTrackingEnabled()) return;

  gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
    value: conversionValue,
    currency: currency,
  });

  console.log('Conversion tracked:', conversionLabel, conversionValue);
};

// ==================== 预定义转化事件 ====================

/**
 * 跟踪WhatsApp按钮点击
 */
export const trackWhatsAppClick = (cardType?: string, amount?: string) => {
  // Google Analytics事件
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: 'WhatsApp Contact',
    card_type: cardType,
    amount: amount,
  });

  // Google Ads转化
  trackConversion(CONVERSION_LABELS.WHATSAPP_CLICK, 10);
};

/**
 * 跟踪计算器使用
 */
export const trackCalculatorUse = (cardType: string, amount: number) => {
  // Google Analytics事件
  trackEvent('calculator_use', {
    event_category: 'engagement',
    event_label: 'Calculator Interaction',
    card_type: cardType,
    amount: amount,
  });

  // Google Ads转化
  trackConversion(CONVERSION_LABELS.CALCULATOR_USE, 3);
};

/**
 * 跟踪电话点击
 */
export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: 'Phone Contact',
  });

  trackConversion(CONVERSION_LABELS.PHONE_CLICK, 8);
};

/**
 * 跟踪邮件点击
 */
export const trackEmailClick = () => {
  trackEvent('email_click', {
    event_category: 'engagement',
    event_label: 'Email Contact',
  });

  trackConversion(CONVERSION_LABELS.EMAIL_CLICK, 5);
};

/**
 * 跟踪滚动深度
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: `${percentage}% Scrolled`,
    value: percentage,
  });
};

/**
 * 跟踪停留时间
 */
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', {
    event_category: 'engagement',
    event_label: 'Page Engagement',
    value: seconds,
  });

  // 如果停留超过2分钟，记录为转化
  if (seconds >= 120) {
    trackEvent('engaged_session', {
      event_category: 'engagement',
      event_label: 'High Engagement',
    });
  }
};

// ==================== 增强型电子商务事件 ====================

/**
 * 跟踪查看礼品卡详情
 */
export const trackViewCard = (cardName: string, rate: number) => {
  trackEvent('view_item', {
    event_category: 'ecommerce',
    currency: 'NGN',
    value: rate,
    items: [
      {
        item_name: cardName,
        item_category: 'Gift Card',
        price: rate,
      },
    ],
  });
};

/**
 * 跟踪开始交易流程
 */
export const trackBeginCheckout = (cardName: string, amount: number, payout: number) => {
  trackEvent('begin_checkout', {
    event_category: 'ecommerce',
    currency: 'NGN',
    value: payout,
    items: [
      {
        item_name: cardName,
        item_category: 'Gift Card',
        quantity: amount,
        price: payout,
      },
    ],
  });
};

// ==================== 初始化函数 ====================

/**
 * 初始化所有跟踪工具
 */
export const initializeTracking = () => {
  if (typeof window === 'undefined') return;

  // 初始化GA4和Google Ads
  initGA4();
  initGoogleAds();

  // 设置滚动深度跟踪
  let scrollDepths = [25, 50, 75, 100];
  let trackedDepths: number[] = [];

  window.addEventListener('scroll', () => {
    const scrollPercent =
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    scrollDepths.forEach((depth) => {
      if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
        trackScrollDepth(depth);
        trackedDepths.push(depth);
      }
    });
  });

  // 设置停留时间跟踪
  let startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    trackTimeOnPage(timeSpent);
  });

  console.log('All tracking initialized');
};
