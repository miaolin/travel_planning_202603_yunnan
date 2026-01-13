# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
