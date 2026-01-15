# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.9.0] - 2026-01-15

### Removed
- **路线1（昆明机场→大理）删除包车方案**：
  - 仅保留高铁推荐方案（C9506 09:48-11:59）
  - 删除方案B：包车直达
  - 标题改为"🚄 推荐方案：打车+高铁"

- **路线4（白沙→昆明机场）删除包车方案**：
  - 仅保留高铁推荐方案（C456 13:01-17:01）
  - 删除方案B：包车直达
  - 标题改为"🚄 推荐方案：高铁（下午出发）"

### Changed
- **简化方案展示**：
  - 路线1和路线4从双方案改为单一推荐方案
  - 去掉"方案A"、"方案B"编号
  - 直接显示"推荐方案"，更清晰明确

### Benefits
- ✅ 更简洁：页面内容减少约100行，阅读更流畅
- ✅ 更明确：高铁是唯一推荐，避免选择困难
- ✅ 更聚焦：符合用户已选择高铁的决策
- ✅ 更高效：减少不必要的方案对比信息

### Technical Details
- 文件大小：118KB → 约110KB（减少约8KB）
- 删除内容：路线1方案B（49行）+ 路线4方案B（49行）
- 标题更新：去掉"方案A"编号，改为"推荐方案"

## [2.8.0] - 2026-01-14

### Changed
- **🚄 白沙→昆明高铁方案设为首选推荐**：
  - 路线4方案A改为高铁（推荐，下午出发）
  - 路线4方案B改为包车直达
  - 高铁方案带绿色边框（推荐标识）
  - 亲子友好指数：⭐⭐⭐⭐⭐（5星满分）
  - 强调"下午出发"优势（C456 13:01发车）

### Added
- **⚠️ 统一高铁票购买提醒（高优先级）**：
  - 在待办事项最上方新增黄色高亮提醒框
  - 集中显示两次高铁行程：
    - 3月14日：昆明机场→大理 C9506 (09:48-11:57) ¥106/人×4人
    - 3月21日：丽江→昆明 C456 (13:01-17:01) ¥182/人×4人
  - 明确建议：提前7天购买（3月7日前完成）
  - 购票渠道：12306官网/App（推荐）、携程、飞猪

### Benefits
- ✅ 高铁方案优先：符合用户"下午乘坐高铁"的偏好
- ✅ 统一购票提醒：避免忘记购票，两次高铁信息集中显示
- ✅ 视觉突出：黄色背景+橙色边框，高优先级一目了然
- ✅ 亲子友好度提升：高铁方案5星评级，更适合家庭出行
- ✅ 时间合适：下午13:01出发，不用早起，行程更轻松

### Technical Details
- 高铁方案调整为方案A（绿色边框）
- 待办事项新增样式：`background-color: #fff3cd; border-left: 4px solid #ffc107;`
- 亲子友好指数：⭐⭐⭐⭐ → ⭐⭐⭐⭐⭐

## [2.7.0] - 2026-01-14

### Changed
- **🚄 白沙古镇→昆明机场改用高铁路线**：
  - 方案B更新为具体车次：**C456 (13:01-17:01)**，4小时直达
  - 票价：二等座¥182/人，全家4人共¥728
  - 完整路线：白沙悦榕庄 → 打车到丽江站(¥90) → C456高铁 → 昆明站 → 919路机场大巴(¥25/人) → 桔子机场酒店
  - 总时长：约7小时（11:00退房 → 18:30到酒店）
  - 备选车次：C640 (11:33-16:04) 或 C460 (17:02-21:01)
  - 提醒：建议提前5-7天购买高铁票（3月旺季票紧张）

- **📅 Day 8行程更新 (3月21日)**：
  - 11:00 酒店退房，打车前往丽江站
  - 13:01 乘坐C456高铁前往昆明
  - 17:01 抵达昆明站
  - 17:30 乘坐919路机场大巴
  - 18:30 抵达昆明长水机场桔子酒店入住

