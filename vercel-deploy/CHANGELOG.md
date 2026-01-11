# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
