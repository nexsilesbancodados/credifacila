# Project Reset and Modern Institutional Rebuild

The user wants to delete the current site and code to start fresh with a modern, institutional site.

## Proposed Changes

### 1. Simplify Routing
*   Update `src/App.tsx` to remove all legacy routes.
*   Retain only the main landing page (`/`) and a `NotFound` page.

### 2. Modern Institutional Landing Page
*   Completely rewrite `src/pages/Index.tsx` with a high-end, modern, and professional aesthetic.
*   Focus on clean typography, ample whitespace, and high-quality visuals.
*   Sections: Hero, Solutions/Services, About/Institutional, Trust/Credentials, Contact/CTA.

### 3. Cleanup
*   Remove unused files in `src/pages`.
*   Maintain the project structure and configuration files to ensure the development environment remains functional.

## Technical Details
*   Use `framer-motion` for subtle, professional animations.
*   Utilize `lucide-react` for modern iconography.
*   Ensure full responsiveness across all device sizes.
*   Adhere to accessibility (WCAG) standards with proper contrast and semantic HTML.
