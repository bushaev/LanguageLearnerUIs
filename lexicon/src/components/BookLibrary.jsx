import { useNavigate } from 'react-router-dom';
import { Book, Languages, Sparkles } from 'lucide-react';
import { books } from '../utils/mockData';

export const BookLibrary = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white antialiased flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-zinc-100 bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-screen-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 bg-zinc-900 rounded-[4px] flex items-center justify-center shadow-sm group-hover:bg-zinc-800 transition-colors">
              <span className="text-white text-xs font-bold font-serif italic relative top-[-1px]">L</span>
            </div>
            <span className="text-sm font-medium tracking-tight text-zinc-900">Lexicon</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative w-full h-full flex flex-col items-center justify-center p-6 fade-in">
        <div className="w-full max-w-4xl space-y-12">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-medium tracking-tight text-zinc-900">Deep reading workspace</h1>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Select a book to analyze linguistics, etymology, and context in real-time.
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {books.map((book) => (
              <div
                key={book.id}
                onClick={() => navigate(`/book/${book.id}`)}
                className="group relative rounded-xl border border-zinc-200 hover:border-zinc-400 bg-white hover:bg-zinc-50 transition-all duration-300 p-6 cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs scale-90 origin-left font-medium bg-zinc-100 text-zinc-500 uppercase tracking-wider border border-zinc-200">
                      {book.chapter}
                    </span>
                    <span className="text-xs text-zinc-300">|</span>
                    <span className="text-xs text-zinc-400 font-medium">{book.author}</span>
                  </div>

                  <h3 className="text-xl font-serif font-medium tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">
                    {book.title}
                  </h3>

                  <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
                    {book.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
                    <span className="text-xs text-zinc-400 font-medium">{book.readTime}</span>
                    <div className="flex items-center gap-1 text-zinc-300 group-hover:text-zinc-600 transition-colors">
                      <span className="text-xs font-medium">Read</span>
                      <span className="text-xs">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Features */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-50">
            <div className="flex flex-col items-center gap-2 group">
              <Book className="w-4 h-4 text-zinc-300 group-hover:text-zinc-600 transition-colors" strokeWidth={1.5} />
              <span className="text-xs text-zinc-400 scale-90 font-medium">Serif</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <Languages className="w-4 h-4 text-zinc-300 group-hover:text-zinc-600 transition-colors" strokeWidth={1.5} />
              <span className="text-xs text-zinc-400 scale-90 font-medium">Define</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <Sparkles className="w-4 h-4 text-zinc-300 group-hover:text-zinc-600 transition-colors" strokeWidth={1.5} />
              <span className="text-xs text-zinc-400 scale-90 font-medium">AI Note</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
