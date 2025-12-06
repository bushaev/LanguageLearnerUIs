import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock } from 'lucide-react';
import { books } from '../utils/mockData';

export const BookLibrary = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-vintage-paper paper-texture">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <header className="mb-16 text-center border-b-4 border-double border-vintage-sepia pb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-vintage-sepia" />
            <BookOpen className="w-12 h-12 text-vintage-red" />
            <div className="w-16 h-0.5 bg-vintage-sepia" />
          </div>
          <h1 className="font-typewriter text-6xl font-bold text-vintage-ink typewriter-shadow mb-4">
            VINTAGE LIBRARY
          </h1>
          <p className="font-serif text-vintage-sepia text-lg tracking-widest">
            ~ A Collection of Timeless Tales ~
          </p>
        </header>

        {/* Books List */}
        <div className="space-y-8">
          {books.map((book, index) => (
            <div
              key={book.id}
              onClick={() => navigate(`/book/${book.id}`)}
              className="group cursor-pointer bg-vintage-cream border-2 border-vintage-brown hover:border-vintage-red transition-all duration-300 p-8 shadow-lg hover:shadow-xl relative"
              style={{
                boxShadow: '4px 4px 0px rgba(92, 64, 51, 0.2)',
              }}
            >
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-vintage-sepia" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-vintage-sepia" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-vintage-sepia" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-vintage-sepia" />

              <div className="flex items-start gap-8">
                {/* Book Number */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 border-2 border-vintage-sepia bg-vintage-paper flex items-center justify-center">
                    <span className="font-typewriter text-3xl text-vintage-red typewriter-shadow">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Book Info */}
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 border border-vintage-sepia text-vintage-sepia font-serif text-xs tracking-wider mb-2">
                      {book.genre.toUpperCase()} • {book.year}
                    </span>
                  </div>

                  <h3 className="font-typewriter text-3xl font-bold text-vintage-ink mb-2 group-hover:text-vintage-red transition-colors typewriter-shadow">
                    {book.title}
                  </h3>

                  <p className="text-vintage-sepia font-serif text-lg mb-4 italic">
                    by {book.author}
                  </p>

                  <p className="text-vintage-brown font-serif leading-relaxed mb-4">
                    {book.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-vintage-sepia">
                    <Clock className="w-4 h-4" />
                    <span className="font-serif text-sm">{book.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Vintage stamp effect on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-24 h-24 border-4 border-vintage-red/30 rounded-full flex items-center justify-center rotate-12">
                  <span className="font-typewriter text-vintage-red/40 text-xs">READ</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-block border-t-2 border-b-2 border-vintage-sepia py-2 px-8">
            <p className="font-serif text-vintage-sepia text-sm tracking-widest">
              EST. 1892 • VINTAGE READING COLLECTION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
