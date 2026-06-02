# Santhosh Naik - AI & Software Developer Portfolio

A modern, animated, and fully responsive developer portfolio built for **Santhosh Naik**, a Computer Science student and AI/Software Developer. Designed with sleek glassmorphism, dynamic scrolling behaviors, ambient lighting, and interactive physics-based particle backgrounds.

#To Run This project Locaally using CMD
1. run this Command in CMD
   npm run dev
2. open This link in your broweser
   http://localhost:5173/
## 🚀 Features

- **Dark & Light Mode Toggle**: Adaptive theme context storing preference in localStorage.
- **Role Typewriter Animation**: Custom, lightweight typing loop cycling through developer titles.
- **Ambient Cursor Glow**: Fixed radial gradient spotlight tracking mouse positions behind active cards (disabled on mobile).
- **Interactive Particle Matrix**: Responsive canvas-based particle network that responds to mouse coordinates.
- **Top Scroll Progress Indicator**: Top-docked progress bar tracking reading depth.
- **3D Card Hover Rotation**: Physics-simulated tilt movements on project grids without external library footprints.
- **Active Navigation Tracking**: Auto-spying active viewport coordinates to highlight corresponding navbar tabs.
- **Futuristic AI Loader**: Real-time numerical compiler logs and percentages before fading into the DOM.
- **Fully Validated Contact form**: Instant state-driven syntactic inspections with success notifications.
- **Rigorous SEO Framework**: Meta headers, keywords, OpenGraph specifications, and hierarchy structures.

---

## 🛠️ Tech Stack & Key Dependencies

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion v12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Directory Structure

```text
Projects Site/
├── public/
│   ├── favicon.svg             # Favicon
│   └── profile.png             # Professional profile avatar
├── src/
│   ├── components/
│   │   ├── About.jsx           # Core summary & key expertise cards
│   │   ├── Certifications.jsx  # Credentials cards with glow hover
│   │   ├── Contact.jsx         # Dual-column contact cards & validated form
│   │   ├── CursorGlow.jsx      # Ambient radial mouse tracker
│   │   ├── Experience.jsx      # Chronological timeline & scroll indicator
│   │   ├── Footer.jsx          # Copyright footer & links
│   │   ├── Hero.jsx            # Interactive typing intro & actions
│   │   ├── LoadingScreen.jsx   # Numerical loader intro
│   │   ├── Navbar.jsx          # Floating glass menu with mobile drawer
│   │   ├── ParticleBackground.jsx # Physics-linked node network canvas
│   │   ├── Projects.jsx        # Project filters, 3D tilt, & stats panels
│   │   └── ScrollProgress.jsx  # Top horizontal scroll indicator
│   ├── hooks/
│   │   └── useDarkMode.js      # Global dark/light state hook
│   ├── App.jsx                 # Orchestrator & loading states
│   ├── index.css               # Tailwind imports, fonts, & global keyframes
│   └── main.jsx                # Main entry point
├── eslint.config.js
├── index.html                  # SEO headtags, fonts, & metadata
├── package.json
└── vite.config.js              # Vite configs with Tailwind v4 compiler plugins
```

---

## 💻 Local Setup & Development

### 1. Prerequisite
Ensure you have **Node.js** (v20+ or v22.12+ recommended) and **npm** installed.

### 2. Install Dependencies
Clone or open the project folder in your terminal, then install packages:
```bash
npm install
```

### 3. Start Development Server
Launch the local dev server at `http://localhost:5173`:
```bash
npm run dev
```

### 4. Create Production Build
Compile static files into the `dist/` directory:
```bash
npm run build
```

---

## 🌐 Deployment Instructions

### ⚡ Option A: Deploy to Vercel

Vercel provides native integration with Vite projects for continuous deployment.

#### Method 1: Vercel CLI (Quickest)
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment command in the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts:
   - *Set up and deploy?* **Yes**
   - *Which scope?* **[Your Account]**
   - *Link to existing project?* **No**
   - *Project Name:* **santhosh-naik-portfolio**
   - *Directory:* **./**
   - *Want to modify settings?* **No** (Vercel automatically detects Vite configuration)
4. For production release:
   ```bash
   vercel --prod
   ```

#### Method 2: Vercel Dashboard (Git Connected)
1. Push your project files to a GitHub repository.
2. Log in to the [Vercel Dashboard](https://vercel.com).
3. Click **Add New** > **Project**.
4. Import your git repository.
5. Vercel will automatically configure the build parameters:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**.

---

### 🟢 Option B: Deploy to Netlify

Netlify is another excellent hosting solution with automated build triggers.

#### Method 1: Netlify CLI
1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```
2. Authenticate CLI:
   ```bash
   netlify login
   ```
3. Initialize site and deploy:
   ```bash
   netlify init
   ```
4. Set build configurations:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Run production build and release:
   ```bash
   netlify deploy --prod
   ```

#### Method 2: Netlify Dashboard (Git Connected)
1. Push your project files to GitHub.
2. Log in to [Netlify App](https://app.netlify.com).
3. Click **Add new site** > **Import an existing project**.
4. Choose GitHub, authorize access, and select your repository.
5. Set deployment options:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy [Site Name]**.