- **💰 费用预算调整**：
  - 丽江→昆明交通费用：¥700（包车）→ ¥918（高铁+大巴）
  - 交通小计：¥1,824 → ¥2,042 (+¥218)
  - 总计（人民币）：¥23,840.20 → ¥24,058.20 (+¥218)
  - 合计（新币估算）：S$ 7,935.29 → S$ 7,978.89 (+S$ 43.60)
  - 人均费用：S$ 1,983.82 → S$ 1,994.72 (+S$ 10.90/人)

- **✅ 待办事项更新**：
  - 更新为"预订丽江到昆明高铁票 (3月21日) - 推荐C456车次 13:01-17:01"
  - 明确标注二等座¥182/人，提前5-7天购买

### Benefits
- ✅ 具体车次信息：明确推荐C456车次，方便预订
- ✅ 完整时间规划：详细到分钟的时间线
- ✅ 备选方案：提供C640和C460作为替代选项
- ✅ 亲子友好：高铁4星评级，孩子可在车上自由活动
- ✅ 费用透明：详细列出打车¥90+高铁¥728+大巴¥100

### Technical Details
- 车次信息基于实际火车时刻表（丽江站→昆明站）
- 费用计算：¥90 + ¥182×4 + ¥25×4 = ¥918
- 亲子友好指数：⭐⭐⭐⭐（高铁舒适，行李空间充足）

## [2.6.0] - 2026-01-14

### Added
- **🚗 独立的"酒店交通"标签页**：
  - 将原本嵌入在"酒店住宿"标签中的交通方案独立出来
  - 新增导航标签：🚗 酒店交通
  - 标签位置：在"🏨 酒店住宿"和"📅 每日行程"之间（第5个标签）
  - 包含所有4条酒店间交通路线的完整详细信息

### Changed
- **导航栏更新**：
  - 标签数量：7个 → 8个
  - 新增"🚗 酒店交通"标签（id: transit）
  - 标签顺序优化，交通信息更易查找
- **🏨 酒店住宿标签简化**：
  - 移除酒店间交通方案内容（已移至独立标签）
  - 现在只专注于酒店住宿信息（📅 住宿日历、入住/退房、价格、设施）
- **🚗 简化酒店交通内容**：
  - 移除所有8个交通方案的"优点 vs 缺点"部分
  - 保留6个核心信息：路线描述、距离时长、时间安排、费用明细、预订方式、亲子友好指数
  - 页面更简洁，聚焦关键决策信息
  - 文件大小：121KB → 115KB (减少6KB，-5%)
- **📚 更新技能文档**：
  - 更新 `trip_planning_skills/SKILL.md` 以反映v2.6.0结构
  - 添加"Content Principles"章节，明确DO/DON'T准则
  - 增强亲子友好评级系统说明（5个维度）
  - 明确8标签页结构要求

### Benefits
- ✅ 结构更清晰：酒店住宿和交通规划完全分离
- ✅ 导航更直观：直接点击标签即可查看交通方案
- ✅ 内容更简洁：去除冗余信息，突出核心要素
- ✅ 阅读更快速：减少信息过载，快速获取关键数据
- ✅ 决策更清晰：亲子友好指数已足够做决策参考
- ✅ 页面更轻量：文件大小优化5%
- ✅ 打印更友好：可单独打印交通规划页面

### Technical Details
- HTML结构：新增`<div id="transit" class="tab-content">`
- 导航按钮：新增`<button class="tab" onclick="openTab(event, 'transit')">🚗 酒店交通</button>`
- JavaScript：使用现有`openTab()`函数，无需额外修改
- 最终文件大小：115KB

## [2.4.0] - 2026-01-14

### Added
- **🚗 酒店交通内容全面增强**：
  - 完整实现SKILL.md Section 5定义的所有要素
  - 新增路线选择优先级说明（用户指定 > 亲子友好 > 性价比 > 便利性）
  - 每条路线包含8个详细维度：
    - 📍 路线描述（具体道路、途经景点）
    - 📏 距离与时长（精确公里数、实际时间）
    - ⏰ 完整时间线（check-out → 出发 → 到达 → check-in）
    - 💰 费用明细（单人、总价、各项费用）
    - 📱 预订方式（具体平台、App、电话）
    - ✅ 优点 vs ❌ 缺点（清晰对比）
    - 👨‍👩‍👧‍👦 亲子友好指数（5星评级 + 5个维度分析）
  - 所有4条路线均包含2-3个交通方案的详细对比

