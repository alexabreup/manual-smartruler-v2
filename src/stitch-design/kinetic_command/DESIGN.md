---
name: Kinetic Command
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393f'
  surface-container-lowest: '#0c0e13'
  surface-container-low: '#1a1c21'
  surface-container: '#1e2025'
  surface-container-high: '#282a2f'
  surface-container-highest: '#33353a'
  on-surface: '#e2e2e9'
  on-surface-variant: '#dfc0b3'
  inverse-surface: '#e2e2e9'
  inverse-on-surface: '#2e3036'
  outline: '#a68b7f'
  outline-variant: '#574238'
  surface-tint: '#ffb694'
  primary: '#ffb694'
  on-primary: '#571f00'
  primary-container: '#ed712e'
  on-primary-container: '#521d00'
  inverse-primary: '#a14000'
  secondary: '#c6c6cd'
  on-secondary: '#2e3036'
  secondary-container: '#47494f'
  on-secondary-container: '#b7b8bf'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#949595'
  on-tertiary-container: '#2c2e2e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb694'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7b2f00'
  secondary-fixed: '#e2e2e9'
  secondary-fixed-dim: '#c6c6cd'
  on-secondary-fixed: '#1a1c21'
  on-secondary-fixed-variant: '#45474c'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#111318'
  on-background: '#e2e2e9'
  surface-variant: '#33353a'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 20px
  container-max: 1280px
---

## Brand & Style

This design system establishes a high-performance, technical aesthetic that bridges the gap between a professional training manual and a futuristic gaming HUD. The brand personality is precise, authoritative, and efficient, evoking the feeling of a sophisticated mission-control interface. 

The style is characterized by a "High-Tech Hard-Surface" approach. It utilizes sharp 90-degree geometry and 45-degree chamfered "clipped" corners to suggest industrial precision and futuristic hardware. The visual language avoids all organic curves, opting instead for architectural rigidity and data-rich layouts that command attention while remaining strictly functional for educational purposes.

## Colors

The palette leverages a high-contrast dark mode foundation to emphasize the "Gamer" and "High-Tech" narrative. 

- **Primary:** The vibrant orange (#ED712E) is used sparingly as a "system alert" or "active state" color, drawing the eye to critical CTAs and progress indicators.
- **Surface & Background:** The deep charcoal (#17191E) serves as the primary canvas, providing a low-strain environment for long-form reading.
- **Typography & Details:** Off-whites (#F4F4F4 and #FFFBF5) provide clean, legible text and sharp hairline borders.
- **Accents:** Use low-opacity versions of the primary orange for subtle "energy" glows behind interactive elements.

## Typography

The typography strategy focuses on technical clarity and geometric structure. 

- **Display & Headlines:** Use **Space Grotesk** for its cutting-edge, geometric architecture. It feels engineered rather than drawn.
- **Body Text:** **Hanken Grotesk** provides high legibility for training content, maintaining a sharp, modern sans-serif feel without the eye fatigue of more decorative fonts.
- **Utility & Data:** **JetBrains Mono** is utilized for labels, technical specs, and UI metadata. The monospaced nature reinforces the "high-tech" and "developer" vibe of the interface.

## Layout & Spacing

This design system employs a **Rigid Grid** model based on a 4px baseline unit. 

The layout should feel like a multi-monitor setup or a tactical dashboard. Use a 12-column grid for primary content, but allow for "sidebar modules" that act as auxiliary data panels. Layouts are strictly aligned to 90-degree axes. 

Margins and padding should be generous but mathematically consistent to maintain the professional tone of a manual. Use "technical gutters"—visible hairline dividers—to separate different information modules instead of relying solely on white space.

## Elevation & Depth

Depth is conveyed through **structural layering** rather than soft shadows. 

1.  **Level 0 (Base):** The #17191E background.
2.  **Level 1 (Panels):** Defined by 1px solid borders in #F4F4F4 (at 10-20% opacity). 
3.  **Level 2 (Active Elements):** Elements "glow" with a subtle outer stroke or inner glow using the primary #ED712E color.

Avoid ambient blurs. Instead, use "bracket" graphics on corners or hairline crosshair markers to indicate focus. Surfaces do not float; they are "bolted" to the interface.

## Shapes

The shape language is strictly **non-rounded**. 

- **Primary Shape:** 90-degree sharp corners for all standard containers and buttons.
- **Accent Shape:** 45-degree chamfered cuts (dog-eared corners) on the top-right or bottom-left of panels to indicate interactivity or specialized technical modules.
- **Dividers:** Use "notched" lines where a horizontal divider has a small vertical tick mark at its ends, mimicking a blueprint or technical drawing.

## Components

### Buttons
Buttons are rectangular with sharp 90-degree corners. Primary buttons use a solid #ED712E fill with black text. Secondary buttons are "Ghost" style with a 1px white border. Interactive states should include a 45-degree chamfer on the top-right corner that appears on hover.

### Input Fields
Inputs are outlined boxes with a subtle "scanning" line at the bottom. Use JetBrains Mono for placeholder text to maintain the technical aesthetic. On focus, the border color shifts to the primary orange.

### Cards & Modules
Training modules are housed in "Data Blocks." These feature a header bar with a background color slightly lighter than the base background, often including a "Serial Number" or "Module ID" in the top corner in monospace font.

### Progress Indicators
Progress is shown through segmented bars (e.g., 10 distinct blocks) rather than a smooth continuous line, reinforcing the digital/mechanical nature of the UI.

### Decorative Accents
Incorporate "HUD Brackets"—L-shaped hairline graphics—around images or important callouts to frame content like a camera viewfinder.