# 快速部署指南 Quick Deploy Guide

## 🚀 最简单的部署方式 (推荐)

### 使用 Vercel CLI

1. **安装 Vercel CLI**
```bash
npm install -g vercel
```

2. **进入项目目录**
```bash
cd vercel-deploy
```

3. **登录并部署**
```bash
vercel login
vercel
```

4. **完成！**
部署成功后会显示访问链接，例如：
```
✓ Production: https://yunnan-trip-itinerary.vercel.app
```

## 🌐 通过 Vercel 网站部署

### 选项 A：使用 GitHub (推荐)

1. **创建 GitHub 仓库并上传代码**
```bash
cd vercel-deploy
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/yunnan-trip.git
git push -u origin main
```

2. **在 Vercel 导入**
   - 访问 https://vercel.com
   - 点击 "New Project"
   - 选择 GitHub 仓库
   - 点击 "Import"
   - 点击 "Deploy"

### 选项 B：直接上传

1. 访问 https://vercel.com/new
2. 选择 "Browse" 上传项目文件
3. 将整个 `vercel-deploy` 文件夹打包成 zip
4. 上传 zip 文件
5. 点击 "Deploy"

## ✅ 部署检查清单

部署前确认：
- ✓ 所有文件都在 `vercel-deploy` 目录中
- ✓ `index.html` 正确引用 `styles.css` 和 `script.js`
- ✓ 没有包含敏感信息（密码、密钥等）

## 📝 更新部署

修改文件后重新部署：

**使用 CLI:**
```bash
vercel --prod
```

**使用 GitHub:**
```bash
git add .
git commit -m "Update itinerary"
git push
```
自动触发重新部署！

## 🔗 分享链接

部署完成后，你会得到一个永久链接，例如：
- https://yunnan-trip-itinerary.vercel.app

你可以：
- 📱 分享给旅行伙伴
- 🔗 添加到手机主屏幕
- 📧 通过邮件发送
- 💬 在微信中分享

## ❓ 遇到问题？

查看完整文档：[README.md](README.md)

---

**预计部署时间：< 2 分钟** ⚡
