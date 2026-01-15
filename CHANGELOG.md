# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2026-01-15

### Added
- **Interactive Route Selection** - Checkbox-based selection system for all 4 hotel transit routes
- **Collapsible Details** - Expandable/collapsible route information using HTML `<details>` and `<summary>` elements
- **LocalStorage Persistence** - User selections saved and restored across page reloads
- **Reset Functionality** - "🔄 重新对比" button to restore all route options for comparison
- **Compact Summaries** - Each route shows essential info (timeline, cost, duration, family rating) by default
- **Route Selection UI** - Gray background checkbox containers with visual feedback
- **Selection States** - Green border for selected routes, auto-hide unselected options
- CSS styles for interactive elements (`.route-selector`, `.route-selected`, `.route-hidden`)
- JavaScript functions: `initRouteSelection()`, `selectRoute()`, `applyRouteSelection()`, `resetRouteSelection()`

### Changed
- Updated `vercel-deploy/index.html` to v3.0.0 with all interactive features (138KB)
- Updated `trip_planning_skills/SKILL.md` to document v3.0.0 interactive route selection requirements
- Updated `README.md` to reflect v3.0.0 features and file structure
- File size target increased from 100-120KB to 110-125KB to accommodate interactive features

### Removed
- Deleted `trip_planning_skills/yunnan_trip_itinerary.html` (old v2.x example without interactive features)
- Removed `INTERACTIVE_ROUTE_SELECTION_GUIDE.md` (implementation completed, specs moved to SKILL.md)

### Documentation
- Added comprehensive version history to README.md (v1.0.0 through v3.0.0)
- Updated SKILL.md with detailed interactive route selection specifications
- Updated example references to point to latest v3.0.0 version

## [2.9.0] - 2026-01-14

### Removed
- Removed alternative car rental options for Route 1 (Kunming Airport → Dali)
- Removed alternative car rental options for Route 4 (Lijiang → Kunming Airport)

### Changed
- Changed route titles from "方案A/方案B" to "推荐方案" for single-option routes
- File size reduced from 118KB to 111KB (-6%)

### Rationale
- User selected high-speed train as preferred option
- Simplified presentation by showing only the chosen route

## [2.8.0] - 2026-01-14

### Added
- **Unified Train Ticket Reminder** - High-priority todo item for purchasing both train tickets 7 days in advance
- Yellow background alert box (#fff3cd) with orange border for high visibility
- Reminder includes both journeys: March 14 (C9506) and March 21 (C456)
- Specific deadline: 建议3月7日前完成
- Booking channel information (12306, 携程, 飞猪)

### Changed
- Set high-speed train as **方案A (推荐)** for Route 4
- Swapped route order: High-speed train became Plan A (green border), car rental became Plan B
- Updated train route selector to emphasize "下午出发" (afternoon departure)
- Increased family-friendly rating to ⭐⭐⭐⭐⭐ (5 stars) for C456 train

### Improved
- Better visual hierarchy for train ticket booking priority
- Consolidated two separate reminders into one unified action item

## [2.7.0] - 2026-01-14

### Added
- Specific high-speed train route for Route 4 (Lijiang → Kunming Airport)
- **C456 train** (13:01-17:01, 4 hours, ¥182/person, afternoon departure)
- Complete timeline for the journey with all transfer steps
- Alternative train options (C640, C460) with timing analysis

### Changed
- Updated Day 8 itinerary to reflect high-speed train schedule
- Updated cost budget: ¥23,840.20 → ¥24,058.20
- Enhanced route description with specific train details

### Improved
- More realistic travel planning with actual train timetables
- Better timing for afternoon departure preference

## [1.0.0] - 2026-01-09

### Added
- Initial release of Yunnan Trip Itinerary web application
- Complete 9-day trip itinerary (March 14-22, 2026)
- Interactive navigation menu with smooth scrolling
- Responsive design for mobile, tablet, and desktop devices

## Future Enhancements (Planned)

### [3.1.0] - Future
- [ ] Dark mode toggle
- [ ] Export to PDF functionality
- [ ] Multi-language support (English translation)
- [ ] Weather information integration
- [ ] Map integration for locations
- [ ] Photo gallery section
- [ ] Expense tracker with real-time calculations

### [3.2.0] - Future
- [ ] PWA (Progressive Web App) support for offline access
- [ ] Push notifications for upcoming activities
- [ ] Collaboration features for group trips
- [ ] Integration with booking platforms
- [ ] AI-powered itinerary suggestions

---

## Version Summary

- **3.0.0** (2026-01-15) - Interactive route selection with collapsible details ⭐ **Current**
- **2.9.0** (2026-01-14) - Simplified route presentation (single recommended option)
- **2.8.0** (2026-01-14) - High-speed train prioritization with unified booking reminder
- **2.7.0** (2026-01-14) - Added specific train routes with detailed timetables
- **1.0.0** (2026-01-09) - Initial release with complete itinerary

---

**Legend:**
- `Added` for new features
- `Changed` for changes in existing functionality
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` for vulnerability fixes
