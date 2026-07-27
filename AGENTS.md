# Repository Guidelines

This file applies to the entire repository.

## Project Overview

- This is an Angular 22 workspace containing the publishable `ngx-repeat` library and a demo application.
- Library source lives in `projects/ngx-repeat/src`; its public entry point is
  `projects/ngx-repeat/src/public-api.ts`.
- Demo source lives in `projects/demo/src`.
- Repository automation lives in `scripts`, `.github/actions`, and `.github/workflows`.

## Toolchain

- Use the Node.js version declared in `.nvmrc`. Run `nvm install` and `nvm use` before project commands.
- Use Bun; the exact package-manager version is declared in `package.json`.
- Install dependencies with `bun ci`.
- Do not use npm or Yarn to modify dependencies or generate a lockfile.

## Common Commands

- Start the demo: `bun run start`
- Lint the workspace: `bun run lint`
- Check circular dependencies: `bun run check-circular-dependencies`
- Test the library: `bun run test ngx-repeat`
- Test the demo: `bun run test demo`
- Build the library: `bun run build`
- Build the demo: `bun run build:demo`
- Synchronize package metadata and the library README: `bun run script:sync-projects`

Run the narrowest relevant checks while developing. Before handing off a source change, run lint and the
affected tests. For packaging or public API changes, also build the library. Documentation-only changes do not
require a build unless they change executable examples or project commands.

## TypeScript and Angular Conventions

- Follow the repository Prettier and ESLint configurations. TypeScript and Angular templates are strict.
- Prefer inferred types when they are obvious. Avoid `any`; use `unknown` and narrow it when a value is uncertain.
- Use standalone Angular APIs, `inject()`, signals for local state, and `computed()` for derived state.
- In Angular 22, standalone is the default; do not add `standalone: true` to new decorators.
- Use `ChangeDetectionStrategy.OnPush` for components.
- Prefer `input()` and `output()` over decorator-based inputs and outputs.
- Use native template control flow (`@if`, `@for`, and `@switch`) for ordinary iteration and conditionals. Preserve
  `*ngxRepeat` where the demo or tests intentionally exercise this library.
- Put host bindings and listeners in the decorator's `host` object rather than using `@HostBinding` or
  `@HostListener`.
- Keep templates accessible and satisfy the configured Angular template accessibility rules.
- Library selectors use the `ngx` prefix; demo selectors use the `app` prefix.

## Public API and Tests

- Keep library implementation in `projects/ngx-repeat/src/lib`; do not make it depend on the demo.
- Export every intended public symbol through `projects/ngx-repeat/src/public-api.ts`.
- Preserve the `ngxRepeat` selector, microsyntax context, and public API compatibility unless a breaking change is
  explicitly requested.
- Preserve compatibility with the Angular peer dependency range in `projects/ngx-repeat/package.json`.
- Place tests beside their source files as `*.spec.ts`. Tests use Vitest through Angular's unit-test builder.
- Add or update tests for behavior changes and regressions; assert rendered output and public behavior rather than
  implementation details.
- Cover count changes and context values (`index`, `first`, `last`, `even`, and `odd`) when those behaviors change.

## Generated and Synchronized Files

- Do not manually edit or commit `projects/demo/src/environments/version.ts`; `scripts/create-version.ts`
  generates it during `postinstall`.
- Do not edit or commit generated build output under `dist` or coverage output under `coverage`.
- The root `README.md` is copied to `projects/ngx-repeat/README.md` by `bun run script:sync-projects`. Update the root
  documentation first when installation, behavior, compatibility, or the public API changes.
- Use the existing synchronization script for package versions and publish metadata instead of duplicating manual
  edits.
- Do not run release, version, publish, or vulnerability-fix scripts unless the task explicitly requests them.

## Change Hygiene

- Inspect `git status` before editing and preserve unrelated or already-staged user changes.
- Keep changes scoped to the request.
- Follow the Angular commit convention configured in `.commitlintrc.json`, using an allowed type such as `feat`,
  `fix`, `docs`, `refactor`, `style`, or `chore`.
- Do not change package versions, changelogs, tags, or release artifacts unless explicitly requested.
- Before handoff, run `git diff --check` and report the validation commands that were executed.