### Changed
- **路线2距离修正**：
  - 大理西山 → 沙溪古镇：233公里 → 115公里（纠正错误）
  - 时长：3小时11分钟 → 2小时
- **视觉优化**：
  - 推荐方案添加绿色边框标识
  - 统一使用emoji图标增强可读性
  - 结构化段落，信息层次清晰

### Content Statistics
- 内容增加：91KB → 121KB (+30KB详细内容)
- 路线描述：8个（2方案 × 4路线）
- 时间线详解：8个
- 费用分析：8个
- 预订信息：8个
- 优缺点对比：8个
- 亲子友好评级：8个

## [2.3.0] - 2026-01-13

### Added
- **🏔️ 玉龙雪山亲子游详细攻略（3月19日）**:
  - **人员配置**: 2大2小，专为不易长途行走的孩子设计
  - **路线优化**: 选择云杉坪索道（海拔3205米）替代大索道（4680米）
  - **原因**: 云杉坪海拔低1400米，几乎全平地，孩子不会累，高反风险更小
  - **完整时间表**: 07:00出发 → 14:00返回，共7小时（含午休）
  - **详细景点安排**:
    - 09:00-10:15 云杉坪游览（木栈道+草甸+雪山背景拍照）
    - 10:45-12:30 蓝月谷四湖游览（玉液湖→镜潭湖→蓝月湖→听涛湖）
    - 12:30-13:30 午餐（建议自带野餐）
  - **高反预防指南**:
    - 提前3天给孩子吃红景天口服液
    - 准备氧气瓶×4（必备）
    - 不要剧烈运动，随时观察孩子状态
  - **必备物品清单**: 氧气瓶、羽绒服、手套、帽子、墨镜、防晒霜SPF50+、零食、热水
  - **穿衣建议**: 洋葱式穿搭（长袖+抓绒+羽绒服），云杉坪5-10°C，蓝月谷10-15°C
  - **亲子活动建议**: 湖边找石头、观察水鸟、拍家庭照、玩雪（如有）
  - **费用明细**: 门票+索道+车 ¥580（2大2小）+ 氧气¥240 + 包车¥300 = ¥1,120-1,470

### Changed
- **玉龙雪山门票费用优化**:
  - **旧方案**: 大索道 ¥450/人×4 = ¥1,800（需爬台阶，孩子累）
  - **新方案**: 云杉坪 ¥300+¥280 = ¥580（2大2小，全平地）
  - **节省**: ¥1,220，且更适合孩子游玩
- **景点门票总预算**: ¥2,400 → ¥1,420（含氧气瓶）
- **Day 6行程重写**: 从简单描述改为超详细的分时段亲子游攻略
- **待办事项更新**: 改为预订云杉坪索道票，明确标注亲子游路线

### Financial Impact
- **门票费用**: ¥2,400 → ¥1,420 (saves ¥980)
- **总费用（RMB）**: ¥24,820.20 → **¥23,840.20** (saves ¥980)
- **总费用（SGD）**: ~S$8,131.29 → **~S$7,935.29** (saves ~S$196)
- **人均费用**: ~S$2,032.82 → **~S$1,983.82** (saves ~S$49/person)
- **累计节省**: 从原始预算节省 ~S$251.20 (¥1,256)

### Benefits
- ✅ 更适合2大2小的亲子游安排
- ✅ 降低高原反应风险（海拔低1400米）
- ✅ 减少孩子体力消耗（全平地，无需爬台阶）
- ✅ 更经济实惠（节省¥980）
- ✅ 超详细攻略（时间表、物品清单、注意事项）
- ✅ 包含蓝月谷完整游览方案
- ✅ 增加午休时间（14:00-16:00），孩子充分休息

