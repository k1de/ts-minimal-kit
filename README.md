# ts-minimal-kit

Minimal TypeScript kit: strict typing, clean setup, ready to code.

## Project Structure

```
ts-minimal-kit/
├── src/
│   └── app.ts         # Main application file
├── dist/              # Compiled files (created automatically)
├── .gitignore         # Ignored files
├── package.json       # Project settings and dependencies
├── tsconfig.json      # TypeScript configuration
└── README.md          # This file
```

## How to Use This Kit

### 🎯 Method 1: GitHub Template (Recommended)

1. Click the **"Use this template"** button on the [repository page](https://github.com/k1de/ts-minimal-kit)
2. Create a new repository based on the kit
3. Clone your new repository:
    ```bash
    git clone https://github.com/your-username/your-project.git
    cd your-project
    ```

### 📦 Method 2: degit (recommended for quick setup)

```bash
npx degit k1de/ts-minimal-kit my-project
cd my-project
```

_If degit fails, use Method 3 (Git clone) as fallback._

### 🔄 Method 3: Git clone + Initialize new repository

```bash
git clone https://github.com/k1de/ts-minimal-kit.git my-project
cd my-project
npm run degit    # Remove git history
git init         # Initialize new repository
```

### 📥 Method 4: Download ZIP

1. Download ZIP archive from [GitHub](https://github.com/k1de/ts-minimal-kit/archive/refs/heads/main.zip)
2. Extract to desired folder
3. Rename folder to your project name

## Quick Start

**Setup:**

-   **Install dependencies:** `npm install`

**Development:**

-   **Watch and compile:** `npm run dev`
-   **Build:** `npm run build`
-   **Run:** `npm run start`
-   **Build and run:** `npm run build:start`

**Utilities:**

-   **Clean:** `npm run clean`
-   **Remove git history:** `npm run degit`

## TypeScript Update

**Recommendation:** Update TypeScript to the latest version:

```bash
npm install typescript@latest -D
```

This will install the current stable version of TypeScript in your project and write it to package.json.

**Check current version:**

```bash
npx tsc --version
```

## TypeScript Settings

-   Strict typing enabled
-   Source maps for debugging
-   Declaration files for libraries
-   Modern ESNext features
-   CommonJS modules support

## License

ISC © tish
