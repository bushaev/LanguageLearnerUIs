import { useEffect, useState } from 'react';
import { X, Volume2, BookMarked } from 'lucide-react';
import { cn } from '../lib/utils';

export const ExplanationDrawer = ({ open, explanation, onClose }) => {
  const [height, setHeight] = useState('40%');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!explanation) return null;

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 bg-scholar-cream border-t-4 border-scholar-burgundy z-50 transition-transform duration-300 overflow-y-auto",
          open ? "translate-y-0" : "translate-y-full"
        )}
        style={{ height }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Drag Handle */}
          <div className="flex justify-center py-2">
            <div
              className="w-12 h-1 bg-scholar-navy/20 rounded-full cursor-grab active:cursor-grabbing"
              onMouseDown={(e) => {
                const startY = e.clientY;
                const startHeight = parseInt(height);

                const handleMouseMove = (e) => {
                  const deltaY = startY - e.clientY;
                  const newHeight = Math.min(90, Math.max(40, startHeight + (deltaY / window.innerHeight) * 100));
                  setHeight(`${newHeight}%`);
                };

                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            />
          </div>

          {/* Header */}
          <div className="flex items-start justify-between px-6 py-4 border-b-2 border-scholar-burgundy/20">
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h2 className="text-3xl font-serif font-bold text-scholar-navy">
                  {explanation.word}
                </h2>
                <span className="text-sm font-sans text-scholar-navy/60 italic">
                  {explanation.partOfSpeech}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-scholar-navy/70 font-sans">
                  {explanation.pronunciation}
                </p>
                <button className="p-1 hover:bg-scholar-navy/10 rounded transition-colors">
                  <Volume2 className="w-4 h-4 text-scholar-burgundy" />
                </button>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-scholar-navy/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-scholar-navy" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 space-y-6">
            {/* Translation */}
            <div className="bg-white border-2 border-scholar-navy/10 rounded-lg p-4">
              <h3 className="text-sm font-sans font-bold text-scholar-burgundy uppercase tracking-wide mb-2">
                Translation
              </h3>
              <p className="text-xl font-serif text-scholar-navy">
                {explanation.translation}
              </p>
            </div>

            {/* Definitions */}
            <div className="bg-white border-2 border-scholar-navy/10 rounded-lg p-4">
              <h3 className="text-sm font-sans font-bold text-scholar-burgundy uppercase tracking-wide mb-3">
                Definitions
              </h3>
              <ol className="space-y-2">
                {explanation.definitions.map((def, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="font-serif font-bold text-scholar-navy/50 min-w-[1.5rem]">
                      {index + 1}.
                    </span>
                    <span className="font-sans text-scholar-navy leading-relaxed">
                      {def}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Contextual Meaning */}
            <div className="bg-scholar-gold/10 border-2 border-scholar-gold/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <BookMarked className="w-5 h-5 text-scholar-burgundy" />
                <h3 className="text-sm font-sans font-bold text-scholar-burgundy uppercase tracking-wide">
                  In This Context
                </h3>
              </div>
              <p className="font-sans text-scholar-navy leading-relaxed">
                {explanation.contextualMeaning}
              </p>
            </div>

            {/* Example Usage */}
            <div className="bg-white border-2 border-scholar-navy/10 rounded-lg p-4">
              <h3 className="text-sm font-sans font-bold text-scholar-burgundy uppercase tracking-wide mb-3">
                Example Usage
              </h3>
              <blockquote className="border-l-4 border-scholar-burgundy pl-4 py-2 bg-scholar-navy/5">
                <p className="font-serif italic text-scholar-navy text-lg leading-relaxed">
                  "{explanation.exampleUsage}"
                </p>
              </blockquote>
            </div>

            {/* Etymology */}
            {explanation.etymology && (
              <div className="bg-white border-2 border-scholar-navy/10 rounded-lg p-4">
                <h3 className="text-sm font-sans font-bold text-scholar-burgundy uppercase tracking-wide mb-2">
                  Etymology
                </h3>
                <p className="font-sans text-sm text-scholar-navy/70 leading-relaxed">
                  {explanation.etymology}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
