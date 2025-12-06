import { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, X, Clock } from 'lucide-react';
import { books } from '../utils/mockData';
import { getExplanation } from '../utils/mockApi';
import { useTextSelection } from '../hooks/useTextSelection';

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
      getExplanation(selection.text).then(exp => {
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

  if (!book) return null;

  return (
    <div className="min-h-screen bg-vintage-paper paper-texture">
      {/* Header */}
      <header className="border-b-4 border-double border-vintage-sepia bg-vintage-cream sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-vintage-brown hover:text-vintage-red transition-colors font-serif font-bold border-2 border-vintage-brown hover:border-vintage-red px-4 py-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-typewriter">BACK TO LIBRARY</span>
          </button>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-vintage-sepia" />
            <span className="font-serif text-vintage-sepia">{book.readTime}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Article */}
        <article className="lg:col-span-8">
          <div className="mb-12 pb-8 border-b-4 border-double border-vintage-sepia">
            <div className="text-vintage-sepia font-serif text-sm mb-4 tracking-widest">
              {book.genre.toUpperCase()} • {book.year}
            </div>
            <h1 className="font-typewriter text-5xl font-bold text-vintage-ink typewriter-shadow mb-4">
              {book.title}
            </h1>
            <p className="text-vintage-brown font-serif text-xl italic">
              by {book.author}
            </p>
          </div>

          <div ref={textContainerRef} className="space-y-8 select-text">
            {book.content.map((paragraph, index) => (
              <p key={index} className="font-serif text-xl text-vintage-ink leading-relaxed first-letter:text-5xl first-letter:font-typewriter first-letter:font-bold first-letter:text-vintage-red first-letter:mr-2 first-letter:float-left">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* Dictionary Panel */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32">
            {!explanation && !loading && (
              <div className="border-4 border-double border-vintage-sepia bg-vintage-cream p-8 relative shadow-lg">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-vintage-red" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-vintage-red" />
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <BookOpen className="w-8 h-8 text-vintage-red" />
                  <h2 className="font-typewriter text-2xl text-vintage-red typewriter-shadow">DICTIONARY</h2>
                </div>
                <p className="font-serif text-vintage-brown text-center leading-relaxed">
                  Select any word or phrase from the text to view its translation and meaning...
                </p>
              </div>
            )}

            {loading && (
              <div className="border-4 border-vintage-brown bg-vintage-cream p-8">
                <div className="flex items-center gap-3 text-vintage-brown justify-center">
                  <div className="w-3 h-3 bg-vintage-brown rounded-full animate-pulse" />
                  <span className="font-typewriter text-sm">LOOKING UP...</span>
                </div>
              </div>
            )}

            {explanation && !loading && (
              <div className="border-4 border-double border-vintage-red bg-vintage-cream p-8 relative shadow-xl">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-vintage-ink" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-vintage-ink" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-vintage-ink" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-vintage-ink" />

                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-vintage-brown hover:text-vintage-red transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-8">
                  <h3 className="font-typewriter text-4xl font-bold text-vintage-red typewriter-shadow mb-3">
                    {explanation.word}
                  </h3>
                  <div className="inline-block px-3 py-1 border-2 border-vintage-sepia text-vintage-sepia font-serif italic">
                    {explanation.translation}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-vintage-ink font-typewriter text-sm mb-2 border-b-2 border-vintage-sepia pb-1">
                      DEFINITION:
                    </div>
                    <p className="font-serif text-vintage-brown leading-relaxed">{explanation.definition}</p>
                  </div>

                  <div className="border-l-4 border-vintage-red pl-4">
                    <div className="text-vintage-red font-typewriter text-sm mb-2">
                      IN CONTEXT:
                    </div>
                    <p className="font-serif text-vintage-brown leading-relaxed">{explanation.context}</p>
                  </div>

                  <div className="bg-vintage-paper p-4 border-2 border-vintage-sepia">
                    <div className="text-vintage-sepia font-typewriter text-sm mb-2">
                      EXAMPLE:
                    </div>
                    <p className="font-serif text-vintage-ink italic">"{explanation.example}"</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};
