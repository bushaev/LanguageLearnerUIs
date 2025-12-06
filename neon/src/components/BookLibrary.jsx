import { useNavigate } from 'react-router-dom';
import { Zap, Terminal } from 'lucide-react';
import { books } from '../utils/mockData';

export const BookLibrary = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neon-dark relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(var(--color-neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--color-neon-cyan) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Scan Line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-line w-full h-0.5 bg-neon-cyan opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Zap className="w-12 h-12 text-neon-cyan neon-glow" />
            <h1 className="font-display text-7xl font-black text-neon-cyan neon-glow tracking-wider">
              NEON
            </h1>
          </div>
          <p className="text-neon-pink font-body text-xl tracking-wide neon-glow">
            CYBER LANGUAGE MATRIX
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-neon-green text-sm font-body">
            <Terminal className="w-4 h-4" />
            <span className="font-mono">SYSTEM_READY :: LOADING_BOOKS...</span>
          </div>
        </header>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div
              key={book.id}
              onClick={() => navigate(`/book/${book.id}`)}
              className="group cursor-pointer bg-neon-darker border-2 border-neon-cyan/30 hover:border-neon-pink transition-all duration-300 p-6 relative overflow-hidden"
              style={{
                boxShadow: '0 0 20px rgba(0, 245, 255, 0.1)'
              }}
            >
              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-neon-green" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-neon-green" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-neon-green" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-neon-green" />

              <div className="relative z-10">
                <div className="text-neon-cyan font-mono text-xs mb-2">
                  [{String(index + 1).padStart(2, '0')}] :: {book.genre.toUpperCase()}
                </div>

                <h3 className="font-display text-2xl font-bold text-neon-pink mb-3 group-hover:text-neon-cyan transition-colors neon-glow">
                  {book.title}
                </h3>

                <p className="text-neon-gray font-body text-sm mb-4">
                  By {book.author}
                </p>

                <p className="text-neon-cyan/70 font-body text-sm leading-relaxed mb-4 line-clamp-3">
                  {book.excerpt}
                </p>

                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-gradient-to-r from-neon-pink via-neon-cyan to-transparent" />
                  <span className="text-neon-green font-mono text-xs">
                    {book.readTime}
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-block px-4 py-2 border border-neon-green/50 text-neon-green font-mono text-xs">
            © 2077 NEON_LEARNING_SYSTEMS
          </div>
        </div>
      </div>
    </div>
  );
};
