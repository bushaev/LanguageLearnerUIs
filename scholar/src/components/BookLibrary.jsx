import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Search, Filter } from 'lucide-react';
import { books } from '../utils/mockData';

export const BookLibrary = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const genres = ['all', ...new Set(books.map(b => b.genre))];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
    const matchesDifficulty = selectedDifficulty === 'all' || book.difficulty === selectedDifficulty;
    return matchesSearch && matchesGenre && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-scholar-cream">
      {/* Header */}
      <header className="bg-scholar-navy text-scholar-cream border-b-4 border-scholar-burgundy">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-2">
            <BookOpen className="w-10 h-10 text-scholar-gold" />
            <h1 className="text-5xl font-serif font-bold">The Scholar</h1>
          </div>
          <p className="text-lg text-scholar-cream/80 font-sans ml-14">
            Academic Reference Library for Language Learning
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white border-2 border-scholar-navy/10 rounded-lg p-6 sticky top-8">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-scholar-burgundy/20">
                <Filter className="w-5 h-5 text-scholar-burgundy" />
                <h2 className="text-xl font-serif font-bold text-scholar-navy">Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-sans font-semibold text-scholar-navy mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-scholar-navy/40" />
                  <input
                    type="text"
                    placeholder="Title or author..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border-2 border-scholar-navy/20 rounded font-sans text-sm focus:outline-none focus:border-scholar-burgundy"
                  />
                </div>
              </div>

              {/* Genre Filter */}
              <div className="mb-6">
                <label className="block text-sm font-sans font-semibold text-scholar-navy mb-2">
                  Genre
                </label>
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-scholar-navy/20 rounded font-sans text-sm focus:outline-none focus:border-scholar-burgundy"
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre}>
                      {genre.charAt(0).toUpperCase() + genre.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-sans font-semibold text-scholar-navy mb-2">
                  Difficulty Level
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-scholar-navy/20 rounded font-sans text-sm focus:outline-none focus:border-scholar-burgundy"
                >
                  {difficulties.map(diff => (
                    <option key={diff} value={diff}>
                      {diff}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          {/* Book List */}
          <main className="md:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-serif font-bold text-scholar-navy mb-2">
                Available Texts
              </h2>
              <p className="text-scholar-navy/60 font-sans">
                {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} found
              </p>
            </div>

            <div className="space-y-4">
              {filteredBooks.map(book => (
                <div
                  key={book.id}
                  onClick={() => navigate(`/book/${book.id}`)}
                  className="bg-white border-2 border-scholar-navy/10 rounded-lg p-6 cursor-pointer transition-all duration-200 hover:border-scholar-burgundy hover:shadow-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-8">
                      <h3 className="text-2xl font-serif font-bold text-scholar-navy mb-2">
                        {book.title}
                      </h3>
                      <p className="text-scholar-navy/70 font-sans mb-3">
                        by {book.author} • {book.year}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-scholar-navy/5 border border-scholar-navy/20 rounded text-xs font-sans font-semibold text-scholar-navy">
                          {book.genre}
                        </span>
                        <span className={`px-3 py-1 rounded text-xs font-sans font-semibold ${
                          book.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 border border-green-200' :
                          book.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                          'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                          {book.difficulty}
                        </span>
                        <span className="px-3 py-1 bg-scholar-burgundy/10 border border-scholar-burgundy/30 rounded text-xs font-sans font-semibold text-scholar-burgundy">
                          {book.wordCount} words
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-4 flex items-center justify-end">
                      <button className="px-6 py-3 bg-scholar-burgundy text-scholar-cream font-sans font-semibold rounded hover:bg-scholar-burgundy/90 transition-colors">
                        Read Text →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredBooks.length === 0 && (
              <div className="text-center py-16 bg-white border-2 border-scholar-navy/10 rounded-lg">
                <p className="text-scholar-navy/60 font-sans text-lg">
                  No books match your current filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedGenre('all');
                    setSelectedDifficulty('all');
                  }}
                  className="mt-4 px-6 py-2 bg-scholar-navy text-scholar-cream font-sans rounded hover:bg-scholar-navy/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
