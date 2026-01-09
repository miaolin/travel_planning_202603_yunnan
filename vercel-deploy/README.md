# 云南旅行行程规划 - 2026年3月

这是一个交互式的旅行行程网页，包含完整的云南旅行规划信息。

## 📋 功能特点

- ✨ **响应式设计** - 支持手机、平板、电脑多端访问
- 📅 **详细行程** - 包含9天完整的日程安排
- ✅ **待办清单** - 可交互的待办事项列表，点击即可标记完成
- 💰 **费用跟踪** - 清晰的费用汇总和支付状态
- 🏨 **住宿信息** - 完整的酒店预订详情
- ✈️ **航班信息** - 往返航班时刻表
- 🎯 **快速导航** - 粘性导航菜单，快速跳转各板块
- 🖨️ **打印友好** - 支持打印保存离线使用

## 🚀 本地预览

### 方法1：直接打开
直接在浏览器中打开 `index.html` 文件即可查看

### 方法2：使用本地服务器
```bash
# Python 3
python3 -m http.server 3000

# 或使用 npm 脚本
npm run dev
```

然后在浏览器中访问 `http://localhost:3000`

## 📦 部署到 Vercel

### 方法1：通过 Vercel CLI（推荐）

1. **安装 Vercel CLI**
```bash
npm install -g vercel
```

2. **登录 Vercel**
```bash
vercel login
```

3. **部署项目**
```bash
cd vercel-deploy
vercel
```

首次部署时会询问项目配置：
- Set up and deploy: **Y**
- Which scope: 选择你的账户
- Link to existing project: **N**
- Project name: `yunnan-trip-itinerary` (或自定义)
- In which directory is your code located: **./`**

4. **部署完成**
部署成功后会显示访问链接，例如：
```
https://yunnan-trip-itinerary.vercel.app
```

5. **后续更新部署**
修改文件后，只需再次运行：
```bash
vercel --prod
```

### 方法2：通过 Vercel 网站部署

1. **访问 Vercel**
   - 前往 [https://vercel.com](https://vercel.com)
   - 使用 GitHub、GitLab 或 Bitbucket 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择 "Import Git Repository"（推荐）或 "Import from Template"

3. **上传文件**
   - 如果使用Git：推送代码到GitHub/GitLab，然后导入仓库
   - 如果直接上传：将 `vercel-deploy` 文件夹内容压缩成zip上传

4. **配置项目**
   - Project Name: `yunnan-trip-itinerary`
   - Framework Preset: **Other**
   - Root Directory: **./`**
   - Build Command: 留空
   - Output Directory: **./`**

5. **部署**
   - 点击 "Deploy"
   - 等待几秒钟，部署完成后会得到访问链接

### 方法3：使用 GitHub + Vercel 自动部署

1. **创建 GitHub 仓库**
```bash
cd vercel-deploy
git init
git add .
git commit -m "Initial commit: Yunnan trip itinerary"
git branch -M main
git remote add origin https://github.com/yourusername/yunnan-trip.git
git push -u origin main
```

2. **连接 Vercel**
   - 在 Vercel 网站点击 "New Project"
   - 选择刚创建的 GitHub 仓库
   - 点击 "Import"
   - 保持默认配置，点击 "Deploy"

3. **自动部署**
   - 之后每次推送到 GitHub 的更新都会自动部署到 Vercel

## 📁 项目结构

```
vercel-deploy/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 交互脚本
├── vercel.json         # Vercel配置
├── package.json        # 项目配置
└── README.md           # 说明文档
```

## 🎨 自定义

### 修改行程内容
编辑 `index.html` 文件中的相应部分：
- 行程概览：`<section id="overview">`
- 待办事项：`<section id="todo">`
- 航班信息：`<section id="flights">`
- 住宿安排：`<section id="hotels">`
- 每日行程：`<section id="itinerary">`
- 费用汇总：`<section id="costs">`

### 修改样式
编辑 `styles.css` 文件，可以调整：
- 颜色主题：修改 `:root` 中的 CSS 变量
- 布局间距：调整 padding、margin 值
- 字体大小：修改 font-size 属性

### 修改交互功能
编辑 `script.js` 文件，可以：
- 添加本地存储功能保存待办状态
- 自定义动画效果
- 添加更多交互功能

## 🔧 故障排除

### 部署后页面空白
- 检查浏览器控制台是否有错误
- 确认 `styles.css` 和 `script.js` 路径正确
- 确保所有文件都已上传

### 样式丢失
- 检查 `index.html` 中的 CSS 链接：`<link rel="stylesheet" href="styles.css">`
- 确认 `styles.css` 文件存在且路径正确

### JavaScript 不工作
- 检查浏览器控制台错误信息
- 确认 `script.js` 文件存在且路径正确
- 检查 `<script src="script.js"></script>` 标签位置（应在 `</body>` 前）

## 📱 浏览器兼容性

- ✅ Chrome / Edge (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ 移动浏览器（iOS Safari, Chrome Mobile）

## 📄 许可证

MIT License - 可自由使用、修改和分发

## 🤝 贡献

欢迎提出建议和改进意见！

---

**祝旅途愉快！🎉**
