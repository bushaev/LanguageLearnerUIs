import { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, History, StickyNote, Share2, MousePointerClick, PanelRightClose } from 'lucide-react';
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
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const book = books.find(b => b.id === bookId);

  useEffect(() => {
    if (selection.isActive && selection.text) {
      setLoading(true);
      getExplanation(selection.text).then(exp => {
        setExplanation(exp);
        setLoading(false);
      });
    }
  }, [selection]);

  if (!book) return null;

  return (
    <div className="min-h-screen bg-white antialiased flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-zinc-100 bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-screen-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-5 h-5 bg-zinc-900 rounded-[4px] flex items-center justify-center shadow-sm group-hover:bg-zinc-800 transition-colors">
              <span className="text-white text-xs font-bold font-serif italic relative top-[-1px]">L</span>
            </div>
            <span className="text-sm font-medium tracking-tight text-zinc-900">Lexicon</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col lg:flex-row fade-in">
        {/* Left: Text Content Area */}
        <section className="flex-1 h-full overflow-y-auto scroll-smooth">
          <div className="max-w-[680px] mx-auto px-8 py-12 lg:py-20">
            {/* Chapter Header */}
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 rounded text-xs scale-90 origin-left font-medium bg-zinc-100 text-zinc-500 uppercase tracking-wider border border-zinc-200">
                  {book.chapter}
                </span>
                <span className="text-xs text-zinc-300">|</span>
                <span className="text-xs text-zinc-400 font-medium">{book.author}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-serif font-medium tracking-tight text-zinc-900">
                {book.title}
              </h1>
            </div>

            {/* Text Body */}
            <article
              ref={textContainerRef}
              className="font-serif text-lg lg:text-xl leading-[1.8] text-zinc-800 space-y-6 select-text"
            >
              {book.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>

            {/* Navigation Footer */}
            <div className="mt-20 pt-10 border-t border-zinc-100 flex justify-between items-center opacity-60 hover:opacity-100 transition-opacity">
              <button className="text-sm font-medium text-zinc-500 flex items-center gap-2 hover:text-zinc-900 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" />
                Prev
              </button>
              <span className="text-xs text-zinc-300 font-serif italic">1 / {books.length}</span>
              <button className="text-sm font-medium text-zinc-500 flex items-center gap-2 hover:text-zinc-900 transition-colors">
                Next
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Right: Analysis Sidebar */}
        {sidebarVisible && (
          <aside className="w-full lg:w-[380px] bg-zinc-50/80 border-l border-zinc-200 h-[40vh] lg:h-full flex flex-col z-30 shadow-sm backdrop-blur-md">
            {/* Sidebar Header */}
            <div className="h-14 flex items-center justify-between px-5 border-b border-zinc-200 bg-zinc-50/50">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Analysis</span>
              <button
                onClick={() => setSidebarVisible(false)}
                className="p-1.5 rounded-md hover:bg-zinc-200/50 text-zinc-400 hover:text-zinc-700 transition-colors"
              >
                <PanelRightClose className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Empty State */}
            {!explanation && !loading && (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <MousePointerClick className="w-6 h-6 text-zinc-300 mb-3" />
                <p className="text-sm text-zinc-500">Select text to view analysis</p>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center p-8">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-zinc-300 border-t-zinc-900"></div>
              </div>
            )}

            {/* Active Content State */}
            {explanation && !loading && (
              <div className="flex-1 overflow-y-auto p-5 space-y-6 fade-in">
                {/* Selected Word Card */}
                <div className="bg-white rounded-lg p-4 shadow-sm border border-zinc-200/60">
                  <div className="flex justify-between items-start mb-1">
                    <h2 className="text-lg font-serif font-medium text-zinc-900">{explanation.word}</h2>
                    <span className="text-xs scale-90 font-medium text-zinc-400 bg-zinc-50 px-1.5 py-0.5 rounded border border-zinc-100 origin-right">
                      {explanation.type}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed mt-2">{explanation.definition}</p>
                </div>

                {/* Sentiment Analysis */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-900">Sentiment</span>
                    <span className="text-xs scale-90 font-mono text-zinc-400">0.75 POSITIVE</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-emerald-400 w-[75%] rounded-full"></div>
                  </div>
                </div>

                {/* Context Note */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                    <History className="w-3 h-3 text-zinc-400" />
                    <span className="text-xs font-medium text-zinc-900">Contextual Note</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">{explanation.context}</p>
                </div>

                {/* AI Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-zinc-200 rounded-md shadow-sm hover:border-zinc-300 hover:shadow-md transition-all text-xs font-medium text-zinc-700 active:bg-zinc-50">
                    <StickyNote className="w-3.5 h-3.5 text-zinc-400" />
                    Add Note
                  </button>
                  <button className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-zinc-200 rounded-md shadow-sm hover:border-zinc-300 hover:shadow-md transition-all text-xs font-medium text-zinc-700 active:bg-zinc-50">
                    <Share2 className="w-3.5 h-3.5 text-zinc-400" />
                    Share
                  </button>
                </div>
              </div>
            )}
          </aside>
        )}

        {/* Sidebar Toggle (when hidden) */}
        {!sidebarVisible && (
          <button
            onClick={() => setSidebarVisible(true)}
            className="fixed right-4 top-20 p-2 bg-white border border-zinc-200 rounded-md shadow-sm hover:shadow-md transition-all text-zinc-600 hover:text-zinc-900"
          >
            <PanelRightClose className="w-4 h-4 rotate-180" />
          </button>
        )}
      </div>
    </div>
  );
};
