# 部署指南 - Yunnan Trip Itinerary v2.0.0

## 📦 版本信息

- **版本号**: 2.0.0
- **发布日期**: 2026-01-11
- **主要更新**: 完整酒店预订信息和延期支付跟踪系统

## 🚀 快速部署到 Vercel

### 选项 1: 使用 Vercel CLI（推荐 - 最快速）

```bash
# 1. 确保在 vercel-deploy 目录
cd vercel-deploy

# 2. 如果未安装 Vercel CLI，先安装
npm install -g vercel

# 3. 登录 Vercel（如果还未登录）
vercel login

# 4. 部署到生产环境
vercel --prod
```

部署完成后，你会得到一个访问链接，例如：
```
https://yunnan-trip-itinerary.vercel.app
```

### 选项 2: 通过 Vercel 网站手动部署

1. **访问 Vercel**: https://vercel.com
2. **登录账号**: 使用 GitHub/GitLab/Email 登录
3. **创建新项目**:
   - 点击 "Add New..." → "Project"
   - 选择 "Import Git Repository" 或直接拖拽 `vercel-deploy` 文件夹
4. **配置项目**:
   - Project Name: `yunnan-trip-itinerary`
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: 留空（不需要构建）
   - Output Directory: `./`
5. **点击 Deploy**
6. **等待几秒钟**，部署完成！

### 选项 3: GitHub + Vercel 自动部署

```bash
# 1. 在 vercel-deploy 目录初始化 git（如果还没有）
cd vercel-deploy
git init

# 2. 添加所有文件
git add .

# 3. 提交更改
git commit -m "v2.0.0: Complete hotel bookings with deferred payment tracking"

# 4. 创建 GitHub 仓库并推送（替换为你的仓库地址）
git remote add origin https://github.com/yourusername/yunnan-trip-itinerary.git
git branch -M main
git push -u origin main

# 5. 在 Vercel 网站连接 GitHub 仓库
# - 访问 vercel.com
# - 点击 "New Project"
# - 选择你的 GitHub 仓库
# - 点击 "Import" 和 "Deploy"
```

之后每次更新代码并推送到 GitHub，Vercel 会自动重新部署！

## 📋 部署前检查清单

- [x] ✅ index.html 已更新（81KB）
- [x] ✅ CHANGELOG.md 已更新（版本 2.0.0）
- [x] ✅ package.json 版本已更新（2.0.0）
- [x] ✅ 所有资源文件完整（styles.css, script.js）
- [x] ✅ vercel.json 配置正确

## 🔄 更新已部署的项目

如果你已经部署过，只需要更新：

```bash
cd vercel-deploy

# 使用 Vercel CLI
vercel --prod

# 或者如果使用 Git
git add .
git commit -m "Update to v2.0.0"
git push
```

## 📊 v2.0.0 主要更新内容

### ✨ 新增功能
- ✅ 完整的 4 家酒店预订信息
- ✅ 延期支付自动扣款时间表
- ✅ 沙溪古镇行程整合
- ✅ 详细的取消政策和订单号
- ✅ 账户余额提醒系统

### 📍 行程路线更新
- **旧路线**: 大理(4天) → 丽江(3天) → 昆明
- **新路线**: 大理(3天) → 沙溪(2天) → 丽江(3天) → 昆明

### 🏨 酒店预订状态
1. ✓ 西山酒店（3月14-16日）- 已付款 ¥2,466.20
2. ⏱ 沙溪听雨小筑（3月16-18日）- 延期支付 ¥1,936（3月8日扣款）
3. ⏱ 白沙古镇酒店（3月18-21日）- 延期支付 ¥3,914（3月17日扣款）
4. ✓ 昆明机场酒店（3月21-22日）- 已付款

### 💰 费用更新
- **总预算**: ¥25,096.20 + S$ 3,167.25 ≈ **S$ 8,186.49**
- **人均费用**: 约 **S$ 2,046.62/人**（4人）

## 🎯 部署后验证

访问部署后的网站，检查：
1. ✅ 页面正常加载，无空白
2. ✅ 导航菜单可点击切换
3. ✅ 待办事项可勾选
4. ✅ 所有酒店信息显示正确
5. ✅ 延期支付时间表清晰可见
6. ✅ 移动端响应式布局正常

## 🔗 有用的链接

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel 文档**: https://vercel.com/docs
- **项目 CHANGELOG**: 查看 `CHANGELOG.md`
- **完整 README**: 查看 `README.md`

## ❓ 故障排除

### 部署失败
```bash
# 检查 vercel.json 格式
cat vercel.json | python -m json.tool

# 重新登录
vercel logout
vercel login

# 清除缓存重新部署
vercel --prod --force
```

### 页面显示异常
- 检查浏览器控制台（F12）是否有错误
- 确认所有文件都已上传
- 清除浏览器缓存后刷新

## 📞 技术支持

遇到问题？检查以下资源：
1. Vercel 官方文档
2. CHANGELOG.md（查看所有更新）
3. README.md（查看项目说明）

---

**部署成功后，别忘了分享给你的旅行伙伴！🎉**
