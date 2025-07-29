"use client";

import { createContext, useState } from 'react';
import { Note } from '../types';

interface NotesContextProps {
  notes: Note[];
  addNote: (text: string) => void;
}

export const NotesContext = createContext<NotesContextProps>({
  notes: [],
  addNote: () => {},
});

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    const newNote: Note = { id: Date.now(), text };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};