### Recommendations
- 🎫 **预订建议**: 云杉坪索道票（门票¥100/成人+¥50/儿童，索道¥65/成人+¥35/儿童）
- 🚗 **交通建议**: 包车往返¥300（酒店→景区，约30分钟）
- 🍱 **午餐建议**: 自带三明治、面包、水果在蓝月谷野餐（省钱+体验好）
- 🏔️ **电瓶车可选**: 蓝月谷¥50/人（孩子累了可坐，不累可走）

## [2.2.0] - 2026-01-13

### Changed
- **🚄 Optimized Train Recommendation**: Changed from D8672 (09:00) to **C9506 (09:48)** based on realistic timing
  - **Key improvement**: Now accounts for complete immigration process (60 min) + baggage claim + actual distance (27km)
  - Previous recommendation (D8672 09:00) was too tight - only 2h5min from landing to departure
  - New recommendation (C9506 09:48) provides comfortable 63-minute buffer

### Added
- **Detailed Time Breakdown**:
  - 06:55: Plane lands
  - 07:55: Complete immigration + baggage (60 min allocated)
  - 08:00: Taxi departs to Kunming Station
  - 08:50: Arrive at station (27km, 50 min drive)
  - 09:30: Complete ticketing + security + boarding (40 min allocated)
  - 09:48: Board train C9506
- **Alternative Train Options**: D8692 (09:37), D8684 (10:04), D8696 (10:21)
- **Risk Assessment**: Clear indication that trains before 09:30 are too risky

### Financial Impact
- **Train ticket cost**: ¥137/person → **¥106/person** (saves ¥31/person)
- **Total transportation**: ¥1,948 → ¥1,824 (saves ¥124)
- **Total trip cost**: ¥24,944.20 → **¥24,820.20** (saves ¥124)
- **Total SGD**: ~S$8,156.09 → **~S$8,131.29** (saves ~S$24.80)
- **Per person**: ~S$2,039.02 → **~S$2,032.82** (saves ~S$6.20/person)
- **Cumulative savings from original budget**: ~S$55.20 (¥276)

### Benefits
- ✅ More realistic and achievable timing
- ✅ Cheaper ticket price
- ✅ Less stress and rush
- ✅ Better travel experience
- ✅ Still arrives in time for 12:00 hotel check-in

## [2.1.0] - 2026-01-13

### Added
- **Detailed Train Route from Kunming Airport to Dali**: Complete step-by-step guide
  - Recommended train: D8672 (09:00-11:09), ¥137/person
  - Alternative trains documented: C9502, D8676, D8692, D3932
  - Full timing breakdown from airport arrival (06:55) to hotel check-in (12:00)
  - Airport shuttle and taxi information included
- **Train Timetable Analysis**: Based on actual train schedules for March 14, 2026
- **Transportation Cost Optimization**: Reduced from ¥2,100 to ¥1,948
- **Enhanced Route 1 Section**: Detailed 3-step process with buffer times
  - Step 1: Airport to Railway Station (machine shuttle/taxi)
  - Step 2: Railway journey with multiple train options
  - Step 3: Dali Station to hotel transfer

### Changed
- **Transportation Costs Updated**:
  - Added: Airport shuttle ¥100 (4 people)
  - Updated: High-speed rail ¥548 (4 people on D8672)
  - Transportation subtotal: ¥2,100 → ¥1,948
- **Total Budget Reduced**:
  - Total (RMB): ¥25,096.20 → ¥24,944.20
  - Total (SGD): ~S$8,186.49 → ~S$8,156.09
  - Per person: ~S$2,046.62 → ~S$2,039.02
  - **Savings: ~S$30.40**
- **Todo List Updated**: Train booking task now specifies D8672 train with timing

### Documentation
- Added `TRAIN_ROUTE_KUNMING_TO_SHAXI.md` with comprehensive route analysis
- Enhanced transportation section with visual highlighting of recommended option

## [2.0.0] - 2026-01-11

