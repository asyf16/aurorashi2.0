'use client';

import * as React from 'react';
import { createContext, useState, useEffect, useCallback, useMemo } from 'react';

const isServer = typeof window === 'undefined';

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
        return "";
    }
};

export const Context = createContext<{
    notes: string;
    setNotes: (value: string) => void; 
}>({
    notes: '',
    setNotes: () => {}, 
});

export default function ContextProvider({ children }: { children: React.ReactNode }) {
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
        const handleStorage = (event: StorageEvent) => {
            if (event.key !== 'notes') {
                return;
            }
            if (!event.newValue) {
                setNotes('');
            } else {
                try {
                    const result = event.newValue;
                    setCurrentNotes(result);
                } catch (e) {
                    console.log(e);
                    setCurrentNotes('');
                }
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, [setNotes]);

    const contextProviderValue = useMemo(
        () => ({
            notes,
            setNotes
        }),
        [notes, setNotes]
    );

    return <Context.Provider value={contextProviderValue}>{children}</Context.Provider>;
}
