# AGENT GUIDELINES FOR `my-project`

This document outlines the conventions and guidelines for agentic coding within the `my-project` repository. Adhering to these guidelines ensures consistency, maintainability, and high code quality.

## 1. Build, Lint, and Test Commands

This project uses Next.js, React, and TypeScript. The primary package manager is `npm`.

### General Commands:
- **Install Dependencies**: `npm install`
- **Start Development Server**: `npm run dev` or `next dev`
- **Build for Production**: `npm run build` or `next build`
- **Start Production Server**: `npm run start` or `next start`
- **Lint Code**: `npm run lint` or `eslint .`

### Testing:
There isn't an explicit test script defined in `package.json`. For testing React components in a Next.js/TypeScript project, it is highly recommended to use **Jest** or **Vitest** with **React Testing Library**.

#### Recommended Testing Setup (if not already configured):
1.  **Install Testing Dependencies**:
    ```bash
    npm install --save-dev jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom
    # or for Vitest
    npm install --save-dev vitest @vitest/ui @testing-library/react @testing-library/jest-dom
    ```
2.  **Configure Jest/Vitest**: Create `jest.config.js` or `vitest.config.ts` as per official documentation.

#### Running Tests (assuming Jest/Vitest setup):
- **Run All Tests**: `npx jest` (for Jest) or `npx vitest` (for Vitest)
- **Run a Single Test File**: `npx jest path/to/your/test.test.ts` (for Jest) or `npx vitest path/to/your/test.test.ts` (for Vitest)
- **Run Tests in Watch Mode**: `npx jest --watch` or `npx vitest --watch`

## 2. Code Style Guidelines

### General Principles:
-   **Readability**: Prioritize clear, concise, and easily understandable code.
-   **Consistency**: Maintain consistent patterns, naming, and formatting across the entire codebase.
-   **Maintainability**: Write code that is easy to modify, extend, and debug.

### TypeScript and Typing:
-   The `tsconfig.json` enforces strict type checking (`"strict": true`). Always aim for explicit types where possible.
-   Avoid using `any` unless absolutely necessary (e.g., for third-party libraries without proper type definitions).
-   Use interfaces or types for complex object structures.

### Imports:
-   **Ordering**:
    1.  Third-party libraries (e.g., `react`, `next`, `lodash`)
    2.  Absolute imports using path aliases (e.g., `@/components`, `@/lib`)
    3.  Relative imports (e.g., `../utils`, `./styles`)
-   **Path Aliases**: Use the `@/` alias for imports relative to the project root (`"paths": { "@/": ["./*"] }` in `tsconfig.json`).

### Formatting:
-   **Indentation**: 2 spaces (soft tabs).
-   **Semicolons**: Always use semicolons at the end of statements.
-   **Quotes**: Use double quotes for strings.
-   **Trailing Commas**: Use trailing commas for multi-line arrays, objects, and function parameters.
-   **Line Length**: Aim for a maximum of 100-120 characters per line for better readability.

### Naming Conventions:
-   **Components, Interfaces/Types**: `PascalCase` (e.g., `UserProfileCard`, `IUserData`).
-   **Hooks, Functions, Variables**: `camelCase` (e.g., `useAuth`, `fetchUserData`, `userName`).
-   **Global Constants**: `SCREAMING_SNAKE_CASE` (e.g., `API_BASE_URL`, `DEFAULT_TIMEOUT`).
-   **Files**: `kebab-case` for component files (e.g., `user-profile-card.tsx`), `camelCase` for utility files (e.g., `authUtils.ts`).

### Error Handling:
-   Use `try...catch` blocks for asynchronous operations and API calls.
-   Provide clear and informative error messages to the user.
-   Log errors appropriately for debugging.
-   Utilize `zod` for schema validation, ensuring data integrity and providing descriptive validation errors.

### Styling:
-   This project uses **Tailwind CSS** with **PostCSS**. Adhere to the utility-first approach.
-   Avoid inline styles unless absolutely necessary for dynamic values.
-   Group related Tailwind classes for readability.

## 3. Cursor/Copilot Rules

No specific `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md` files were found in this repository. Therefore, no additional AI-specific guidelines are enforced beyond these general coding standards.