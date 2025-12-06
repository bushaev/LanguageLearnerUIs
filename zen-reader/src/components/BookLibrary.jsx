import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { books } from '../utils/mockData';

export const BookLibrary = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zen-bg py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-serif font-light text-zen-text mb-4">
            Zen Reader
          </h1>
          <p className="text-lg text-zen-text/70 font-sans">
            Immerse yourself in mindful reading
          </p>
        </header>

        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 bg-white border-2 border-zen-accent/20 rounded-lg font-sans text-zen-text placeholder-zen-text/40 focus:outline-none focus:border-zen-accent transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map(book => (
            <div
              key={book.id}
              onClick={() => navigate(`/book/${book.id}`)}
              className="bg-white rounded-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-zen-accent/10"
            >
              <div
                className="w-full h-48 rounded mb-6 flex items-center justify-center"
                style={{ backgroundColor: book.coverColor }}
              >
                <span className="text-white text-2xl font-serif text-center px-4">
                  {book.title}
                </span>
              </div>
              <h2 className="text-xl font-serif text-zen-text mb-2">
                {book.title}
              </h2>
              <p className="text-zen-text/60 font-sans mb-1">
                by {book.author}
              </p>
              <p className="text-sm text-zen-accent font-sans">
                {book.genre}
              </p>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zen-text/60 font-sans text-lg">
              No books found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
