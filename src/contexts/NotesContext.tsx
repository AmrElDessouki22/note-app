'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Note } from '@/types';

interface NotesContextType {
  notes: Note[];
  addNote: (note: Note) => void;
  removeNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const removeNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
