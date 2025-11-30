# ROI Calculator & Nav Restructure

## Plan

### Phase 1: Nav Restructure
- [x] Update FloatingNav component to support dropdowns
- [x] Update FloatingNavWrapper with new structure: Home | Learn ▾ | Tools | Contact
- [x] Learn dropdown contains: Articles, Videos, Newsletter

### Phase 2: Tools Infrastructure
- [x] Create `/tools` page listing available tools
- [x] Create `/tools/roi-calculator` page

### Phase 3: ROI Calculator
- [x] Build calculator component with editable inputs (green cells from Excel)
- [x] Implement calculations matching Excel logic
- [x] Style with clean, professional design
- [x] Add explanatory text/tooltips for each field

### Inputs (editable):
- Revenue
- First year customer revenue
- Number of customers
- Average LTV per customer
- Number of salespeople
- Annual cost per salesperson
- Founder hourly wage
- Hours founder spends selling weekly
- VP Salary/bonus/overhead
- Monthly missed opportunities

### Outputs (calculated):
- Cost of Founder-Led Sales (6 month)
- Cost of Bad VP Hire (6 month)
- Cost of Fractional Sales Exec (6 month)
- Savings comparisons

---

## Review

### Summary of Changes
1. **Nav restructure**: Changed from 6 items to 4 items with dropdown
   - `Home | Learn ▾ | Tools | Contact`
   - Learn dropdown contains: Articles, Videos, Newsletter
2. **New Tools infrastructure**: Created `/tools` landing page and `/tools/roi-calculator`
3. **ROI Calculator**: Interactive calculator matching Excel spreadsheet logic

### Files Created/Modified
- `components/ui/floating-navbar.tsx` - Added dropdown support
- `components/FloatingNavWrapper.tsx` - Updated nav structure
- `app/(site)/tools/page.tsx` - New tools landing page
- `app/(site)/tools/roi-calculator/page.tsx` - Calculator page
- `components/ROICalculator.tsx` - Interactive calculator component

### New Dependencies
- None (uses existing lucide-react icons)

### Environment Variables
- None needed for these changes

### Known Limitations
- Fractional Sales Exec cost is hardcoded at $65,000 (20 hrs/week for 26 weeks)
- Could add more customization options for the fractional cost in future

### Future Improvements
- Add ability to customize fractional sales exec hourly rate
- Add PDF export of results
- Add sharing functionality
