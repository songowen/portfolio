# Feature-Sliced Design (FSD) Structure

This project follows the Feature-Sliced Design architecture.

## Layer Responsibilities

| Layer | Purpose | Can Import From |
|-------|---------|-----------------|
| `app/` | App initialization, providers, global styles, routing setup | All layers |
| `pages/` | Full page compositions, route-level components | widgets, features, entities, shared |
| `widgets/` | Large self-contained UI blocks (e.g., Header, Footer, ProjectCard) | features, entities, shared |
| `features/` | User interactions and actions (e.g., ThemeToggle, ContactForm) | entities, shared |
| `entities/` | Business entities and their UI (e.g., Project, Skill) | shared |
| `shared/` | Reusable utilities, UI kit, assets, constants | Nothing (base layer) |

## Shared Layer Breakdown

```
shared/
├── ui/           # Reusable UI components (Button, Card, etc.)
├── assets/       # Static assets
│   └── images/
│       └── profile/   # Profile photos
├── lib/          # Utilities, helpers (future)
└── config/       # Constants, configuration (future)
```

## Import Rules

- Layers can only import from layers below them (never above).
- No circular dependencies between slices within the same layer.
- Cross-imports within a layer should go through public APIs (index.ts exports).