### Added
- **Complete Hotel Booking Information**: All 4 hotels now fully booked with detailed information
  - Shaxi Tingyu Small Inn (March 16-18): ¥1,936 - Deferred payment (auto-debit March 8)
  - Baisha Ancient Town Hotel (March 18-21): ¥3,914 - Deferred payment (auto-debit March 17 via Alipay)
- **Deferred Payment System**: Comprehensive tracking of auto-debit schedules
  - March 8: Shaxi hotel (¥1,936)
  - March 17: Baisha hotel (¥3,914)
- **Enhanced Hotel Details**:
  - Order numbers for all bookings
  - Detailed cancellation policies with specific deadlines
  - Check-in/check-out instructions
  - Room amenities and facilities
  - Important payment reminders
- **Updated Route Information**:
  - Added Shaxi Ancient Town as intermediate destination
  - New route: Dali → Shaxi (March 16) → Lijiang/Baisha (March 18) → Kunming (March 21)
  - Transportation options with distance and duration for each segment
- **Shaxi Ancient Town Integration**:
  - Day 3 itinerary updated to Shaxi arrival
  - Day 4 itinerary updated with Shaxi exploration options
  - Shaxi highlights: Tea Horse Road historic market, Xingjiao Temple, Sideng Street
- **Travel Tips Expansion**:
  - Shaxi Ancient Town recommendations
  - Specific photography spots
  - Local market schedules (lunar calendar dates)

### Changed
- **Trip Route Updated**:
  - Old: Dali (4 days) → Lijiang (3 days) → Kunming
  - New: Dali (3 days) → Shaxi (2 days) → Lijiang (3 days) → Kunming
- **Hotel Accommodation Status**:
  - All hotels now confirmed and booked
  - Updated from "needs booking" to "deferred payment" for Shaxi and Baisha hotels
- **Cost Updates**:
  - Total accommodation cost: ¥5,666.20 → ¥8,716.20
  - Total budget (RMB): ¥22,046.20 → ¥25,096.20
  - Total budget (SGD equivalent): S$ 7,576.49 → S$ 8,186.49
  - Per person cost: S$ 1,894.12 → S$ 2,046.62
- **Hotel Calendar**: Updated visual calendar with accurate payment status indicators
  - ✓ Paid: Xishan Hotel, Kunming Airport Hotel
  - ⏱ Deferred Payment: Shaxi Hotel, Baisha Hotel
- **Todo List Optimization**:
  - Marked all hotel bookings as completed
  - Added account balance reminders for auto-debit dates
  - Updated transportation booking tasks with new Shaxi route
- **Trip Highlights**: Added Shaxi Ancient Town cultural experiences

### Fixed
- Corrected weekday labels in calendar (March 18 is Wednesday, not Tuesday)
- Updated hotel price from estimates to actual confirmed prices
  - Shaxi: ¥500/night (est.) → ¥968/night (actual)
  - Baisha: ¥600/night (est.) → ¥1,304.67/night (actual)
- Fixed trip route segment between Dali and Lijiang to include Shaxi stopover

### Technical Improvements
- Enhanced payment status badge system with "Deferred Payment" status
- Improved alert messages with payment schedule timelines
- Added color-coding for deferred payment items (blue border)
- Updated calendar day status indicators with emoji symbols

### Documentation
- Updated README with new route information
- Added payment schedule section
- Enhanced hotel booking details with order numbers and policies

## [1.0.0] - 2026-01-09

### Added
- Initial release of Yunnan Trip Itinerary web application
- Complete 9-day trip itinerary (March 14-22, 2026)
- Interactive navigation menu with smooth scrolling
- Responsive design for mobile, tablet, and desktop devices

