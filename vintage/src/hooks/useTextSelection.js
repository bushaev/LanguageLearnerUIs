import { useState, useEffect, useCallback } from 'react';

export const useTextSelection = (containerRef) => {
  const [selection, setSelection] = useState({
    text: '',
    rect: null,
    isActive: false,
  });

  const handleSelection = useCallback(() => {
    const selectedText = window.getSelection();
    const text = selectedText.toString().trim();

    if (text && containerRef.current?.contains(selectedText.anchorNode)) {
      const range = selectedText.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setSelection({
        text,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        },
        isActive: true,
      });
    } else if (!text) {
      setSelection({
        text: '',
        rect: null,
        isActive: false,
      });
    }
  }, [containerRef]);

  const clearSelection = useCallback(() => {
    window.getSelection()?.removeAllRanges();
    setSelection({
      text: '',
      rect: null,
      isActive: false,
    });
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, [handleSelection]);

  return { selection, clearSelection };
};
