# Zen Reader

A minimalist language learning reading application inspired by Kindle and Apple Books. Focused on creating a distraction-free, calm reading environment with an emphasis on typography and white space.

## Design Philosophy

Zen Reader provides a peaceful, mindful reading experience with:
- Soft beige background (#F5F1E8) and charcoal text (#2D2D2D)
- Muted sage green accents (#8B9A7E)
- Serif fonts for body text (Merriweather) and sans-serif for UI (Inter)
- Centered single-column layout with generous margins
- Subtle fade-in animations and gentle transitions

## Features

### Book Library
- Grid view of book cards with text-only covers (Penguin Classics style)
- Search functionality for books by title or author
- Hover effects with elevation and shadows

### Reading Interface
- Single-column text optimized for readability (max-width 65ch)
- Sticky header with book title and progress
- Reading settings: font size adjustment and theme toggle (light/sepia/dark)
- Smooth text selection for word lookups

### Word Explanation Popup
- **Position**: Floating tooltip above selected text
- **Content**: Word/phrase, translation (Spanish), contextual meaning, example usage
- **Interaction**: Fades in on selection, click outside to dismiss

## Tech Stack

- **Framework**: React with Vite
- **Styling**: Tailwind CSS with custom theme
- **Routing**: React Router
- **Fonts**: Google Fonts (Merriweather, Inter)

## Getting Started

1. Navigate to the project directory:
   ```bash
   cd zen-reader
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

## Usage

1. Browse the book library on the home page
2. Use the search bar to filter books by title or author
3. Click on any book card to start reading
4. While reading:
   - Select any word or phrase to see its explanation
   - Adjust font size using A-/A+ buttons
   - Switch between light, sepia, and dark themes
   - Click "Library" to return to the book selection

## Project Structure

```
zen-reader/
├── src/
│   ├── components/
│   │   ├── BookLibrary.jsx       # Book selection grid
│   │   ├── BookReader.jsx        # Reading interface
│   │   └── ExplanationPopup.jsx  # Word explanation tooltip
│   ├── hooks/
│   │   └── useTextSelection.js   # Text selection logic
│   ├── utils/
│   │   ├── mockData.js          # Sample books
│   │   └── mockApi.js           # Mock backend responses
│   ├── App.jsx                   # Main app with routing
│   ├── index.css                 # Tailwind imports & styles
│   └── main.jsx                  # App entry point
├── tailwind.config.js
└── package.json
```

## Future Enhancements

- Backend integration for real LLM-powered explanations
- User accounts and reading progress tracking
- Bookmarks and notes functionality
- More language options for translations
- Offline reading support
