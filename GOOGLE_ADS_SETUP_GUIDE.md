# Google Ads 和 Google Analytics 设置指南

## 📋 目录

1. [前置准备](#前置准备)
2. [Google Analytics 4 设置](#google-analytics-4-设置)
3. [Google Ads 账户设置](#google-ads-账户设置)
4. [转化跟踪设置](#转化跟踪设置)
5. [代码配置](#代码配置)
6. [测试验证](#测试验证)
7. [常见问题](#常见问题)

---

## 🎯 前置准备

### 需要的材料

- ✅ Google账号（Gmail）
- ✅ 网站已上线：https://prstmit.site
- ✅ 尼日利亚银行账户或信用卡（用于广告付款）
- ✅ 营业执照或身份证明（可能需要）

### 预计时间

- **Google Analytics设置：** 15-20分钟
- **Google Ads设置：** 30-45分钟
- **转化跟踪配置：** 20-30分钟
- **总计：** 约1.5-2小时

---

## 📊 Google Analytics 4 设置

### 步骤1：创建Google Analytics账户

1. **访问Google Analytics**
   - 前往：https://analytics.google.com/
   - 点击"开始测量"或"Start measuring"

2. **创建账户**
   ```
   账户名称：PRSTMIT Exchange
   账户数据共享设置：根据需要勾选
   ```

3. **创建媒体资源（Property）**
   ```
   媒体资源名称：PRSTMIT Website
   报告时区：(GMT+01:00) 西非时间 - 拉各斯
   货币：尼日利亚奈拉 (₦ NGN)
   ```

4. **行业类别和企业规模**
   ```
   行业类别：金融服务 或 其他
   企业规模：小型（1-10人）
   使用意图：勾选相关选项
   ```

### 步骤2：设置数据流（Data Stream）

1. **选择平台**
   - 选择"网站"（Web）

2. **配置网站数据流**
   ```
   网站网址：https://prstmit.site
   数据流名称：PRSTMIT Main Website
   ```

3. **增强型衡量**
   - 确保以下选项已启用：
     - ✅ 网页浏览
     - ✅ 滚动次数
     - ✅ 出站点击次数
     - ✅ 网站搜索
     - ✅ 视频互动
     - ✅ 文件下载

4. **获取Measurement ID**
   - 完成后会显示类似 `G-XXXXXXXXXX` 的ID
   - **重要：复制并保存此ID**

### 步骤3：配置事件

1. **访问"事件"页面**
   - 左侧菜单：配置 → 事件

2. **创建自定义事件（可选）**
   - 系统会自动跟踪代码中定义的事件
   - 不需要在这里手动创建

---

## 💰 Google Ads 账户设置

### 步骤1：创建Google Ads账户

1. **访问Google Ads**
   - 前往：https://ads.google.com/
   - 点击"立即开始"

2. **选择广告目标**
   - 选择"获取更多销售量或潜在客户"
   - 或直接选择"不使用目标创建账户"（推荐）

3. **填写企业信息**
   ```
   企业名称：PRSTMIT Exchange
   网站：https://prstmit.site
   ```

### 步骤2：设置付款信息

1. **选择付款国家/地区**
   - 选择：尼日利亚

2. **添加付款方式**
   - 信用卡/借记卡
   - 或银行转账（如可用）

3. **填写账单地址**
   - 必须是尼日利亚地址

4. **设置促销代码（如有）**
   - Google有时提供新账户优惠券

### 步骤3：获取转化ID

1. **访问"工具与设置"**
   - 右上角菜单 → 工具与设置 → 衡量 → 转化

2. **查看转化ID**
   - 格式：`AW-XXXXXXXXXX`
   - **重要：复制并保存此ID**

---

## 🎯 转化跟踪设置

### 步骤1：创建转化操作

在Google Ads中：

1. **WhatsApp点击转化**
   ```
   转化操作：点击按钮/链接
   名称：WhatsApp Contact
   价值：10 NGN
   计数方式：每次点击
   转化时间范围：30天
   类别：潜在客户
   ```
   → 获取转化标签（例如：`ABC123DEF`）

2. **计算器使用转化**
   ```
   转化操作：用户互动
   名称：Calculator Use
   价值：3 NGN
   计数方式：每次互动
   转化时间范围：30天
   类别：互动
   ```
   → 获取转化标签

3. **电话点击转化**
   ```
   转化操作：点击按钮/链接
   名称：Phone Click
   价值：8 NGN
   计数方式：每次点击
   转化时间范围：30天
   类别：潜在客户
   ```
   → 获取转化标签

4. **邮件点击转化**
   ```
   转化操作：点击按钮/链接
   名称：Email Click
   价值：5 NGN
   计数方式：每次点击
   转化时间范围：30天
   类别：潜在客户
   ```
   → 获取转化标签

### 步骤2：记录所有ID和标签

创建一个表格记录：

| 转化类型 | 转化标签 | 价值 |
|---------|---------|------|
| WhatsApp Click | `________` | 10 NGN |
| Calculator Use | `________` | 3 NGN |
| Phone Click | `________` | 8 NGN |
| Email Click | `________` | 5 NGN |

---

## 💻 代码配置

### 步骤1：更新analytics.ts文件

1. **打开文件**
   ```bash
   路径：src/lib/analytics.ts
   ```

2. **替换ID**
   ```typescript
   // 找到这些行并替换为你的实际ID
   export const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // 替换为你的GA4 ID
   export const GOOGLE_ADS_ID = 'AW-XXXXXXXXXX';     // 替换为你的Ads ID
   
   // 转化标签配置
   export const CONVERSION_LABELS = {
     WHATSAPP_CLICK: 'ABC123DEF',  // 替换为实际标签
     CALCULATOR_USE: 'XYZ789GHI',  // 替换为实际标签
     PHONE_CLICK: 'QWE456RTY',     // 替换为实际标签
     EMAIL_CLICK: 'ASD789FGH',     // 替换为实际标签
   };
   ```

### 步骤2：提交代码

```bash
cd /path/to/project
git add src/lib/analytics.ts
git commit -m "Configure Google Ads and GA4 tracking IDs"
git push origin main
```

### 步骤3：等待部署

- GitHub Actions会自动部署
- 等待约1-2分钟
- 访问 https://prstmit.site 确认更新

---

## ✅ 测试验证

### 方法1：使用Google Tag Assistant

1. **安装Chrome扩展**
   - 搜索"Tag Assistant Legacy"
   - 或访问：https://tagassistant.google.com/

2. **测试网站**
   - 访问：https://prstmit.site
   - 点击Tag Assistant图标
   - 点击"Enable"
   - 刷新页面

3. **验证标签**
   - 应该看到：
     - ✅ Google Analytics (gtag.js)
     - ✅ Google Ads Conversion Tracking

### 方法2：实时测试转化

1. **在Google Analytics中**
   - 左侧菜单：报告 → 实时
   - 访问网站并点击WhatsApp按钮
   - 应该看到事件出现在实时报告中

2. **在Google Ads中**
   - 工具与设置 → 转化
   - 查看最近转化记录

### 方法3：浏览器控制台测试

1. **打开开发者工具**
   ```
   F12 或 右键 → 检查
   ```

2. **查看Console日志**
   ```
   应该看到：
   - Google Analytics 4 initialized
   - Google Ads initialized
   - Event tracked: whatsapp_click {...}
   ```

3. **检查Network标签**
   - 筛选：google-analytics.com
   - 应该看到数据发送请求

---

## 🔧 常见问题

### Q1: 为什么看不到转化数据？

**A:** 检查以下几点：
1. ID配置是否正确（无空格、完整）
2. 网站是否已重新部署
3. 等待24小时（数据可能有延迟）
4. 检查浏览器控制台是否有错误

### Q2: 如何知道跟踪代码是否正常工作？

**A:** 三种方法：
1. 使用Tag Assistant扩展
2. 查看Google Analytics实时报告
3. 检查浏览器控制台日志

### Q3: 转化价值如何设置？

**A:** 建议：
- WhatsApp联系：₦10 （最有价值的转化）
- 电话点击：₦8
- 邮件点击：₦5
- 计算器使用：₦3 （意向信号）

### Q4: 需要Cookie同意横幅吗？

**A:** 
- 在尼日利亚：目前不强制要求
- 最佳实践：添加简单的Cookie政策
- 可以稍后实施

### Q5: 数据多久能看到？

**A:**
- **实时数据：** 几秒钟到几分钟
- **转化数据：** 3-24小时
- **完整报告：** 24-48小时

---

## 📈 下一步

完成设置后：

1. ✅ **运行测试广告系列**
   - 小预算（₦1,000-2,000/天）
   - 测试1-2周

2. ✅ **监控数据**
   - 每天检查Google Ads
   - 每周审查Google Analytics
   - 调整出价和预算

3. ✅ **优化广告**
   - 暂停低效关键词
   - 增加高效关键词预算
   - 测试新的广告文案

4. ✅ **扩大规模**
   - 逐步增加预算
   - 添加新的广告系列
   - 测试展示广告和视频广告

---

## 📞 获取帮助

**Google Ads支持：**
- 电话：+234 1 227 7000
- 在线聊天：ads.google.com (登录后)
- 帮助中心：support.google.com/google-ads

**Google Analytics支持：**
- 帮助中心：support.google.com/analytics
- 社区论坛：support.google.com/analytics/community

**技术问题：**
- 检查GitHub Issues
- 查看开发者文档

---

**祝广告投放成功！🚀**

如有任何疑问，请参考 `GOOGLE_ADS_STRATEGY.md` 文件了解完整的广告策略。
