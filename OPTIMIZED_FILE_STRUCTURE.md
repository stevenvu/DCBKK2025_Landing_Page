# FlowTrack Optimized Project Structure

This document outlines a scalable file system layout for the FlowTrack Kanban MVP. The structure builds on the current Next.js App Router foundation while organizing UI, domain logic, and assets for team collaboration and future growth.

## Guiding Principles

- **Feature slices first** – Group Kanban-specific assets (components, hooks, styles, tests) by feature for cohesion and easier refactors.
- **Clear separation of concerns** – Keep shared primitives, domain models, and UI helpers in well-named folders to avoid duplication.
- **Progressive enhancement** – Prepare directories for data fetching, API routes, and testing even if the MVP ships with mocked data.
- **Tooling friendly** – Align with default Next.js conventions so linting, routing, and bundling work without custom configuration.

## Recommended Tree

```
.
├── app/
│   ├── (dashboard)/                      # Route group for authenticated experience
│   │   └── board/
│   │       ├── page.tsx                 # Entry point for the board view
│   │       └── layout.tsx               # Board-specific layout (toolbar, context providers)
│   ├── api/
│   │   └── tasks/
│   │       └── route.ts                 # Future REST endpoints for task CRUD
│   ├── globals.css
│   └── layout.tsx
├── src/
│   ├── components/
│   │   ├── ui/                          # Reusable UI primitives (Button, Modal, etc.)
│   │   └── board/                       # FlowTrack board feature components
│   │       ├── Board.tsx
│   │       ├── Column.tsx
│   │       ├── Card.tsx
│   │       ├── ColumnHeader.tsx
│   │       └── EmptyState.tsx
│   ├── hooks/
│   │   ├── useBoardState.ts             # State management with drag-and-drop helpers
│   │   └── useKeyboardShortcuts.ts      # Accessibility / productivity enhancements
│   ├── lib/
│   │   ├── dnd/
│   │   │   └── index.ts                 # Wrappers around drag-and-drop library config
│   │   ├── analytics.ts
│   │   └── storage.ts                   # Local storage or API adapters
│   ├── models/
│   │   └── board.ts                     # Type-safe domain models & schema validators
│   ├── styles/
│   │   ├── globals.css
│   │   └── board.module.css             # Component-scoped styles (or switch to CSS Modules)
│   ├── tests/
│   │   ├── unit/
│   │   ├── integration/
│   │   └── fixtures/
│   └── utils/
│       └── formatters.ts
├── public/
│   ├── images/
│   └── favicon.ico
├── prisma/                              # Optional: database schema if Prisma is adopted
│   └── schema.prisma
├── docs/
│   ├── PRD_Kanban_Board_App.md
│   └── OPTIMIZED_FILE_STRUCTURE.md
├── .eslintrc.json
├── next.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

## Implementation Notes

1. **Route groups for future areas** – Use route groups such as `(marketing)` or `(dashboard)` to separate public pages from authenticated product surfaces.
2. **Centralized state management** – The `useBoardState` hook can eventually wrap Zustand, Jotai, or React Context while exposing testable pure functions under `src/models/`.
3. **Testing scaffolding** – Even if tests are deferred, the folder layout encourages Playwright for integration flows and Vitest/Jest for unit coverage.
4. **Documentation home** – Move product docs into a `docs/` directory to avoid cluttering the root and to support additional architectural or onboarding notes.
5. **API readiness** – Stubbing the `app/api` routes keeps the project aligned with Next.js conventions when real persistence or integrations arrive.

Adopting this structure keeps the MVP lightweight while laying tracks for a production-ready FlowTrack experience.
