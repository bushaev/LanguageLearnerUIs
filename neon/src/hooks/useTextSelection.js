import { useState, useEffect, useCallback } from 'react';

export const useTextSelection = (containerRef) => {
  const [selection, setSelection] = useState({
    text: '',
    rect: null,
    isActive: false
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
          height: rect.height
        },
        isActive: true
      });
    }
  }, [containerRef]);

  const clearSelection = useCallback(() => {
    setSelection({
      text: '',
      rect: null,
      isActive: false
    });
    window.getSelection()?.removeAllRanges();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mouseup', handleSelection);

    return () => {
      container.removeEventListener('mouseup', handleSelection);
    };
  }, [containerRef, handleSelection]);

  return { selection, clearSelection };
};
