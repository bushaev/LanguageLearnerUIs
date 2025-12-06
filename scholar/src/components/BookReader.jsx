import { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Bookmark } from 'lucide-react';
import { books } from '../utils/mockData';
import { getExplanation } from '../utils/mockApi';
import { useTextSelection } from '../hooks/useTextSelection';
import { ExplanationDrawer } from './ExplanationDrawer';

export const BookReader = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const textContainerRef = useRef(null);
  const { selection, clearSelection } = useTextSelection(textContainerRef);
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(false);

  const book = books.find(b => b.id === bookId);

  useEffect(() => {
    if (selection.isActive && selection.text) {
      setLoading(true);
      getExplanation(selection.text)
        .then(exp => {
          setExplanation(exp);
          setLoading(false);
        });
    }
  }, [selection]);

  const handleClose = () => {
    clearSelection();
    setExplanation(null);
  };

  if (!book) {
    return (
      <div className="min-h-screen bg-scholar-cream flex items-center justify-center">
        <div className="text-center bg-white border-2 border-scholar-navy/10 rounded-lg p-8">
          <p className="text-scholar-navy/60 font-sans mb-4">Text not found</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-scholar-burgundy text-scholar-cream rounded font-sans font-semibold hover:bg-scholar-burgundy/90 transition-colors"
          >
            Return to Library
          </button>
        </div>
      </div>
    );
  }

  // Split content into two columns for desktop view
  const midPoint = Math.ceil(book.content.length / 2);
  const leftColumn = book.content.slice(0, midPoint);
  const rightColumn = book.content.slice(midPoint);

  return (
    <div className="min-h-screen bg-scholar-cream">
      {/* Header */}
      <header className="bg-scholar-navy text-scholar-cream border-b-4 border-scholar-burgundy sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-scholar-cream/80 hover:text-scholar-cream transition-colors font-sans"
            >
              <ArrowLeft className="w-5 h-5" />
              Library
            </button>

            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-scholar-gold" />
              <div>
                <h1 className="text-lg font-serif font-bold">
                  {book.title}
                </h1>
                <p className="text-xs text-scholar-cream/70">
                  {book.author}
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-scholar-burgundy rounded hover:bg-scholar-burgundy/90 transition-colors">
              <Bookmark className="w-4 h-4" />
              <span className="font-sans text-sm font-semibold">Bookmark</span>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 border-b border-scholar-navy/10">
        <nav className="flex items-center gap-2 text-sm font-sans text-scholar-navy/60">
          <span className="cursor-pointer hover:text-scholar-navy">Library</span>
          <span>/</span>
          <span className="cursor-pointer hover:text-scholar-navy">{book.genre}</span>
          <span>/</span>
          <span className="text-scholar-navy font-semibold">{book.title}</span>
        </nav>
      </div>

      {/* Reading Area */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white border-2 border-scholar-navy/10 rounded-lg p-8 md:p-12 shadow-sm">
          {/* Book Title */}
          <div className="text-center mb-12 pb-8 border-b-2 border-scholar-burgundy/20">
            <h2 className="text-4xl font-serif font-bold text-scholar-navy mb-3">
              {book.title}
            </h2>
            <p className="text-xl font-sans text-scholar-navy/70 mb-2">
              by {book.author}
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-scholar-navy/60">
              <span className="font-sans">{book.year}</span>
              <span>•</span>
              <span className="font-sans">{book.genre}</span>
              <span>•</span>
              <span className="font-sans">{book.difficulty}</span>
            </div>
          </div>

          {/* Text Content - Two Column Layout on Desktop */}
          <div
            ref={textContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 select-text"
          >
            {/* Left Column */}
            <article className="space-y-6">
              {leftColumn.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-serif text-lg leading-loose text-scholar-navy text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Right Column */}
            <article className="space-y-6">
              {rightColumn.map((paragraph, index) => (
                <p
                  key={index + midPoint}
                  className="font-serif text-lg leading-loose text-scholar-navy text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          </div>

          {/* Reading Progress */}
          <div className="mt-12 pt-8 border-t-2 border-scholar-burgundy/20">
            <div className="flex items-center justify-between text-sm font-sans text-scholar-navy/60">
              <span>Chapter 1</span>
              <span>Reading Progress: 45%</span>
              <span>Page 1 of 3</span>
            </div>
          </div>
        </div>
      </main>

      {/* Loading Indicator */}
      {loading && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-scholar-navy text-scholar-cream px-6 py-3 rounded-lg shadow-lg font-sans text-sm">
          Loading definition...
        </div>
      )}

      <ExplanationDrawer
        open={selection.isActive && explanation !== null}
        explanation={explanation}
        onClose={handleClose}
      />
    </div>
  );
};
