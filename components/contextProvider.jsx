'use client';

import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';

export const notesSetLS = (value) => {
  try {
    localStorage.setItem('notes', value);
  } catch (e) {}
};

export const notesGetLS = () => {
  try {
    const response = localStorage.getItem('notes');
    return response ?? '';
  } catch (e) {
    console.error('Error reading notes from localStorage:', e);
    return '';
  }
};

export const Context = createContext({
  notes: '',
  setNotes: () => {}
});

export default function ContextProvider({ children }) {
  const [notes, setCurrentNotes] = useState('');

  const setNotes = useCallback(
    (value) => {
      const newNotes = typeof value === 'function' ? value(notes) : value;

      setCurrentNotes(newNotes);
      try {
        notesSetLS(newNotes);
      } catch (e) {
        console.log(e);
      }
    },
    [notes]
  );

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key !== 'notes') return;

      if (!event.newValue) {
        setNotes('');
      } else {
        try {
          setCurrentNotes(event.newValue);
        } catch (e) {
          console.log(e);
          setCurrentNotes('');
        }
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [setNotes]);

  const contextProviderValue = useMemo(() => ({ notes, setNotes }), [notes, setNotes]);

  return <Context.Provider value={contextProviderValue}>{children}</Context.Provider>;
}
