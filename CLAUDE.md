# Claude Code Project Guide (Vite + React)

## Project Summary
- Project type: Vite + React portfolio site
- Primary goals (priority order):
  1) Fix content issues (wrong images, copy, broken links)
  2) Improve UI/UX (layout/typography/consistency)
  3) Refactor codebase (structure/types/reuse) WITHOUT breaking UI

## Non-Negotiables (Hard Rules)
1) Do NOT change behavior unless explicitly requested.
2) Do NOT introduce new libraries unless explicitly requested.
3) Do NOT rename routes/paths without a clear migration plan.
4) Keep changes small and reviewable:
   - One task = one theme
   - Prefer < 10 files touched per task
5) Always run checks after changes:
   - `npm run build` (must pass)
   - `npm run lint` (must pass if configured)
6) When uncertain, create a PLAN first; do not edit code.

## Workflow (Must Follow)
### Phase 0: Inspect → Plan
- First response must include:
  - What you will change
  - Which files you will touch
  - Risks
  - Validation steps

### Phase 1: Execute Small Patch
- Make the smallest change that achieves the goal.
- Keep diffs minimal.

### Phase 2: Verify
- Ensure app still builds and key pages render.
- If build/lint fails, fix it before finishing.

### Phase 3: Summarize
- Provide:
  - Summary of changes
  - Files changed
  - How to test manually

## Task Types & Allowed Scope
### A) Content Fix (Images/Copy)
- Allowed: replace image assets, update import paths, update alt text, update content strings
- Not allowed: component architecture changes

### B) UI/Design Update
- Allowed: Tailwind/classes/CSS changes, spacing/typography/layout improvements
- Not allowed: move logic, change data flow, refactor components

### C) Refactor
- Allowed: extract shared components, remove duplication, types cleanup
- Not allowed: any visible UI change (unless noted)

## Branch/Commit Guidance
- Use one branch per theme (e.g., `fix/images`, `ui/typography`, `refactor/components`)
- Commit messages:
  - `fix: ...` for content fixes
  - `ui: ...` for design changes
  - `refactor: ...` for refactors
  - `chore: ...` for tooling

## Cost Control (Pro Plan Friendly)
- Prefer analysis over full rewrites.
- Avoid “project-wide refactor” requests.
- Always ask: can we solve this by editing 1–3 files?
- Use sub-agents only for READ/ANALYZE, not for parallel edits.