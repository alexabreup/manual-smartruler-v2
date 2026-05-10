---
name: Kinetic Technical Light
colors:
  surface: '#fff8f6'
  surface-dim: '#ebd6cd'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#ffeae1'
  surface-container-high: '#fae4db'
  surface-container-highest: '#f4ded5'
  on-surface: '#241914'
  on-surface-variant: '#574238'
  inverse-surface: '#3b2e28'
  inverse-on-surface: '#ffede6'
  outline: '#8b7267'
  outline-variant: '#dfc0b3'
  surface-tint: '#a14000'
  primary: '#a14000'
  on-primary: '#ffffff'
  primary-container: '#ed712e'
  on-primary-container: '#521d00'
  inverse-primary: '#ffb694'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#00658b'
  on-tertiary: '#ffffff'
  tertiary-container: '#00a0d9'
  on-tertiary-container: '#003247'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb694'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7b2f00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#c5e7ff'
  tertiary-fixed-dim: '#7ed0ff'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#004c6a'
  background: '#fff8f6'
  on-background: '#241914'
  surface-variant: '#f4ded5'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-base:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  mono-label:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  numeric-data:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.0'
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  grid_columns: '12'
  gutter: 16px
---

## Brand & Style

This design system translates a "Hard-tech" gaming aesthetic into a professional, mission-critical interface for industrial documentation. The visual language is rooted in **Industrial Precision** and **Tactical Clarity**, moving away from the immersive qualities of dark mode toward the high-readability and clinical efficiency of a laboratory setting. 

The personality is authoritative, systematic, and engineered. It avoids soft, organic forms in favor of aggressive 45° chamfers and 90° junctions. The UI should feel like a high-end digital caliper or a modern cockpit display: every pixel serves a functional purpose, and every element is framed with structural rigidity. The transition to light mode emphasizes white-space as "functional breathing room," ensuring that complex electrical schematics and manual data remain legible during high-stress operations.

## Colors

The palette is anchored by **Intense Orange (#ED712E)**, a high-visibility hazard hue that signals action and importance without drifting into softer salmon or pink territories. This is the "Command" color, used exclusively for primary actions and active states.

- **Foundational Surfaces:** Pure white (#FFFFFF) is used for the primary canvas to maximize contrast. A secondary light gray (#F2F2F2) is used for utility bars, sidebars, and nested containers to provide architectural depth.
- **Typography & Ink:** Deep blacks and dark grays ensure maximum legibility. There are no low-contrast text moments; every piece of information must be readable under harsh lighting.
- **Utility Palette:** Use neutral grays for borders and structural dividers. Warning or status indicators may use technical red or green, but these are kept secondary to the primary Orange.

## Typography

This design system exclusively utilizes **Space Grotesk** to maintain a technical, futuristic, and geometric feel. The font’s idiosyncratic letterforms (like the "a" and "g") lean into the hard-tech aesthetic while remaining highly legible in a light-mode context.

Headlines should be tight and impactful. Use **uppercase styling** for labels, category headers, and technical metadata to evoke a "blueprint" or "manifest" feel. For body copy, prioritize standard sentence case with generous line height for readability. Data points and values should be treated with slightly heavier weights to stand out from the explanatory text.

## Layout & Spacing

The layout philosophy is based on a **strict 8px technical grid**. Every element must snap to this grid to maintain the "engineered" look. 

- **Grid:** Use a 12-column fluid grid for primary layouts, with gutters fixed at 16px to maintain high information density.
- **Rhythm:** Vertical spacing should be aggressive between distinct sections (48px+) but very tight within component groups (4px or 8px) to visually "bundle" related technical data.
- **Margins:** Page margins should be generous (min 32px) to allow the technical content to feel like a floating module on the pure white base.

## Elevation & Depth

In this design system, depth is achieved through **structural layering and hard outlines** rather than soft shadows or blurs.

- **Tonal Stepping:** Instead of shadows, use background color shifts (White to Light Gray) to indicate depth.
- **Hard Shadows:** Where elevation is necessary (e.g., a floating modal), use a solid 2px or 4px offset shadow in #000000 with 100% opacity. This creates a "Brutalist" pop that fits the gaming/tech aesthetic.
- **Strokes:** Use 1px or 2px black borders for all containers. A 2px border should be used for active or "mission-critical" focus states.
- **No Softness:** Never use Gaussian blurs, backdrop filters, or soft ambient shadows.

## Shapes

The shape language is defined by **Absolute Angularity**. 

- **Corners:** All standard corners are 90° (0px radius).
- **Chamfers:** Primary buttons, tabs, and major container headers must feature a **45° chamfered corner** (usually top-right or bottom-left) to reinforce the "hard-tech" military/gaming hardware vibe. 
- **Icons:** Icons should be stroke-based, using 2px weights and sharp caps to match the structural borders of the UI.

## Components

### Buttons
- **Primary:** Solid #ED712E fill with white text. Top-right corner must have a 45° chamfer. No border.
- **Secondary:** White fill with 2px black border. 90° corners. Text in black.
- **Hover States:** Primary orange shifts to a slightly brighter intensity; secondary buttons gain a solid 2px offset shadow.

### Input Fields
- **Style:** 90° corners, 1px black border. The label should be placed in a "tab" box that sits directly on the top border, using the `mono-label` typography style.
- **Active State:** Border thickens to 2px #ED712E.

### Progress Bars / Gauges
- **Style:** Segmented blocks rather than a smooth continuous fill. Use the primary orange for filled segments and light gray for unfilled segments.

### Cards & Containers
- **Industrial Header:** Containers should have a "header bar" in #1A1A1A with white text in `mono-label` style, often with a 45° cut on one side to act as a "tag."
- **Border:** All cards use a 1px #D1D1D1 border as a minimum, increasing to black for high-priority info.

### Status Indicators
- **Critical:** 45° diamond shapes in #ED712E.
- **Normal:** Simple square indicators.
- **Technical Deco:** Use small "+" or crosshair symbols in the corners of major containers to serve as "alignment marks" for the aesthetic.