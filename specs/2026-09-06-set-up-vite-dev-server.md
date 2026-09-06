# Set Up Vite Dev Server

## Scope

The application fails to run when `index.html` is opened directly via `file://` because browsers block `fetch` on that protocol (CORS). This phase sets up a Vite dev server so the app runs correctly through HTTP.

Following Vite's manual installation approach (no framework scaffolding, keeping the existing plain HTML/JS structure):

- Initialise a `package.json` via npm
- Install Vite as a dev dependency
- Add a `dev` script to run the Vite dev server (`vite`)
- Add a `.gitignore` to exclude `node_modules/` from version control

The app will be served at `http://localhost:5173` via `npm run dev`. No framework, plugins, or build output changes required yet.

## Build Plan

**For each step in the build plan commit the code before completing the next step.**

### Step 1
Initialise `package.json` with npm (`npm init -y`).

### Step 2
Install Vite as a dev dependency (`npm install -D vite`).

### Step 3
Add the `dev` script (`"dev": "vite"`) to `package.json`.

### Step 4
Add a `.gitignore` containing `node_modules/`.

### Step 5
Commit the setup.
