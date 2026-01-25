# Task Templates (Small, Reviewable)

## Task Header Template
- Goal:
- Scope:
- Out of scope:
- Files expected to change (estimate):
- Risks:
- Validation:

---

## A) Content Fix Task
- Goal: Replace incorrect images / adjust copy
- Scope:
  - replace assets in `/public` or `/src/assets`
  - update imports and `alt`
- Validation:
  - pages render with correct images
  - `npm run build`

---

## B) UI Update Task
- Goal: Improve layout/typography consistency without changing behavior
- Scope:
  - Tailwind classes only
  - no logic changes
- Validation:
  - visual spot-check on main pages
  - `npm run build`

---

## C) Refactor Task
- Goal: Improve structure/reuse without visual change
- Scope:
  - extract UI components
  - deduplicate utility functions
  - types cleanup
- Validation:
  - UI unchanged (manual)
  - `npm run build` and lint