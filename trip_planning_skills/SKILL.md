---
name: trip-itinerary-generator
description: Generate comprehensive trip itinerary HTML with detailed planning, train routes, family-friendly options, and cost optimization for trips to China and worldwide.
---

# Trip Itinerary Generation

## Overview
Generate a detailed, interactive trip itinerary web page based on user-provided information including booked tickets, hotels, blog posts, images, and preferences. Optimize for families with children when specified.

## Inputs

User can provide various types of information:
- **Booking confirmations**: Flight tickets, hotels, train tickets (images/screenshots/text)
- **Documents**: Train timetables, maps, price lists
- **Preferences**: Family-friendly routes, budget constraints, special needs (e.g., children, elderly)
- **Research**: Blog posts, travel guides, attraction information

## Outputs

**Language**: Use Chinese for trips to China, English for other destinations.

**HTML Structure**: Generate an interactive HTML page with **8 independent tab sections**:

### 1. Trip Overview (行程概览)
- Destination and dates
- Travel party composition (e.g., 2 adults + 2 children)
- Key highlights and route summary
- Weather and best time to visit

### 2. Todo List (待办事项)
Generate actionable tasks with priority:
- **Flights**: Mark "pay for flight" if booked but not paid
- **Hotels**: List "book hotel" for dates without confirmed bookings
- **Transportation**: Identify gaps between hotels and provide 2+ transport options with:
  - Detailed timing (considering immigration, baggage claim, transfers)
  - Cost breakdown
  - Family-friendly considerations
- **Tickets**: Scenic area tickets, cable cars, etc.
- **Special preparations**: Altitude sickness prevention, weather gear, etc.

### 3. Flight Information (航班信息)
- Detailed flight schedule with actual arrival/departure times
- Airport transfer options with realistic timing
- Check-in requirements
- Baggage allowance
- Things to prepare

### 4. Hotel Information (酒店住宿)
- **Visual calendar** showing daily accommodations
- Payment status: Paid ✓ / Deferred Payment ⏱ / Unpaid
- Check-in/check-out times
- Cancellation policies
- Hotel amenities
- **Note**: This tab should NOT include transportation between hotels

### 5. Hotel Transit (酒店交通) - **INDEPENDENT TAB WITH INTERACTIVE SELECTION**

**IMPORTANT**: This should be a separate, independent tab in the navigation, NOT embedded in the Hotel Information tab.

For each hotel transition (e.g., Hotel A → Hotel B), provide detailed route analysis with **interactive selection features**:

#### Interactive Route Selection (v3.0.0+)

Each route should include:

**Selection UI Header**:
- 💡 Instructions: "请对比两个方案，然后勾选适合您的出行方式（勾选后自动隐藏另一个方案）"
- 🔄 Reset button: `<button onclick="resetRouteSelection('routeX')">🔄 重新对比</button>`

**Multiple Transport Options** (minimum 2 per route):
- **Option A**: Private car/包车 (recommended for families/groups)
- **Option B**: Public transportation (train/bus)

Each option must have:

1. **Checkbox Selector**:
   ```html
   <div class="route-selector">
       <label>
           <input type="checkbox" data-route="routeX" data-option="train|car|bus">
           <span>✅ 选择[方案名称]</span>
       </label>
   </div>
   ```

2. **Collapsible Summary with Details**:
   - Use HTML `<details>` and `<summary>` elements
   - **Summary (collapsed by default)**: Shows essential info at a glance
     - Route title with emoji (🚄/🚗/🚌)
     - Brief timeline: `出发时间 → 关键点 → 抵达时间`
     - One-line stats: `费用：¥XXX • 时长：X小时 • 亲子指数：⭐⭐⭐⭐⭐`
   - **Details (expandable)**: Full information when clicked

