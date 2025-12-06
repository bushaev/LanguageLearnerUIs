import { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Languages } from 'lucide-react';
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
      <div className="min-h-screen bg-editorial-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-editorial-gray font-body mb-4">Story not found</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-editorial-black text-editorial-white font-body font-semibold hover:bg-editorial-accent transition-colors"
          >
            Back to Library
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-editorial-white">
      {/* Header */}
      <header className="border-b-2 border-editorial-black sticky top-0 bg-editorial-white z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-editorial-black hover:text-editorial-accent transition-colors font-body font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Library
          </button>

          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-editorial-accent" />
            <span className="font-body text-sm text-editorial-gray">
              {book.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 py-12">
        {/* Article Content */}
        <article className="lg:col-span-7">
          {/* Title Section */}
          <div className="mb-12 pb-12 border-b-2 border-editorial-black">
            <span className="inline-block px-3 py-1 bg-editorial-accent text-white text-xs font-body font-semibold uppercase tracking-wider mb-6">
              {book.genre}
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black text-editorial-black mb-6 leading-tight">
              {book.title}
            </h1>
            <div className="flex items-center gap-4 text-editorial-gray font-body">
              <span>By {book.author}</span>
              <span>·</span>
              <span>{book.readTime}</span>
            </div>
          </div>

          {/* Story Text */}
          <div
            ref={textContainerRef}
            className="space-y-8 select-text"
          >
            {book.content.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-lg md:text-xl leading-relaxed text-editorial-black"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* End Mark */}
          <div className="mt-16 pt-8 border-t border-editorial-gray/30 text-center">
            <div className="w-12 h-0.5 bg-editorial-accent mx-auto" />
          </div>
        </article>

        {/* Glossary Sidebar */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            {!explanation && (
              <div className="bg-editorial-black text-editorial-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Languages className="w-6 h-6 text-editorial-accent" />
                  <h2 className="font-display text-2xl font-bold">Glossary</h2>
                </div>
                <p className="font-body text-sm text-editorial-white/70 leading-relaxed">
                  Select any word or phrase in the text to see its definition, translation, and contextual meaning.
                </p>
              </div>
            )}

            {loading && (
              <div className="bg-editorial-black text-editorial-white p-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-editorial-accent rounded-full animate-pulse" />
                  <span className="font-body text-sm">Loading definition...</span>
                </div>
              </div>
            )}

            {explanation && !loading && (
              <div className="bg-editorial-black text-editorial-white p-8 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-editorial-white/60 hover:text-editorial-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="mb-6">
                  <h3 className="font-display text-4xl font-bold text-editorial-white mb-2">
                    {explanation.word}
                  </h3>
                  <span className="inline-block px-2 py-1 bg-editorial-accent text-white text-xs font-body font-semibold">
                    {explanation.translation}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-body text-xs uppercase tracking-wider text-editorial-accent mb-2 font-semibold">
                      Definition
                    </h4>
                    <p className="font-body text-editorial-white/90 leading-relaxed">
                      {explanation.definition}
                    </p>
                  </div>

                  <div className="border-l-2 border-editorial-accent pl-4">
                    <h4 className="font-body text-xs uppercase tracking-wider text-editorial-accent mb-2 font-semibold">
                      In This Context
                    </h4>
                    <p className="font-body text-editorial-white/90 leading-relaxed">
                      {explanation.context}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-body text-xs uppercase tracking-wider text-editorial-accent mb-2 font-semibold">
                      Example
                    </h4>
                    <p className="font-body text-editorial-white/80 italic leading-relaxed">
                      "{explanation.example}"
                    </p>
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
