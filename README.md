# FlowTrack Kanban MVP

FlowTrack is a lightweight kanban board inspired by Trello. This repository contains the minimum viable product (MVP) foundation built with Next.js 14 and TypeScript.

## Getting Started

### Prerequisites
- Node.js 20.x
- npm 10.x

### Installation
```bash
npm install
```

### Available Scripts
- `npm run dev` – start the development server.
- `npm run lint` – run the ESLint suite using the Next.js configuration.
- `npm run type-check` – execute the TypeScript compiler in no-emission mode.
- `npm run build` – create a production build of the application.
- `npm run start` – launch the production build locally.
- `npm run format` – format supported files with Prettier.

## Continuous Integration
A GitHub Actions workflow (`.github/workflows/ci.yml`) installs dependencies, runs linting, type-checking, and build verification on every push or pull request targeting `main`.

## Project Documentation
- [Product Requirements Document](./PRD_Kanban_Board_App.md)
- [Optimized File Structure Guidelines](./OPTIMIZED_FILE_STRUCTURE.md)
- [Implementation Roadmap](./IMPLEMENTATION_TODO.md)

## License
This project is currently proprietary and not licensed for external distribution.
