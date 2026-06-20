# CraftDexa — Design Tokens & Topology (extracted from craftdexa.com)

## Fonts
- Headings: **Syne** (weight 800), letter-spacing negative
- Body/UI: **Inter** (400/500/600)

## Colors
| Token | Value | Use |
|---|---|---|
| bg-base | #0A0E1A (10,14,26) | page / hero / alternating sections |
| bg-darker | #080C18 (8,12,24) | alternating sections, footer |
| surface | #131929 (19,25,41) | cards, "why" band |
| border | #1E2A45 (30,42,69) | card/button borders (0.8px) |
| text | #F0EEF8 (240,238,248) | primary text |
| muted | #8B90A7 (139,144,167) | secondary text, tags |
| primary | #6C63FF (108,99,255) | buttons, eyebrow labels, marquee band |
| primary-light | #9C8DFF (156,141,255) | gradient stop |
| accent-purple | #8B5CF6 | h1 gradient stop |
| accent-amber | #F5A623 | h1 gradient stop |

## Typography
- H1: Syne 96px / 800 / -2.4px (desktop). Words "Founders" gradient #6C63FF→#9C8DFF; "Actually" gradient #8B5CF6→#F5A623 (bg-clip text)
- H2: Syne 60px / 800 / -1.5px
- Eyebrow label: 12px / 400 / uppercase / letter-spacing 2.4px / color primary
- Body: Inter 16px

## Components
- **Primary button**: bg #6C63FF, white text, pill, padding 14px 28px, Inter 16/600, glow `0 0 40px rgba(108,99,255,.3)`
- **Secondary button**: transparent, border .8px rgba(30,42,69,.8), pill, same padding
- **Card**: bg #131929, border .8px #1E2A45, radius 16px, padding 32px, hover lift/border highlight
- **Tag chip**: bg rgba(30,42,69,.8), border #1E2A45, pill, padding 4px 12px, 12px, color muted
- **Marquee band**: solid #6C63FF, scrolling labels separated by ✦

## Page topology (single page, dark)
1. Nav (fixed) — transparent at top → translucent dark + blur + bottom border after ~50px scroll
2. Hero — min-h-screen, eyebrow stats, H1, subtitle, 2 buttons, radial purple glow blob behind
3. Marquee band (purple) — infinite scroll of service labels
4. About "Not an agency. A Craft Engine." — eyebrow WHO WE ARE, heading, 2 paragraphs, 4 stat columns
5. Services "Services that ship." — 6 numbered cards (01–06) w/ tech tags
6. Stats band — 4 count-up counters (Projects 200+, Satisfaction 98%, Avg MVP 4wk, Years 6+)
7. Process "Four steps to shipped." — desktop 4-col grid + mobile horizontal; Discover/Design/Build/Launch
8. Why "They come back because we give a damn." — paragraph + 4 feature items
9. CTA "Let's build your next product." — heading, button, 3 trust lines
10. Footer — logo, blurb, SERVICES / COMPANY / CONNECT columns, copyright

## Behaviors
- Nav scroll transition (duration-300)
- Marquee infinite horizontal scroll
- Count-up stats on scroll into view
- Fade-up reveal on sections entering viewport
- Card hover (border highlight + subtle lift)
