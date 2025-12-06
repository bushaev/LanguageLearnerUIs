# The Scholar

A professional, academic language learning platform inspired by digital libraries and Oxford dictionary. Designed to provide a trustworthy, information-dense reading experience with emphasis on clarity and scholarly presentation.

## Design Philosophy

The Scholar creates a serious, academic learning environment with:
- Deep navy (#1E3A5F), cream (#FAF9F6), and burgundy (#8B2E2E) color palette
- Classic serif typography (Crimson Text) for headings, clean sans-serif (Source Sans Pro) for body
- Two-column traditional book layout on desktop
- Minimal, professional transitions
- Dictionary-style information architecture

## Features

### Book Library
- Table/list view with comprehensive book metadata
  - Author, genre, difficulty level, word count, year
- Advanced filters sidebar:
  - Search by title or author
  - Filter by genre
  - Filter by difficulty level
- Detailed book cards with metadata badges
- Library aesthetic with professional styling

### Reading Interface
- Two-column text layout (like an open book) on desktop
- Single column on mobile for optimal readability
- Sticky header with navigation
- Breadcrumb navigation showing current location
- Reading progress indicators
- Bookmark functionality (UI ready)
- Chapter navigation support

### Word Explanation Drawer
- **Position**: Bottom drawer that slides up (mobile-first approach)
- **Appearance**: Structured panel with dictionary-style sections
- **Content**:
  - Word with part of speech and pronunciation
  - Translation to Spanish
  - Numbered definitions (dictionary format)
  - "In This Context" highlighted section
  - Example sentences in quote blocks
  - Etymology and additional notes
  - Audio pronunciation button (UI ready)
- **Interaction**: Slides up 40% of screen, drag handle to expand to 90%

## Tech Stack

- **Framework**: React with Vite
- **Styling**: Tailwind CSS with custom academic theme
- **UI Components**: Custom components built with shadcn/ui patterns
- **Icons**: Lucide React
- **Routing**: React Router
- **Fonts**: Google Fonts (Crimson Text, Source Sans Pro)

## Getting Started

1. Navigate to the project directory:
   ```bash
   cd scholar
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

1. Browse the library with the detailed list view
2. Use filters to narrow down books by:
   - Search terms (title/author)
   - Genre category
   - Difficulty level
3. Click "Read Text" on any book to begin
4. While reading:
   - View text in two-column layout (desktop) or single column (mobile)
   - Select any word or phrase to open dictionary drawer
   - Drag the drawer handle to expand or collapse
   - Use breadcrumbs for navigation
   - Track reading progress
   - Click bookmark button to save your place

## Project Structure

```
scholar/
├── src/
│   ├── components/
│   │   ├── BookLibrary.jsx        # List view with filters
│   │   ├── BookReader.jsx         # Two-column reader
│   │   └── ExplanationDrawer.jsx  # Bottom drawer dictionary
│   ├── hooks/
│   │   └── useTextSelection.js    # Text selection logic
│   ├── utils/
│   │   ├── mockData.js           # Sample books with metadata
│   │   └── mockApi.js            # Mock dictionary responses
│   ├── lib/
│   │   └── utils.js              # Helper functions (cn)
│   ├── App.jsx                    # Main app with routing
│   ├── index.css                  # Tailwind imports & theme
│   └── main.jsx                   # App entry point
├── tailwind.config.js
└── package.json
```

## Academic Features

- **Dictionary-Style Definitions**: Multiple numbered definitions for each word
- **Etymology Information**: Word origins and historical context
- **Part of Speech Indicators**: Grammatical classification
- **Contextual Analysis**: Meaning specific to the passage
- **Pronunciation Guide**: IPA phonetic transcription
- **Example Sentences**: Real-world usage examples
- **Metadata Rich**: Comprehensive book information

## Future Enhancements

- Backend integration for comprehensive dictionary API
- Notes and annotation system
- Bibliography and citation tools
- Advanced search with Boolean operators
- Bookmarks sync across devices
- Reading history and analytics
- Export notes and highlights
- Multiple dictionary sources
- Academic writing assistant
