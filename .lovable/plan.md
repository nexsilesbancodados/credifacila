Recreate the entire Credifácil website into a "Modern Institutional" experience, focusing on high-end banking aesthetics, accessibility (WCAG), and perfect responsiveness.

### Visual Direction
- **Typography**: Upgrade to `Plus Jakarta Sans` for all headings and `Inter` for body text.
- **Color Palette**: Move from a muddy dark theme to a "Sophisticated Midnight & Champagne" system with higher contrast.
- **Layout**: Implement "Bento-grid" layouts for services, cleaner sections with ample whitespace, and improved glassmorphism effects.

### Implementation Steps

1. **Design System Refresh**
   - Update `tailwind.config.ts` with refined colors and typography presets.
   - Refactor `index.css` to define a cleaner base layer, improved contrast for accessibility, and modern component classes (`.card-modern`, `.btn-primary`).

2. **Core Layout Upgrade**
   - Refactor `src/components/Layout.tsx` to handle backgrounds more elegantly.
   - Rebuild `Header.tsx` with a high-fidelity glassmorphism effect and smoother transitions.
   - Rebuild `Footer.tsx` for better structure and institutional trust signals (compliance badges, clear navigation).

3. **Homepage (Index) Overhaul**
   - Re-implement the Hero section with a "split-screen" or "focused-center" design for better impact.
   - Redesign the Service cards into a more interactive and clean grid.
   - Add a "Trust & Security" section (inspired by the user's uploaded image).

4. **Internal Pages Refactoring**
   - Standardize all internal pages (`Sobre`, `Consignado`, `Securitizadora`, etc.) to use a shared "Modern Institutional" template.
   - Fix all contrast and legibility issues reported by the user.

5. **Performance & Accessibility**
   - Implement `loading="lazy"` for all non-critical images.
   - Ensure all interactive elements have correct `aria-labels` and keyboard focus states.
   - Verify WCAG AA contrast ratios across the entire site.

### Technical Details
- **Tech Stack**: React, Tailwind CSS, Framer Motion, Lucide React.
- **Focus**: Semantic HTML, responsive design (mobile-first), and high-performance animations.
