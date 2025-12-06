# Vibrant Hub

An energetic, playful language learning platform inspired by Duolingo and modern educational apps. Designed to make learning feel fun and engaging through bold colors, gamification, and smooth animations.

## Design Philosophy

Vibrant Hub creates an exciting, motivating learning experience with:
- Bold gradient backgrounds (purple #6B46C1 to pink #EC4899)
- Bright, colorful UI with white cards
- Rounded sans-serif typography (Poppins/Nunito)
- Asymmetric, dynamic layouts
- Bouncy transitions and scale effects

## Features

### Book Library
- Colorful card carousel with vibrant gradient book covers
- Each book has its own unique color theme
- Category tags with pills/chips
- Large, prominent "Start Reading" buttons
- Animated card hover effects with scale and elevation

### Reading Interface
- Sidebar layout: text on left (60%), stats panel on right (40%)
- Right panel displays:
  - Reading progress bar
  - Vocabulary statistics
  - Learning streak counter
  - Recent achievements
- Clean, readable text area
- Smooth animations powered by Framer Motion

### Word Explanation Drawer
- **Position**: Slides in from right side
- **Appearance**: Full-height panel with gradient header
- **Content**:
  - Word with phonetic pronunciation
  - Translation with language indicator
  - Contextual meaning in colored card
  - Example usage in separate card
  - "Add to Vocabulary" button
- **Interaction**: Spring animation on slide-in, close button in top-right

## Tech Stack

- **Framework**: React with Vite
- **UI Library**: Material-UI (MUI) v5
- **Animations**: Framer Motion
- **Routing**: React Router
- **Fonts**: Google Fonts (Poppins, Nunito)

## Getting Started

1. Navigate to the project directory:
   ```bash
   cd vibrant-hub
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

1. Browse colorful book cards on the home page
2. Search for books using the search bar
3. Click "Start Reading" on any book to begin
4. While reading:
   - View your progress and stats in the right sidebar (desktop)
   - Select any word or phrase to open the explanation drawer
   - Track your learning streak and words learned
   - See recent achievements
   - Click back arrow to return to library

## Project Structure

```
vibrant-hub/
├── src/
│   ├── components/
│   │   ├── BookLibrary.jsx        # Colorful card grid
│   │   ├── BookReader.jsx         # Split layout reader
│   │   └── ExplanationDrawer.jsx  # Side drawer explanation
│   ├── hooks/
│   │   └── useTextSelection.js    # Text selection logic
│   ├── utils/
│   │   ├── mockData.js           # Sample books with color themes
│   │   └── mockApi.js            # Mock backend responses
│   ├── theme/
│   │   └── theme.js              # MUI custom theme
│   ├── App.jsx                    # Main app with routing & theme
│   └── main.jsx                   # App entry point
└── package.json
```

## Gamification Elements

- **Learning Streak**: Track consecutive days of reading
- **Words Learned**: Counter for vocabulary expansion
- **Achievements**: Unlock badges for milestones
- **Progress Tracking**: Visual progress bars
- **Colorful Feedback**: Positive reinforcement through vibrant UI

## Future Enhancements

- Backend integration for real LLM-powered explanations
- Expanded gamification (XP points, levels, leaderboards)
- More achievement types and badges
- Vocabulary flashcard review system
- Social features (share progress with friends)
- Multiple language support
