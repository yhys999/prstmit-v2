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

// TODO: 替换为你的实际Google Ads Conversion ID
export const GOOGLE_ADS_ID = "AW-18003105464"; // 格式: AW-XXXXXXXXXX

// 转化标签配置
export const CONVERSION_LABELS = {
  WHATSAPP_CLICK: "V3smCIbNho8cELitxohD", // WhatsApp按钮点击
  CALCULATOR_USE: "YYYYYYYYYY", // 计算器使用
  PHONE_CLICK: "V3smCIbNho8cELitxohD", // 电话点击
  EMAIL_CLICK: "AAAAAAAAAA", // 邮件点击
  PAGE_VIEW: "BBBBBBBBBB", // 页面浏览
};

// ==================== 辅助函数 ====================

/**
 * 检查是否应该启用跟踪
 */
export const isTrackingEnabled = (): boolean => {
  // 在生产环境且用户同意Cookie时启用
  return true;
};

/**
 * 声明 gtag 函数类型
 */
declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string,
      config?: Record<string, any>,
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * 初始化 gtag 函数
 */
const gtag = (...args: any[]) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
};

/**
 * 跟踪页面浏览
 */
export const trackPageView = (url: string) => {
  if (!isTrackingEnabled()) return;

  gtag("event", "page_view", {
    page_path: url,
    page_title: document.title,
    page_location: window.location.href,
  });
};

// ==================== Google Ads 转化跟踪 ====================

/**
 * 初始化 Google Ads
 */
export const initGoogleAds = () => {
  if (typeof window === "undefined") return;
  // 加载 gtag.js
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer!.push(arguments);
  };
  gtag("js", new Date());

  // 初始化 Ads
  gtag("config", GOOGLE_ADS_ID);
  console.log("Google Ads initialized");
};

/**
 * 跟踪Google Ads转化
 */
export const trackConversion = (
  conversionLabel: string,
  conversionValue?: number,
  currency: string = "NGN",
  callback?: () => void, // 👈 新增
) => {
  if (!isTrackingEnabled()) {
    callback?.();
    return;
  }

  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
    value: conversionValue,
    currency: currency,
    event_callback: callback, // 👈 核心
  });
  console.log("Conversion tracked:", conversionLabel, conversionValue);
};

// ==================== 预定义转化事件 ====================

/**
 * 跟踪WhatsApp按钮点击
 */
export const trackWhatsAppClick = (url: string) => {
  console.log("Tracking WhatsApp click:", url);
  // ✅ 1. 先打开（同步，浏览器允许）
  const win = window.open(url, "_blank");

  // ✅ 2. 再上报
  trackConversion(CONVERSION_LABELS.WHATSAPP_CLICK, 1, "NGN");

  // ✅ 3. 兜底（防止被拦）
  if (!win) {
    window.location.href = url;
  }
  console.log("WhatsApp clicked:", url);
};

// ==================== 初始化函数 ====================

/**
 * 初始化所有跟踪工具
 */
export const initializeTracking = () => {
  if (typeof window === "undefined") return;
  initGoogleAds();
  console.log("All tracking initialized");
};