#### Sections
- **Trip Overview**: Trip summary with key statistics (8 days/7 nights, 4 travelers)
- **Todo List**: Interactive checklist with priority levels (High/Medium/Low)
  - 2 high-priority urgent tasks
  - Transportation arrangements (car rental, driver's license translation)
  - Ticket bookings (Jade Dragon Snow Mountain)
  - Activity reservations (tie-dye, flower cake making, afternoon tea)
  - Document preparation (passport, travel insurance)
  - Packing checklist (sunscreen, clothing, medications, electronics)
  - Pre-departure checks (flight confirmation, check-in)
- **Flight Information**: Complete round-trip flight details
  - Outbound: Singapore → Kunming (March 14, 02:40-06:55)
  - Return: Kunming → Singapore (March 22, 07:25-11:40)
  - Total cost: S$3,167.25 (paid)
- **Hotel Accommodations**: Timeline view of all lodging
  - Yishan Guesthouse (Dali): March 14-16, ¥2,466.20 ✓ Paid
  - Shaxi Ancient Town: March 16-18, Not yet booked
  - Snowmountain View Hotel (Lijiang/Baisha): March 18-21, ¥551.08 (pending payment)
  - Orange Hotel (Kunming Airport): March 21-22, ¥551.08 ✓ Paid
- **Daily Itinerary**: Detailed day-by-day schedule
  - Day 1: Arrival and transfer to Dali
  - Day 2: Dali Ancient Town exploration
  - Day 3: Xizhou Ancient Town and activities
  - Day 4: Transfer to Shaxi Ancient Town
  - Day 5: Transfer to Lijiang (Baisha Ancient Town)
  - Day 6: Jade Dragon Snow Mountain excursion
  - Day 7: Shuhe Ancient Town
  - Day 8: Return to Kunming
  - Day 9: Departure to Singapore
- **Cost Summary**: Comprehensive budget tracking
  - Payment progress: 55% completed
  - Confirmed costs: S$3,167.25 (flights) + ¥3,017.28 (hotels paid)
  - Pending costs: ¥551.08 (hotel) + additional expenses
  - Estimated total: ~S$3,200 + ¥6,000
  - Categories: Transportation, Accommodation, Tickets, Activities

#### Features
- **Interactive Todo Checklist**: Click to mark items as completed
- **Sticky Navigation**: Quick access to all sections while scrolling
- **Smooth Scrolling**: Seamless navigation between sections
- **Progress Bar**: Visual payment completion indicator with animation
- **Print-Friendly Layout**: Optimized for printing
- **Tips & Reminders**: Helpful travel tips throughout each section
- **Color-Coded Status Indicators**:
  - Green badges for paid items
  - Yellow badges for pending payments
  - Red badges for high-priority tasks

#### Technical Implementation
- Separated CSS into external stylesheet (`styles.css`)
- Separated JavaScript into external file (`script.js`)
- Fully responsive CSS Grid and Flexbox layouts
- CSS custom properties for easy theme customization
- Mobile-first responsive design with media queries
- Print styles for offline use

#### Deployment
- Vercel-ready configuration (`vercel.json`)
- Package.json for project metadata
- Comprehensive documentation (README.md)
- Quick deployment guide (DEPLOY.md)
- Git configuration (.gitignore)

### Changed
- Moved Todo List to second position (after Overview) for better visibility
- Updated Orange Hotel (Kunming Airport) payment status from pending to paid
- Adjusted payment progress from 45% to 55%
- Updated total paid amount: ¥2,466.20 → ¥3,017.28

### Design Highlights
- Purple gradient background theme
- Blue and orange accent colors
- Card-based layout with shadows and hover effects
- Timeline visualization for hotel bookings
- Badge system for status indicators
- Icon-enhanced section titles

### Browser Support
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Enhancements (Planned)

### [1.1.0] - Future
- [ ] Local storage support for todo list persistence
- [ ] Dark mode toggle
- [ ] Export to PDF functionality
- [ ] Multi-language support (English translation)
- [ ] Weather information integration
- [ ] Map integration for locations
- [ ] Photo gallery section
- [ ] Expense tracker with real-time calculations

### [1.2.0] - Future
- [ ] PWA (Progressive Web App) support for offline access
- [ ] Push notifications for upcoming activities
- [ ] Collaboration features for group trips
- [ ] Integration with booking platforms
- [ ] AI-powered itinerary suggestions

---

## Version History

- **1.0.0** (2026-01-09) - Initial release with complete itinerary

---

**Legend:**
- `Added` for new features
- `Changed` for changes in existing functionality
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` for vulnerability fixes
