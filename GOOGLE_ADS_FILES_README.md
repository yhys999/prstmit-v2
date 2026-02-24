# Google Ads 文件说明

本目录包含完整的Google Ads广告投放材料和跟踪代码配置。

## 📁 文件清单

### 1. 策略文档
- **`GOOGLE_ADS_STRATEGY.md`** - 完整的广告投放策略
  - 目标受众分析
  - 关键词策略
  - 广告系列结构
  - 预算分配建议
  - 广告文案创意
  - 性能预测与KPI

### 2. 设置指南
- **`GOOGLE_ADS_SETUP_GUIDE.md`** - 分步设置教程
  - Google Analytics 4 设置
  - Google Ads 账户创建
  - 转化跟踪配置
  - 代码集成说明
  - 测试验证方法

### 3. 关键词文件
- **`google-ads-keywords.csv`** - 关键词列表
  - 38个精选关键词
  - 包含完全匹配、词组匹配、广泛匹配
  - 建议出价范围
  - 对应着陆页

### 4. 否定关键词
- **`google-ads-negatives.csv`** - 否定关键词列表
  - 25个否定关键词
  - 排除不相关流量
  - 提高广告相关性

### 5. 跟踪代码
- **`src/lib/analytics.ts`** - 核心跟踪库
  - Google Analytics 4 集成
  - Google Ads 转化跟踪
  - 自定义事件跟踪
  - 滚动深度和停留时间监控

- **`src/components/TrackedWhatsAppButton.tsx`** - 跟踪按钮组件
  - WhatsApp按钮（带转化跟踪）
  - 电话按钮（带转化跟踪）
  - 邮件按钮（带转化跟踪）

## 🚀 快速开始

### 第一步：阅读策略
```bash
打开 GOOGLE_ADS_STRATEGY.md
了解整体策略和预期效果
```

### 第二步：设置账户
```bash
打开 GOOGLE_ADS_SETUP_GUIDE.md
按步骤创建GA4和Google Ads账户
记录所有ID和转化标签
```

### 第三步：配置代码
```bash
1. 编辑 src/lib/analytics.ts
2. 替换 GA4_MEASUREMENT_ID
3. 替换 GOOGLE_ADS_ID
4. 替换所有 CONVERSION_LABELS
```

### 第四步：导入关键词
```bash
1. 登录Google Ads
2. 创建搜索广告系列
3. 导入 google-ads-keywords.csv
4. 导入 google-ads-negatives.csv
```

### 第五步：部署和测试
```bash
git add .
git commit -m "Add Google Ads tracking"
git push origin main

# 等待部署完成后测试
访问 https://prstmit.site
使用Tag Assistant验证
```

## 📊 预期成本

### 月度预算建议
- **最低预算：** ₦60,000 ($150) / 月
- **推荐预算：** ₦120,000 - ₦180,000 ($300-450) / 月
- **理想预算：** ₦240,000+ ($600+) / 月

### 预期回报
| 月预算 | 预期点击 | 预期转化 | 预期CPA |
|--------|---------|---------|---------|
| ₦60,000 | 600-800 | 60-100 | ₦600-1,000 |
| ₦120,000 | 1,200-1,600 | 150-200 | ₦600-800 |
| ₦240,000 | 2,500-3,000 | 300-400 | ₦600-800 |

*注：以上数据为估算，实际结果可能有所不同*

## 🎯 关键指标

### 成功指标
- ✅ CTR (点击率) > 2%
- ✅ 转化率 > 10%
- ✅ CPA (每次转化费用) < ₦1,000
- ✅ ROAS (广告支出回报率) > 5:1

### 监控频率
- **每日：** 检查预算消耗和转化数据
- **每周：** 优化关键词和广告文案
- **每月：** 全面评估和策略调整

## 📞 支持资源

### Google官方支持
- **Google Ads尼日利亚：** +234 1 227 7000
- **在线帮助：** support.google.com/google-ads
- **学习中心：** skillshop.withgoogle.com

### 推荐工具
- **关键词研究：** Google Keyword Planner
- **竞争分析：** SEMrush, Ahrefs
- **标签管理：** Google Tag Manager
- **数据分析：** Google Analytics 4

## ⚠️ 重要提示

1. **保护您的ID**
   - 不要公开分享Google Ads ID
   - 不要提交包含实际ID的代码到公开仓库
   - 使用环境变量管理敏感信息

2. **测试优先**
   - 小预算测试1-2周
   - 验证转化跟踪正常工作
   - 逐步增加预算

3. **合规性**
   - 遵守Google Ads政策
   - 确保广告文案真实
   - 不做夸大或虚假承诺

4. **持续优化**
   - 每周添加否定关键词
   - 暂停低效广告组
   - 测试新的广告文案

## 🔄 更新日志

- **v1.0** (2026-02-24) - 初始版本发布
  - 完整策略文档
  - 设置指南
  - 关键词列表
  - 跟踪代码集成

## 📚 相关文档

- [网站部署指南](GITHUB_DEPLOYMENT_GUIDE.md)
- [项目README](README.md)

---

**需要帮助？** 请仔细阅读 `GOOGLE_ADS_SETUP_GUIDE.md` 中的常见问题部分。
