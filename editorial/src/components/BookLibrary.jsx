import { useNavigate } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { books } from '../utils/mockData';

export const BookLibrary = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-editorial-white">
      {/* Header */}
      <header className="border-b-2 border-editorial-black py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl font-black text-editorial-black tracking-tight">
            EDITORIAL
          </h1>
          <p className="mt-2 text-editorial-gray font-body text-lg">
            A curated collection of language learning stories
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Story */}
        {books[0] && (
          <article
            onClick={() => navigate(`/book/${books[0].id}`)}
            className="mb-20 cursor-pointer group border-b-2 border-editorial-black pb-16"
          >
            <span className="inline-block px-3 py-1 bg-editorial-accent text-white text-xs font-body font-semibold uppercase tracking-wider mb-6">
              Featured
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-editorial-black mb-4 group-hover:text-editorial-accent transition-colors">
              {books[0].title}
            </h2>
            <div className="flex items-center gap-4 text-editorial-gray font-body mb-6">
              <span className="text-sm">By {books[0].author}</span>
              <span className="text-sm">·</span>
              <span className="flex items-center gap-1 text-sm">
                <Clock className="w-4 h-4" />
                {books[0].readTime}
              </span>
            </div>
            <p className="text-xl font-body text-editorial-gray leading-relaxed max-w-3xl mb-8">
              {books[0].excerpt}
            </p>
            <button className="flex items-center gap-2 text-editorial-black font-body font-semibold group-hover:text-editorial-accent transition-colors">
              Read Story
              <ArrowRight className="w-5 h-5" />
            </button>
          </article>
        )}

        {/* Other Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {books.slice(1).map((book) => (
            <article
              key={book.id}
              onClick={() => navigate(`/book/${book.id}`)}
              className="cursor-pointer group border-b border-editorial-gray/30 pb-8 hover:border-editorial-accent transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-editorial-accent">
                  {book.genre}
                </span>
                <span className="text-xs text-editorial-gray">·</span>
                <span className="flex items-center gap-1 text-editorial-gray text-xs">
                  <Clock className="w-3 h-3" />
                  {book.readTime}
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-bold text-editorial-black mb-3 group-hover:text-editorial-accent transition-colors">
                {book.title}
              </h3>

              <p className="text-sm text-editorial-gray font-body mb-4">
                By {book.author}
              </p>

              <p className="text-editorial-gray font-body leading-relaxed mb-6">
                {book.excerpt}
              </p>

              <button className="flex items-center gap-2 text-editorial-black font-body font-medium group-hover:text-editorial-accent transition-colors">
                Continue Reading
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-editorial-black mt-24 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-editorial-gray font-body text-sm">
            © 2024 Editorial. Expand your vocabulary through curated stories.
          </p>
        </div>
      </footer>
    </div>
  );
};
