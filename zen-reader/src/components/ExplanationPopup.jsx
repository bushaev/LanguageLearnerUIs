import { useEffect, useState } from 'react';

export const ExplanationPopup = ({ selection, explanation, onClose }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selection.rect) {
      const popupWidth = 320;
      const popupHeight = 280;
      const padding = 10;

      let top = selection.rect.top + window.scrollY - popupHeight - padding;
      let left = selection.rect.left + window.scrollX + (selection.rect.width / 2) - (popupWidth / 2);

      // Adjust if popup goes off screen top
      if (top < window.scrollY) {
        top = selection.rect.top + window.scrollY + selection.rect.height + padding;
      }

      // Adjust if popup goes off screen left/right
      if (left < 0) left = padding;
      if (left + popupWidth > window.innerWidth) {
        left = window.innerWidth - popupWidth - padding;
      }

      setPosition({ top, left });
      setIsVisible(true);
    }
  }, [selection]);

  if (!selection.isActive || !explanation) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div
        className={`fixed z-50 w-80 bg-white rounded-lg shadow-2xl p-6 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`
        }}
      >
        <div className="mb-4">
          <h3 className="text-xl font-serif font-bold text-zen-text mb-1">
            {explanation.word}
          </h3>
          <p className="text-sm text-zen-text/60 font-sans">
            {explanation.translation}
          </p>
        </div>

        <div className="border-t border-zen-accent/20 pt-4 mb-4">
          <h4 className="text-sm font-sans font-semibold text-zen-text mb-2">
            Meaning in context:
          </h4>
          <p className="text-sm text-zen-text/80 font-sans leading-relaxed">
            {explanation.contextualMeaning}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-sans font-semibold text-zen-text mb-2">
            Example usage:
          </h4>
          <p className="text-sm text-zen-text/70 font-sans italic leading-relaxed">
            "{explanation.exampleUsage}"
          </p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-zen-text/40 hover:text-zen-text transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </>
  );
};