3. **Required Details for Each Option** (inside expandable section):
   1. **📍 Route Description**: Step-by-step directions with landmarks and scenic spots
   2. **📏 Distance & Duration**:
      - Exact kilometers (e.g., 115km, 530km)
      - Realistic total duration (including all stops)
   3. **⏰ Complete Timeline**: Full time breakdown including:
      - Hotel check-out time
      - Departure time
      - Travel time with rest stops (for journeys >2 hours)
      - Arrival time
      - Hotel check-in time
   4. **💰 Cost Breakdown**:
      - Per person cost
      - Total cost for group (4 people)
      - Additional costs (tolls, parking, fuel if applicable)
      - Comparison note (e.g., "比包车省¥230")
   5. **📱 Booking Information**:
      - Specific platforms/apps (滴滴出行, 携程, 12306, etc.)
      - Hotel concierge service
      - Phone numbers if available
      - Advance booking recommendations
   6. **👨‍👩‍👧‍👦 Family-Friendly Rating**: ⭐⭐⭐⭐⭐ (1-5 stars)
      - **Luggage Space**: Trunk capacity, ease of handling
      - **Comfort Level**: Suitability for children/elderly
      - **Scenic Value**: Photo opportunities, views
      - **Flexibility**: Ability to stop for restroom/photos
      - **Safety**: Driver reliability, vehicle standards

**Priority Rules Banner** (display at top of section):
1. **User-provided information**: If user specifies transportation, use that first
2. **Family-friendly**: Prioritize comfort and safety when traveling with children (2大2小)
3. **Cost-effective**: Show budget-conscious options
4. **Convenience**: Direct routes vs. transfers

**Visual Format**: Use comparison cards with clear formatting and interactive elements

### 6. Daily Itinerary (每日行程)
For each day, provide:
- **Time-blocked schedule** (e.g., 09:00-12:00 Activity)
- **Activity details** with addresses and tips
- **Family-friendly notes** when applicable:
  - Suitable for children ages
  - Walking distance and difficulty
  - Altitude considerations
  - Rest breaks
- **Meal suggestions**
- **Photos/visual aids** when relevant

### 7. Cost Breakdown (费用预算)
Detailed budget table with:
- **Categories**: Flights, hotels, transportation, tickets, meals, miscellaneous
- **Itemized costs**: Individual items with quantities
- **Payment status**: Paid/Unpaid/Deferred
- **Currency conversion**: Show both local currency and home currency
- **Per-person cost**: Total divided by number of travelers
- **Cost optimization notes**: Savings achieved, budget-friendly tips

### 8. Travel Tips (旅行贴士)
Practical information and recommendations:
- Local customs and etiquette
- Emergency contacts
- Packing checklist
- Health and safety tips
- Best photography spots
- Local food recommendations

## Special Considerations

### Family Travel (with children)
When user indicates traveling with children:
- **Route optimization**: Choose lower altitudes, shorter walks, flat terrain
- **Timing**: Include rest periods, avoid rushing
- **Safety**: Altitude sickness prevention, emergency contacts
- **Activities**: Kid-friendly attractions, interactive experiences
- **Packing**: Additional items for children (warm clothes, snacks, medicine)
- **Cost**: Child ticket prices, family packages

### Transportation Planning
- **Realistic timing**: Include immigration (60 min), baggage claim, transfers
- **Buffer time**: Add safety margins for connections
- **Multiple options**: Provide 2-3 options per route with detailed comparison
- **Train timetables**: Analyze actual schedules, recommend optimal trains with backup options
- **Family logistics**: Consider luggage, children's comfort, rest stops
- **Cost transparency**: Show clear cost breakdown and comparisons between options

### High-Altitude Destinations
- Altitude sickness prevention guide
- Oxygen requirements
- Gradual acclimatization schedule
- Emergency procedures
- Suitable routes for families/elderly

## Output Format

Generate an interactive HTML page with **8 independent tab sections**:

### Tab Navigation Structure
```
1. 📋 行程概览 (Trip Overview)
2. ✅ 待办事项 (Todo List)
3. ✈️ 航班信息 (Flight Information)
4. 🏨 酒店住宿 (Hotel Information) - WITHOUT transit info
5. 🚗 酒店交通 (Hotel Transit) - INDEPENDENT TAB
6. 📅 每日行程 (Daily Itinerary)
7. 💰 费用预算 (Cost Breakdown)
8. 💡 旅行贴士 (Travel Tips)
```

### Technical Requirements
- **Responsive design**: Works on desktop and mobile devices
- **Tab navigation**: Smooth switching between all 8 sections using `openTab(event, tabName)`
- **Visual elements**:
  - Emoji icons for quick recognition (📋 ✅ ✈️ 🏨 🚗 📅 💰 💡)
  - Color coding for status (Green=Paid, Yellow=Pending, Blue=Deferred)
  - Progress indicators for todo items and payments
