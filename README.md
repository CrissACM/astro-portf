# Cristobal Colmenares — Portfolio

A static, Astro-first portfolio showcasing professional experience, selected projects, technical skills, and education. The interface is built with Astro components and Tailwind CSS, with small native browser scripts for theme switching, navigation, project filtering, and accessible dialogs.

## Requirements

- [Bun](https://bun.sh/) 1.3.14 or newer
- Node.js 22.12 or newer for Astro tooling compatibility

## Development

```sh
bun install
bun run dev
```

The local site is available at `http://localhost:4321`.

## Commands

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run build` | Type-check and create the production build |
| `bun run preview` | Preview the production build |
| `bun run astro -- check` | Run Astro diagnostics |

## Project structure

```text
src/
├── assets/       # Images processed by Astro
├── components/   # Astro UI components
├── data/         # Typed portfolio content
├── layouts/      # Shared document layout and metadata
├── pages/        # File-based routes
└── styles/       # Tailwind entry point
```

The site is statically generated and does not require a server adapter.
