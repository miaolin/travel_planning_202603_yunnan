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

**Required Sections**:

### 1. Trip Overview
- Destination and dates
- Travel party composition (e.g., 2 adults + 2 children)
- Key highlights and route summary
- Weather and best time to visit

### 2. Todo List
Generate actionable tasks with priority:
- **Flights**: Mark "pay for flight" if booked but not paid
- **Hotels**: List "book hotel" for dates without confirmed bookings
- **Transportation**: Identify gaps between hotels and provide 2+ transport options with:
  - Detailed timing (considering immigration, baggage claim, transfers)
  - Cost breakdown
  - Pros/cons for each option
  - Family-friendly considerations
- **Tickets**: Scenic area tickets, cable cars, etc.
- **Special preparations**: Altitude sickness prevention, weather gear, etc.

### 3. Flight Information
- Detailed flight schedule with actual arrival/departure times
- Airport transfer options with realistic timing
- Check-in requirements
- Baggage allowance
- Things to prepare

### 4. Hotel Information
- **Visual calendar** showing daily accommodations
- Payment status: Paid ✓ / Deferred Payment ⏱ / Unpaid
- Check-in/check-out times
- Cancellation policies
- Hotel amenities

### 5. Hotel Transit (Inter-Hotel Transportation)

For each hotel transition (e.g., Hotel A → Hotel B), provide detailed route analysis:

**Multiple Transport Options** (minimum 2-3 per route):
- **Option A**: Private car/包车 (recommended for families/groups)
- **Option B**: Public transportation (train/bus)
- **Option C**: Taxi/ride-sharing or alternative

**Required Details for Each Option**:
- **Route Description**: Step-by-step directions with landmarks
- **Distance**: Exact kilometers (e.g., 233km)
- **Travel Duration**: Realistic timing including:
  - Hotel check-out → departure time
  - Actual travel time
  - Rest stops (for journeys >2 hours)
  - Arrival → hotel check-in time
- **Cost Breakdown**:
  - Per person cost
  - Total cost for group
  - Additional costs (tolls, parking, etc.)
- **Booking Information**: How to arrange (app name, phone, hotel concierge)
- **Pros & Cons**: Clear comparison points

**Special Considerations**:
- **Luggage**: Mention trunk space for families with children
- **Comfort Level**: Rate suitability for children/elderly
- **Scenic Value**: Highlight if route has good views
- **Season/Weather**: Note any seasonal restrictions
- **Flexibility**: Which option allows stops for photos/restroom

**Priority Rules** (in order):
1. **User-provided information**: If user specifies transportation, use that first
2. **Family-friendly**: Prioritize comfort and safety when traveling with children
3. **Cost-effective**: Show budget-conscious options
4. **Convenience**: Direct routes vs. transfers

**Visual Format**: Use comparison cards showing options side-by-side

### 6. Daily Itinerary
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

### 7. Cost Breakdown
Detailed budget table with:
- **Categories**: Flights, hotels, transportation, tickets, meals, miscellaneous
- **Itemized costs**: Individual items with quantities
- **Payment status**: Paid/Unpaid/Deferred
- **Currency conversion**: Show both local currency and home currency
- **Per-person cost**: Total divided by number of travelers
- **Cost optimization notes**: Savings achieved, budget-friendly tips

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
- **Multiple options**: Compare train/bus/car/taxi with pros/cons
- **Train timetables**: Analyze actual schedules, recommend optimal trains
- **Family logistics**: Consider luggage, children's comfort

### High-Altitude Destinations
- Altitude sickness prevention guide
- Oxygen requirements
- Gradual acclimatization schedule
- Emergency procedures
- Suitable routes for families/elderly

## Output Format

Generate an interactive HTML page with:
- **Responsive design**: Works on desktop and mobile
- **Tab navigation**: Easy switching between sections
- **Visual elements**: Icons, color coding, progress indicators
- **Interactive features**: Clickable checkboxes, collapsible sections
- **Print-friendly**: Can be printed as PDF for offline use

## Quality Standards

- **Accurate timing**: Always include realistic buffers and transfer times
- **Cost transparency**: Show both estimates and confirmed costs
- **Safety first**: Highlight important warnings and precautions
- **Practical tips**: Include insider knowledge and optimization suggestions
- **Family-focused**: When applicable, prioritize comfort and safety for children

## Additional Resources

- **Example**: See [yunnan_trip_itinerary.html](yunnan_trip_itinerary.html) for reference
- **Style guide**: Follow the same HTML structure and CSS styling
- **Icons**: Use emoji for quick visual recognition (✓ ⏱ ❌ ⚠️ 🏨 ✈️ 🚄)
