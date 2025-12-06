# Language Learning Reader - UI Prototypes

A collection of **6 distinct React-based UI prototypes** for a language learning reading application. Each prototype demonstrates a different design aesthetic while maintaining core functionality: book selection, reading interface, and interactive word/phrase explanations.

## 🎨 Available Designs

### 1. **Zen Reader** (Port 5174)
- **Style**: Minimalist, calm reading environment
- **Inspiration**: Kindle, Apple Books
- **Colors**: Soft beige (#F5F1E8), charcoal text, sage green accents
- **Typography**: Merriweather (serif) + Inter (sans-serif)
- **Layout**: Centered single column with floating tooltip explanations
- **Best for**: Distraction-free, long-form reading

### 2. **Scholar** (Port 5176)
- **Style**: Academic, professional reference platform
- **Inspiration**: Oxford Dictionary, academic journals
- **Colors**: Deep navy (#1E3A5F), cream (#FAF9F6), burgundy accents
- **Typography**: Crimson Text (serif) + Source Sans Pro (sans-serif)
- **Layout**: Two-column book layout with bottom drawer for definitions
- **Best for**: Formal study, research contexts

### 3. **Editorial** (Port 5175)
- **Style**: Modern magazine/Medium aesthetic
- **Inspiration**: Medium, modern digital magazines
- **Colors**: Black/white with emerald green accent (#10B981)
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Layout**: Side-by-side text and glossary panel
- **Best for**: Contemporary, professional content

### 4. **Neon** (Port 5178)
- **Style**: Cyberpunk/futuristic dark mode
- **Inspiration**: Blade Runner, sci-fi interfaces
- **Colors**: Neon cyan (#00F5FF), pink (#FF10F0), green (#39FF14) on dark (#0A0A0F)
- **Typography**: Orbitron (display) + Rajdhani (body)
- **Layout**: Grid backgrounds, scan lines, glowing effects, "NEURAL_DICT" panel
- **Best for**: Gamified learning, tech-savvy audiences

### 5. **Vintage** (Port 5177)
- **Style**: Retro typewriter aesthetic
- **Inspiration**: Classic typewriters, vintage publishing
- **Colors**: Sepia tones, paper texture (#F4E8D0), ink browns
- **Typography**: Special Elite + Courier Prime (monospace)
- **Layout**: Double borders, corner decorations, drop caps
- **Best for**: Classic literature, nostalgic feel

### 6. **Lexicon** (Port 5179)
- **Style**: Clean, minimalist workspace
- **Inspiration**: Modern SaaS tools, design systems
- **Colors**: White/zinc palette, subtle grays
- **Typography**: Inter (sans-serif) + Newsreader (serif)
- **Layout**: Analysis sidebar with sentiment indicators, collapsible panels
- **Best for**: Professional learning tools, data-driven insights

---

## 🚀 Quick Start

### Launch All Apps in Parallel
```bash
chmod +x launch-all.sh
./launch-all.sh
```

Or manually in separate terminals:
```bash
cd zen-reader && npm run dev       # Port 5174
cd scholar && npm run dev          # Port 5176
cd editorial && npm run dev        # Port 5175
cd neon && npm run dev             # Port 5178
cd vintage && npm run dev          # Port 5177
cd lexicon && npm run dev          # Port 5179
```

### Install Dependencies (First Time)
```bash
chmod +x install-all.sh
./install-all.sh
```

Or manually:
```bash
for dir in zen-reader scholar editorial neon vintage lexicon; do
  (cd $dir && npm install)
done
```

---

## 🏗️ Architecture

### Current Structure: **Completely Independent Apps**

Each prototype is a standalone Vite + React application with **no shared code**. This was intentional for rapid prototyping and independent deployment.

```
langteacher_ui/
├── zen-reader/         # Independent app
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookLibrary.jsx      ← Same logic, different styling
│   │   │   └── BookReader.jsx       ← Same logic, different styling
│   │   ├── hooks/
│   │   │   └── useTextSelection.js  ← Identical across all apps
│   │   ├── utils/
│   │   │   ├── mockData.js          ← Same schema, different content
│   │   │   └── mockApi.js           ← 95% identical
│   │   ├── App.jsx                  ← Identical routing
│   │   ├── index.css                ← Design-specific
│   │   └── main.jsx
│   ├── postcss.config.js
│   └── package.json
├── scholar/            # Independent app (same structure)
├── editorial/          # Independent app (same structure)
├── neon/               # Independent app (same structure)
├── vintage/            # Independent app (same structure)
└── lexicon/            # Independent app (same structure)
```

### Pros of Current Architecture
✅ **Easy to develop**: No dependencies, no complex build setup
✅ **Easy to customize**: Change one design without affecting others
✅ **Easy to deploy**: Each app can be deployed independently
✅ **Easy to understand**: Self-contained, no abstract layers

### Cons of Current Architecture
❌ **Code duplication**: Logic is duplicated 6 times
❌ **Maintenance burden**: Bug fixes need to be applied 6 times
❌ **Consistency issues**: Easy for logic to drift apart
❌ **Larger bundle size**: Each app includes the same dependencies

### What's Duplicated?

1. **100% Identical** (literal copy-paste):
   - `useTextSelection.js` - Text selection hook
   - `App.jsx` - Router setup
   - `main.jsx` - React entry point

2. **95% Identical** (minor differences):
   - `mockApi.js` - API simulation logic
   - Component logic in `BookLibrary.jsx` and `BookReader.jsx`

3. **Same Schema, Different Content**:
   - `mockData.js` - Book data structure

4. **Completely Different**:
   - `index.css` - All styling
   - JSX markup - Different HTML structure per design

---

## 🔄 Refactoring Options for Production

Yes, you can **absolutely** abstract the shared logic like in backend programming! Here are the options:

### **Option 1: Monorepo with Shared Packages** ⭐ Recommended

Create a shared package for common logic:

```
langteacher_ui/
├── packages/
│   ├── core/                    # Shared business logic
│   │   ├── hooks/
│   │   │   └── useTextSelection.js
│   │   ├── hooks/
│   │   │   ├── useBookReader.js
│   │   │   └── useExplanation.js
│   │   ├── utils/
│   │   │   └── api.js
│   │   └── types/
│   │       └── index.ts
│   ├── ui-zen/                  # Zen UI components
│   │   └── src/components/
│   ├── ui-scholar/              # Scholar UI components
│   │   └── src/components/
│   └── ui-lexicon/              # etc...
├── apps/
│   ├── zen/
│   ├── scholar/
│   └── ...
└── package.json (pnpm workspace)
```

**How it works:**
```jsx
// In @langteacher/core
export const useBookReader = (bookId) => {
  // All shared logic here
  const [book, setBook] = useState(null);
  const [selection, setSelection] = useState(null);
  // ...
  return { book, selection, explanation, loading };
};

// In zen-reader/src/components/BookReader.jsx
import { useBookReader } from '@langteacher/core';

export const ZenBookReader = () => {
  const { book, selection, explanation } = useBookReader();

  // Only Zen-specific rendering
  return (
    <div className="zen-container">
      <ZenHeader book={book} />
      <ZenText>{book.content}</ZenText>
      <ZenTooltip explanation={explanation} />
    </div>
  );
};
```

**Benefits:**
- Share 70% of code (all business logic)
- Each design is just a "presentation layer"
- Fix bugs once, applies everywhere
- Can still deploy independently

**Tools:** `pnpm workspaces`, `npm workspaces`, or `Turborepo`

---

### **Option 2: Single App with Theme System**

One app that switches between designs:

```jsx
import { ZenTheme, ScholarTheme, LexiconTheme } from './themes';

const THEMES = {
  zen: ZenTheme,
  scholar: ScholarTheme,
  lexicon: LexiconTheme,
};

function App() {
  const [theme, setTheme] = useState('zen');
  const CurrentTheme = THEMES[theme];

  return (
    <>
      <ThemeSelector onChange={setTheme} />
      <CurrentTheme />
    </>
  );
}
```

**Benefits:**
- One codebase, one deployment
- Users can switch themes instantly
- Easiest to maintain

**Challenges:**
- Designs are too different for simple CSS theming
- Would need complete rewrite to make components swappable
- Harder to customize individual designs

**Best for:** When designs are variations on a theme, not completely different layouts

---

### **Option 3: Headless Component Pattern** ⭐⭐ Best Balance

Separate logic (headless) from presentation:

```jsx
// Shared headless logic
export const useBookReaderLogic = (bookId) => {
  const [book, setBook] = useState(null);
  const { selection } = useTextSelection();
  const { explanation, loading } = useExplanation(selection.text);

  return { book, selection, explanation, loading };
};

// Zen implementation
export const ZenBookReader = ({ bookId }) => {
  const logic = useBookReaderLogic(bookId);
  return <ZenUI {...logic} />;
};

// Scholar implementation
export const ScholarBookReader = ({ bookId }) => {
  const logic = useBookReaderLogic(bookId);
  return <ScholarUI {...logic} />;
};
```

**Benefits:**
- Share ALL business logic
- Complete freedom in UI design
- Easy to test logic separately
- Scales well for complex apps

**Inspiration:** Headless UI libraries like Radix UI, React Aria

---

### **Option 4: Component Composition with Slots**

```jsx
<BookReader
  theme="zen"
  HeaderSlot={<ZenHeader />}
  TextSlot={<ZenText />}
  ExplanationSlot={<ZenTooltip />}
/>
```

**Best for:** When designs share layout but differ in components

**Not ideal here:** Our designs have completely different layouts

---

## 💡 My Recommendation

For your use case (letting users choose designs), I'd suggest:

### **Hybrid Approach: Monorepo + Headless**

1. Extract shared logic into `@langteacher/core`
2. Keep each design as a separate package
3. Main app imports and switches between them

```
packages/
├── core/              # useBookReader, useExplanation, etc.
├── ui-zen/
├── ui-scholar/
└── ui-lexicon/

apps/
└── main/              # Theme switcher app
    └── src/
        ├── App.jsx
        └── ThemeSwitcher.jsx
```

```jsx
// apps/main/src/App.jsx
import { ZenReader } from '@langteacher/ui-zen';
import { ScholarReader } from '@langteacher/ui-scholar';

const DESIGNS = {
  zen: ZenReader,
  scholar: ScholarReader,
  lexicon: LexiconReader,
};

function App() {
  const [design, setDesign] = useState('zen');
  const Reader = DESIGNS[design];

  return (
    <>
      <DesignPicker current={design} onChange={setDesign} />
      <Reader />
    </>
  );
}
```

**Why this works:**
- Share 70% of code (all logic)
- Each design is completely independent visually
- Users can switch instantly
- Easy to add new designs
- Easy to maintain

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (with `@theme` directive)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Fonts**: Google Fonts (varies by design)

---

## 📁 File Structure (Each App)

```
app-name/
├── src/
│   ├── components/
│   │   ├── BookLibrary.jsx    # Book selection grid
│   │   └── BookReader.jsx     # Reading + explanation UI
│   ├── hooks/
│   │   └── useTextSelection.js
│   ├── utils/
│   │   ├── mockData.js        # 4 sample books
│   │   └── mockApi.js         # Mock explanations
│   ├── App.jsx                # Router
│   ├── index.css              # Design styles
│   └── main.jsx
├── postcss.config.js
├── package.json
└── vite.config.js
```

---

## 🎯 Core Features (All Apps)

1. **Book Library**: Browse and select books
2. **Reading Interface**: Optimized typography
3. **Text Selection**: Click/drag to select text
4. **Word Explanations**: Definitions, context, examples
5. **Responsive Design**: Works on all devices
6. **Smooth Animations**: Transitions and effects

---

## 📊 Design Comparison

| Feature | Zen | Scholar | Editorial | Neon | Vintage | Lexicon |
|---------|-----|---------|-----------|------|---------|---------|
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Visual Interest | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Professional | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Playful | ⭐ | ⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ |
| Modern | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐ | ⭐⭐⭐⭐⭐ |

---

## 🔧 Development Scripts

See `launch-all.sh` and `install-all.sh` for convenience scripts.

---

---

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Build and deployment" → Source, select **GitHub Actions**

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Automatic deployment**:
   - GitHub Actions will automatically build and deploy all 6 apps
   - Your site will be available at: `https://yourusername.github.io/langteacher_ui/`

### URLs Structure

Once deployed, your apps will be available at:
- **Landing page**: `https://yourusername.github.io/langteacher_ui/`
- **Zen Reader**: `https://yourusername.github.io/langteacher_ui/zen-reader/`
- **Scholar**: `https://yourusername.github.io/langteacher_ui/scholar/`
- **Editorial**: `https://yourusername.github.io/langteacher_ui/editorial/`
- **Neon**: `https://yourusername.github.io/langteacher_ui/neon/`
- **Vintage**: `https://yourusername.github.io/langteacher_ui/vintage/`
- **Lexicon**: `https://yourusername.github.io/langteacher_ui/lexicon/`

### Manual Build & Deploy

You can also build manually:

```bash
# Build all apps
chmod +x build-all.sh
./build-all.sh

# The built files will be in ./dist/
# You can deploy this folder to any static hosting service
```

### How It Works

1. **Vite Configuration**: Each app has a `base` path configured in `vite.config.js`
2. **Build Script**: `build-all.sh` builds all apps and combines them into a single `dist` folder
3. **GitHub Actions**: `.github/workflows/deploy.yml` runs on every push to main
4. **Deployment**: Automatically uploads to GitHub Pages

### Deployment Workflow

The GitHub Actions workflow:
1. Installs Node.js and dependencies for all 6 apps
2. Builds each app with `npm run build`
3. Combines all builds into a single deployment folder
4. Uploads to GitHub Pages
5. Deploys automatically

---

## 📄 License

Prototype for demonstrating UX approaches to language learning applications.
