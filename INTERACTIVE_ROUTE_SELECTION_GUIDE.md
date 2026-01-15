# Interactive Route Selection Implementation Guide

## Branch: `interactive-route-selection`

## ✅ Completed (Infrastructure)

### 1. CSS Styles Added
- `.route-selector` - Checkbox container with gray background
- `.route-selected` - Green border for selected route
- `.route-hidden` - Hide unselected routes
- `.reset-selection-btn` - Gray button to reset selection
- `.selection-status` - Green text showing selected status

### 2. JavaScript Functions Added
- `initRouteSelection()` - Initialize all route selections on page load
- `selectRoute(routeId, optionId)` - Handle route selection and save to localStorage
- `applyRouteSelection(routeId, optionId)` - Apply visual changes (hide/show cards)
- `resetRouteSelection(routeId)` - Clear selection and show all options
- localStorage integration for persistent selection across page reloads

## 🔧 Next Steps (UI Implementation)

### Structure for Each Route

Each route section should have this structure:

```html
<h4>路线X：[起点] → [终点] ([日期])</h4>

<!-- Selection Instructions and Reset Button -->
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
    <p style="margin: 0; color: #666;">
        💡 请对比两个方案，选择适合您的出行方式
    </p>
    <button class="reset-selection-btn" onclick="resetRouteSelection('routeX')">
        🔄 重新查看所有方案
    </button>
</div>

<div class="transport-options">
    <!-- Option A with Checkbox -->
    <div class="transport-card" data-route="routeX" data-option="optionA" style="border-color: #28a745;">
        <!-- Checkbox Selector -->
        <div class="route-selector">
            <label>
                <input type="checkbox" data-route="routeX" data-option="optionA">
                <span>✅ 选择此方案</span>
            </label>
        </div>

        <h4>🚄 方案A：[方案名称]</h4>

        <!-- Full route details here -->
        <p><strong>📍 路线描述：</strong></p>
        ...
    </div>

    <!-- Option B with Checkbox -->
    <div class="transport-card" data-route="routeX" data-option="optionB">
        <!-- Checkbox Selector -->
        <div class="route-selector">
            <label>
                <input type="checkbox" data-route="routeX" data-option="optionB">
                <span>✅ 选择此方案</span>
            </label>
        </div>

        <h4>🚗 方案B：[方案名称]</h4>

        <!-- Full route details here -->
        <p><strong>📍 路线描述：</strong></p>
        ...
    </div>
</div>
```

### Required Changes for Each Route

#### Route 1: 昆明机场 → 大理西山酒店
- **Current**: Single option (high-speed train only)
- **Required**:
  1. Add selection header and reset button
  2. Add checkbox to existing train option: `data-route="route1" data-option="train"`
  3. Add back car rental option: `data-route="route1" data-option="car"`

#### Route 2: 大理西山 → 沙溪古镇
- **Current**: Two options already exist (car + bus)
- **Required**:
  1. Add selection header and reset button
  2. Add data attributes: `data-route="route2"` to cards
  3. Add data attributes: `data-option="car"` and `data-option="bus"`
  4. Add checkboxes to both options

#### Route 3: 沙溪古镇 → 丽江白沙古镇
- **Current**: Two options already exist (car + bus)
- **Required**:
  1. Add selection header and reset button
  2. Add data attributes: `data-route="route3"` to cards
  3. Add data attributes: `data-option="car"` and `data-option="bus"`
  4. Add checkboxes to both options

#### Route 4: 丽江白沙古镇 → 昆明机场酒店
- **Current**: Single option (high-speed train only)
- **Required**:
  1. Add selection header and reset button
  2. Add checkbox to existing train option: `data-route="route4" data-option="train"`
  3. Add back car rental option: `data-route="route4" data-option="car"`

## 📝 Car Rental Option Details to Restore

### Route 1: Car Rental Option
```
方案B：包车直达
- 距离：约330公里
- 时长：约4.5-5小时
- 费用：¥600-800（全车4人）= ¥150-200/人
- 亲子友好指数：⭐⭐⭐⭐
```

### Route 4: Car Rental Option
```
方案B：包车直达
- 距离：约530公里
- 时长：约6-6.5小时
- 费用：¥700-900（全车4人）= ¥175-225/人
- 亲子友好指数：⭐⭐⭐⭐
```

## 🎯 User Experience Flow

1. **Initial State**: User sees all options for each route
2. **Comparison**: User can read and compare both options side by side
3. **Selection**: User clicks checkbox on preferred option
4. **Result**:
   - Selected option shows green border
   - Unselected option disappears
   - Selection saved to localStorage
5. **Reset**: User can click "🔄 重新查看所有方案" to see all options again

## 💾 LocalStorage Keys

- `selected-route1`: Stores "train" or "car"
- `selected-route2`: Stores "car" or "bus"
- `selected-route3`: Stores "car" or "bus"
- `selected-route4`: Stores "train" or "car"

## 🔍 Testing Checklist

- [ ] Route 1: Both options display with checkboxes
- [ ] Route 1: Selecting train hides car option
- [ ] Route 1: Selecting car hides train option
- [ ] Route 1: Reset button shows all options again
- [ ] Route 1: Selection persists after page reload
- [ ] Route 2-4: Same behavior as Route 1
- [ ] Multiple routes can have selections simultaneously
- [ ] Selections are independent (selecting route 1 doesn't affect route 2)

## 📊 Benefits

1. **Comparison**: Users can see both options before deciding
2. **Simplicity**: After selection, page is cleaner with only chosen route
3. **Flexibility**: Users can reset and change their mind
4. **Persistence**: Selections are saved across page reloads
5. **Progressive**: Works for both users who want to decide now or later

## 🚀 Next Implementation Steps

Would you like me to:
1. **Complete Route 1** as a full working example?
2. **Complete all 4 routes** with the interactive selection?
3. **Create a separate demo file** to test the functionality first?

The infrastructure is ready - we just need to add the HTML structure to each route section.
