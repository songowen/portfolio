# Sub-Agent Operating Model

## Why Sub-Agents
We use sub-agents to reduce thrash and token waste:
- Sub-agents only READ / ANALYZE / REPORT.
- Only the main agent applies code changes.

## Roles

### 1) Scout (Codebase Map)
- Purpose: quickly map folder structure, entry points, major components
- Output:
  - Component tree high-level
  - Where images live, how they are referenced
  - Where styling is defined

### 2) UI Reviewer (Design Consistency)
- Purpose: find UI inconsistencies and propose small improvements
- Output:
  - typography scale suggestions
  - spacing inconsistencies list
  - repeated Tailwind patterns to unify

### 3) Asset Auditor (Images/Fonts)
- Purpose: identify wrong images, missing assets, broken paths
- Output:
  - asset inventory table (file → used in → reference)
  - replacement plan (exact file paths)

### 4) Refactor Planner (Architecture)
- Purpose: propose refactor steps that keep UI unchanged
- Output:
  - refactor plan split into 3–5 small tasks
  - each task: files touched + risk + expected win

### 5) QA Checker (Build/Lint)
- Purpose: ensure changes are verifiable
- Output:
  - exact commands to run
  - manual test checklist

## Parallelization Rules
- OK to run Scout + Asset Auditor + UI Reviewer in parallel (READ ONLY).
- NOT OK to have multiple agents editing code simultaneously.
- Final changes are applied sequentially by the main agent.

## Standard Output Format (All Agents)
- Findings (bullets)
- Proposed patch list (max 3 options)
- Recommended option + why
- Risk & validation steps