- **Interactive features**:
  - Clickable checkboxes for todo list
  - **Route selection** (v3.0.0+):
    - Checkbox selection for each transport option
    - Data attributes: `data-route="routeX"` and `data-option="train|car|bus"`
    - Auto-hide unselected options when user makes selection
    - Reset button to show all options again
    - LocalStorage persistence across page reloads
  - **Collapsible details** (v3.0.0+):
    - Use HTML `<details>` and `<summary>` for expandable content
    - Summary shows: title + timeline + cost/duration/rating
    - Details contain full route information
    - "▼ 展开详情" / "▲ 收起详情" indicators
  - Sticky navigation bar
- **JavaScript Functions** (v3.0.0+):
  ```javascript
  initRouteSelection()           // Initialize on page load
  selectRoute(routeId, optionId) // Handle selection
  applyRouteSelection()          // Apply visual changes
  resetRouteSelection(routeId)   // Reset to show all options
  ```
- **Print-friendly**: Can be printed as PDF for offline use
- **File size**: Aim for 110-125KB for optimal loading (with interactive features)

### Styling Guidelines
- Use card-based layout with shadows
- Recommended color for transport options: Green border (`style="border-color: #28a745;"`) for recommended options
- Star ratings for family-friendly index: ⭐⭐⭐⭐⭐ (1-5 stars)
- Alert boxes for important notices with appropriate icons
- **Route selection styles** (v3.0.0+):
  - `.route-selector`: Gray background (#f8f9fa) checkbox container
  - `.route-selected`: Green border (3px solid #28a745) for selected option
  - `.route-hidden`: Hide unselected options (display: none)
  - `.reset-selection-btn`: Gray button (#6c757d) for reset action
  - `summary`: Clickable area with hover effect, gray background
  - `summary::after`: "▼ 展开详情" / "▲ 收起详情" indicator

## Quality Standards

- **Accurate timing**: Always include realistic buffers and transfer times
- **Cost transparency**: Show both estimates and confirmed costs with clear breakdowns
- **Safety first**: Highlight important warnings and precautions (altitude, weather, children)
- **Practical tips**: Include insider knowledge and optimization suggestions
- **Family-focused**: When applicable, prioritize comfort and safety for children
- **Concise content**: Focus on decision-critical information, avoid redundancy
  - Use family-friendly ratings instead of lengthy pros/cons lists
  - Keep descriptions clear and actionable
  - Avoid information overload

## Content Principles

### DO Include:
✅ Specific numbers (distance, cost, time)
✅ Actionable booking information (apps, platforms, phone numbers)
✅ Family-friendly ratings with 5 dimensions
✅ Clear priority rules for decision making
✅ Realistic timelines with all steps
✅ Cost comparisons between options

### DO NOT Include:
❌ Lengthy "Pros & Cons" lists (use family-friendly rating instead)
❌ Redundant information already covered in other sections
❌ Overly detailed descriptions that distract from key decisions
❌ Subjective opinions without practical value

## Additional Resources

- **Example**: See [vercel-deploy/index.html](../vercel-deploy/index.html) for v3.0.0 reference with interactive features
- **Current version**: v3.0.0 (2026-01-15) - Interactive route selection with collapsible details
- **File size**: Target 110-125KB for optimal performance
- **Icons**: Use emoji for quick visual recognition:
  - Status: ✓ (Paid) ⏱ (Deferred) ❌ (Unpaid) ⚠️ (Warning)
  - Categories: 🏨 (Hotel) ✈️ (Flight) 🚄 (Train) 🚗 (Car) 📅 (Calendar) 💰 (Cost)
  - Actions: 🔄 (Reset) ✅ (Select) 💡 (Tip)

## Version History

- **v3.0.0** (2026-01-15): Added interactive route selection with collapsible details
  - Checkbox selection for transport options
  - Expandable/collapsible route details using `<details>` + `<summary>`
  - LocalStorage persistence for user selections
  - Reset functionality to restore all options
- **v2.9.0** (2026-01-14): Simplified route presentation (single recommended option)
- **v2.8.0** (2026-01-14): High-speed train prioritization with unified booking reminder
- **v2.7.0** (2026-01-14): Added specific train routes with detailed timetables
- **v2.6.0** (2026-01-14): Independent hotel transit tab, removed pros/cons sections
- **v2.5.0** (2026-01-13): Separated hotel transit from accommodation tab
