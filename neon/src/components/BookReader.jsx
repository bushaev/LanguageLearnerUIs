import { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Cpu, Zap } from 'lucide-react';
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
    <div className="min-h-screen bg-neon-dark relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(var(--color-neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--color-neon-cyan) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b-2 border-neon-cyan/30 bg-neon-darker/80 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-neon-cyan hover:text-neon-pink transition-colors font-body font-semibold neon-border px-4 py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono">BACK</span>
            </button>

            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-neon-green neon-glow" />
              <span className="font-mono text-neon-green text-sm">{book.readTime}</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article */}
          <article className="lg:col-span-8">
            <div className="mb-12 pb-8 border-b-2 border-neon-pink/30">
              <div className="text-neon-green font-mono text-sm mb-4">
                [{book.genre.toUpperCase()}] :: LOADING_CONTENT...
              </div>
              <h1 className="font-display text-5xl font-black text-neon-cyan neon-glow mb-4">
                {book.title}
              </h1>
              <p className="text-neon-pink font-body text-lg">
                By {book.author}
              </p>
            </div>

            <div ref={textContainerRef} className="space-y-6 select-text">
              {book.content.map((paragraph, index) => (
                <p key={index} className="font-body text-lg text-neon-cyan/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Glossary Panel */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              {!explanation && !loading && (
                <div className="border-2 border-neon-purple/50 bg-neon-darker/80 p-6 relative">
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-neon-green" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-neon-green" />
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-neon-purple neon-glow" />
                    <h2 className="font-display text-xl text-neon-purple">NEURAL_DICT</h2>
                  </div>
                  <p className="font-body text-sm text-neon-gray">
                    Select any text to initialize translation protocol...
                  </p>
                </div>
              )}

              {loading && (
                <div className="border-2 border-neon-cyan bg-neon-darker p-6">
                  <div className="flex items-center gap-3 text-neon-cyan">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse neon-glow" />
                    <span className="font-mono text-sm">PROCESSING...</span>
                  </div>
                </div>
              )}

              {explanation && !loading && (
                <div className="border-2 border-neon-pink bg-neon-darker p-6 relative">
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-neon-cyan" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-neon-cyan" />

                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-neon-cyan/60 hover:text-neon-pink transition-colors"
                  >
                    <span className="font-mono text-xs">[X]</span>
                  </button>

                  <div className="mb-6">
                    <h3 className="font-display text-3xl font-bold text-neon-pink neon-glow mb-2">
                      {explanation.word}
                    </h3>
                    <div className="inline-block px-2 py-1 border border-neon-cyan text-neon-cyan font-mono text-xs">
                      {explanation.translation}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-neon-green font-mono text-xs mb-1">&gt; DEFINITION</div>
                      <p className="font-body text-neon-cyan/90 text-sm">{explanation.definition}</p>
                    </div>

                    <div className="border-l-2 border-neon-pink pl-4">
                      <div className="text-neon-pink font-mono text-xs mb-1">&gt; CONTEXT</div>
                      <p className="font-body text-neon-cyan/90 text-sm">{explanation.context}</p>
                    </div>

                    <div>
                      <div className="text-neon-purple font-mono text-xs mb-1">&gt; EXAMPLE</div>
                      <p className="font-body text-neon-gray text-sm italic">"{explanation.example}"</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
