# Style Guide (Vite + React)

## UI Principles
- Keep it minimal and readable.
- Typography hierarchy:
  - H1: strong, only one per page
  - H2/H3: consistent spacing
- Spacing:
  - prefer consistent vertical rhythm (e.g., section spacing fixed)
- Buttons/Links:
  - consistent hover/focus states
- Images:
  - always include meaningful alt text
  - keep aspect ratio consistent

## Code Conventions
- Component file naming: `PascalCase.tsx`
- Prefer small components (<200 LOC).
- Avoid deeply nested JSX; extract subcomponents.
- Avoid duplicated Tailwind strings:
  - create reusable components or constants when repeated 3+ times.

## Accessibility Minimum
- buttons must have text or aria-label
- images must have alt
- focus ring should be visible