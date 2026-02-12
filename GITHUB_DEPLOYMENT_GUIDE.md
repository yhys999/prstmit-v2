# GitHub部署指南

## 方案一：使用Git命令行（推荐）

### 1. 打开Windows命令提示符或PowerShell

进入你的项目目录：
```bash
cd D:\primit_site\gift_card_trading_africa
```

### 2. 初始化Git仓库（如果还没有）
```bash
git init
git branch -m main
```

### 3. 配置Git用户信息
```bash
git config user.name "yhys999"
git config user.email "yhys999@users.noreply.github.com"
```

### 4. 添加所有文件并提交
```bash
git add .
git commit -m "Initial commit: Gift Card Trading Africa project"
```

### 5. 添加远程仓库
```bash
git remote add origin https://github.com/yhys999/prstmit-v2.git
```

### 6. 推送到GitHub
```bash
git push -u origin main
```

如果需要输入用户名和密码：
- 用户名：`yhys999`
- 密码：使用你的GitHub Personal Access Token

---

## 方案二：使用GitHub Desktop（最简单）

### 1. 下载并安装GitHub Desktop
访问：https://desktop.github.com/

### 2. 登录GitHub账号
使用你的GitHub账号登录

### 3. 添加现有仓库
- 点击 File → Add local repository
- 选择你的项目文件夹：`D:\primit_site\gift_card_trading_africa`
- 如果提示"This directory does not appear to be a git repository"，点击"create a repository"

### 4. 发布到GitHub
- 点击顶部的"Publish repository"按钮
- 确认仓库名为 `prstmit-v2`
- 取消勾选 "Keep this code private"（如果你想要公开仓库）
- 点击 "Publish Repository"

---

## 配置GitHub Pages

### 1. 进入仓库设置
访问：https://github.com/yhys999/prstmit-v2/settings/pages

### 2. 配置Pages来源
- Source: 选择 "GitHub Actions"
- 保存设置

### 3. 等待自动部署
推送代码后，GitHub Actions会自动运行部署流程：
- 访问：https://github.com/yhys999/prstmit-v2/actions
- 查看部署进度

### 4. 访问你的网站
部署成功后，网站将发布在：
**https://yhys999.github.io/prstmit-v2/**

---

## 已配置的文件

我已经为你创建了以下配置文件：

### 1. `.github/workflows/deploy.yml`
GitHub Actions自动部署工作流，会在你每次推送代码到main分支时自动：
- 安装依赖
- 构建项目
- 部署到GitHub Pages

### 2. `vite.config.ts` 
已配置正确的base路径 `/prstmit-v2/`，确保在GitHub Pages上正常运行

---

## 故障排除

### 问题1：git push被拒绝
如果遇到 "failed to push some refs" 错误：
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### 问题2：认证失败
如果使用HTTPS推送时认证失败：
1. 确保使用Personal Access Token作为密码
2. Token需要有 `repo` 权限
3. 可以配置Git credential helper来保存凭证：
```bash
git config --global credential.helper store
```

### 问题3：GitHub Pages显示404
1. 确保已在仓库设置中启用GitHub Pages
2. 检查 Actions 标签页，确保部署工作流成功运行
3. 等待几分钟让部署生效

---

## 下一步操作

1. ✅ 已初始化本地Git仓库
2. ✅ 已提交所有文件
3. ✅ 已配置GitHub Pages部署工作流
4. ⏳ **待办：** 在你的Windows电脑上推送代码到GitHub
5. ⏳ **待办：** 配置GitHub Pages设置
6. ⏳ **待办：** 等待自动部署完成

按照上述任一方案操作即可完成部署！
