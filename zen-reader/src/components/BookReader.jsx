import { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { books } from '../utils/mockData';
import { getExplanation } from '../utils/mockApi';
import { useTextSelection } from '../hooks/useTextSelection';
import { ExplanationPopup } from './ExplanationPopup';

export const BookReader = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const textContainerRef = useRef(null);
  const { selection, clearSelection } = useTextSelection(textContainerRef);
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [theme, setTheme] = useState('light');

  const book = books.find(b => b.id === bookId);

  useEffect(() => {
    if (selection.isActive && selection.text) {
      setLoading(true);
      getExplanation(selection.text)
        .then(exp => {
          setExplanation(exp);
          setLoading(false);
        });
    } else {
      setExplanation(null);
    }
  }, [selection]);

  const handleClose = () => {
    clearSelection();
    setExplanation(null);
  };

  if (!book) {
    return (
      <div className="min-h-screen bg-zen-bg flex items-center justify-center">
        <div className="text-center">
          <p className="text-zen-text/60 font-sans mb-4">Book not found</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-zen-accent text-white rounded-lg font-sans hover:bg-zen-accent/80 transition-colors"
          >
            Back to Library
          </button>
        </div>
      </div>
    );
  }

  const themeStyles = theme === 'dark'
    ? 'bg-[#1a1a1a] text-[#e8e6e1]'
    : theme === 'sepia'
    ? 'bg-[#f4ecd8] text-[#3a3a2a]'
    : 'bg-zen-bg text-zen-text';

  return (
    <div className={`min-h-screen ${themeStyles} transition-colors duration-300`}>
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-zen-accent/10 z-30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-zen-text/60 hover:text-zen-text transition-colors font-sans flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Library
          </button>

          <h1 className="text-lg font-serif text-zen-text truncate mx-4">
            {book.title}
          </h1>

          <div className="flex items-center gap-3">
            {/* Font Size Controls */}
            <div className="flex items-center gap-1 bg-zen-bg/50 rounded-lg p-1">
              <button
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                className="px-2 py-1 text-zen-text/60 hover:text-zen-text font-sans text-sm"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                className="px-2 py-1 text-zen-text/60 hover:text-zen-text font-sans text-sm"
              >
                A+
              </button>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center gap-1 bg-zen-bg/50 rounded-lg p-1">
              <button
                onClick={() => setTheme('light')}
                className={`px-2 py-1 rounded ${theme === 'light' ? 'bg-white' : ''} text-zen-text/60 hover:text-zen-text transition-colors`}
                title="Light"
              >
                ☀️
              </button>
              <button
                onClick={() => setTheme('sepia')}
                className={`px-2 py-1 rounded ${theme === 'sepia' ? 'bg-white' : ''} text-zen-text/60 hover:text-zen-text transition-colors`}
                title="Sepia"
              >
                📖
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`px-2 py-1 rounded ${theme === 'dark' ? 'bg-white' : ''} text-zen-text/60 hover:text-zen-text transition-colors`}
                title="Dark"
              >
                🌙
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Reading Content */}
      <main className="max-w-reading mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-serif font-light mb-2">
            {book.title}
          </h2>
          <p className="text-lg opacity-70 font-sans">
            by {book.author}
          </p>
        </div>

        <article
          ref={textContainerRef}
          className="space-y-6 select-text"
          style={{ fontSize: `${fontSize}px`, lineHeight: '1.8' }}
        >
          {book.content.map((paragraph, index) => (
            <p key={index} className="font-serif leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {loading && selection.isActive && (
          <div className="fixed bottom-8 right-8 bg-white rounded-lg shadow-lg px-4 py-2 font-sans text-zen-text">
            Loading explanation...
          </div>
        )}
      </main>

      <ExplanationPopup
        selection={selection}
        explanation={explanation}
        onClose={handleClose}
      />
    </div>
  );
};
