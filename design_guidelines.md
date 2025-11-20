# Design Guidelines: OGQ 스티커 귀여운 심리테스트

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Korean personality test platforms (e.g., MBTI tests, character quizzes) combined with playful, kawaii-style web applications. The design emphasizes cheerful user engagement, smooth interactions, and shareable results.

**Core Principles**:
- Cute and approachable: Soft shapes, friendly typography, cheerful interactions
- Mobile-first: Large touch targets, simple navigation, vertical scrolling
- Joyful progression: Celebrate each step with delightful micro-interactions
- Social-ready: Results designed for screenshot sharing

## Typography

**Font Families** (Google Fonts CDN):
- Primary: 'Noto Sans KR' (400, 700) - for body text and UI
- Accent: 'Jua' or 'Gaegu' - for headings and playful elements

**Hierarchy**:
- Hero/Test titles: 2.5rem (mobile), 3.5rem (desktop), bold, accent font
- Question text: 1.5rem (mobile), 2rem (desktop), bold
- Answer options: 1.125rem, regular weight
- Result descriptions: 1rem, regular
- Button text: 1.125rem, medium weight

## Layout System

**Spacing Units**: Use Tailwind spacing - primarily p-4, p-6, p-8, gap-4, gap-6, mt-8, mb-12
**Container**: max-w-2xl centered for quiz content, max-w-4xl for landing page
**Vertical rhythm**: py-12 (mobile), py-16 (desktop) for section spacing

## Component Library

### Landing Page
- **Hero Section**: Large cheerful title, three test card previews in vertical stack (mobile) / 3-column grid (desktop), each with cute icon/emoji, test name, and "시작하기" button
- **Test Cards**: Rounded corners (rounded-xl), subtle shadow, hover lift effect, pastel gradient backgrounds

### Quiz Flow
- **Progress Bar**: Fixed top position, colorful fill animation, step indicator (1/3, 2/3, 3/3)
- **Question Card**: Centered card with generous padding, question text at top, options below in vertical stack
- **Answer Buttons**: 
  - Full width on mobile, large touch targets (min-h-16)
  - Rounded-2xl corners
  - Pastel background with subtle gradient
  - Leading emoji/icon
  - Text-left alignment
  - Hover: slight scale up (scale-105), deeper shadow
  - Active: quick bounce animation
  
### Results Page
- **Result Header**: Celebratory top section with confetti-like decorative elements
- **Sticker Display**: Large circular or rounded-square container featuring the matched sticker character
- **Result Card**: 
  - Character name as heading
  - Personality description
  - "OGQ 마켓에서 보기" prominent CTA button with external link icon
  - Link should open OGQ Market product page in new tab
- **Share Section**: Row of SNS share buttons (KakaoTalk yellow, Facebook blue, Twitter light blue) with icons from Heroicons
- **Retry Options**: Three small cards linking back to each test

### Navigation
- **Back Button**: Top-left corner, simple arrow icon, subtle hover state
- **Home Button**: Always accessible, returns to test selection

## Visual Elements

### Colors (Pastel Palette - Descriptive Only)
Use soft, cheerful pastels throughout:
- Backgrounds: very light warm tones
- Buttons: soft pink, mint, lavender, peach - varying by test theme
- Accents: brighter versions of pastels for CTAs
- Text: dark charcoal for readability against light backgrounds

### Decorative Elements
- Floating emoji/sparkles in corners (position: absolute)
- Subtle wave or blob SVG shapes as background decorations
- Rounded shapes everywhere (no sharp corners)

### Icons
Use **Heroicons** (outline style) via CDN:
- Arrow icons for navigation
- Share icons for social features
- Checkmark for selection states
- External link icon for OGQ Market links

## Animations

**Minimal but Delightful**:
- Page transitions: Smooth fade + slight slide-up (300ms)
- Button interactions: Scale on hover (scale-105), bounce on click
- Progress bar: Smooth width transition
- Result reveal: Fade-in with slight scale-up for sticker image
- NO complex scroll-triggered animations

## Images

**Sticker Images**:
- Each result displays the matched OGQ sticker character
- Images should be large and prominent (w-48 to w-64)
- Displayed in circular or rounded-square frames
- Use `<img>` tags with alt text describing the sticker character
- Fallback placeholder if image fails to load

**Landing Page**:
- Small decorative illustrations/icons for each test theme
- No large hero image needed - focus on clean, colorful cards

## Accessibility

- High contrast text (dark on light backgrounds)
- Large, tappable buttons (min 44px height)
- Clear focus states with visible outlines
- Semantic HTML (button, nav, main, section)
- Alt text for all sticker images

## Mobile Optimization

- Single column layouts
- Generous touch targets (p-4 minimum)
- Fixed progress bar stays visible
- Bottom navigation if needed
- Prevent horizontal scroll
- Optimize for portrait orientation

## Key Interactions

1. **Test Selection**: Tap card → smooth transition to question 1
2. **Answer Selection**: Tap option → brief highlight → auto-advance to next question
3. **Result Display**: Celebratory reveal animation → sticker appears → description fades in → share buttons appear
4. **Share**: Tap SNS button → native share dialog or direct link
5. **OGQ Link**: Prominent button → opens OGQ Market product page in new tab

## Content Strategy

- Questions: Short, playful, relatable scenarios
- Options: 2-4 words + emoji prefix
- Results: Warm, positive personality descriptions (3-4 sentences)
- CTAs: Action-oriented Korean ("스티커 보러가기", "다시 하기", "공유하기")

This design creates a joyful, engaging experience that feels native to Korean quiz culture while showcasing the cute OGQ stickers effectively.