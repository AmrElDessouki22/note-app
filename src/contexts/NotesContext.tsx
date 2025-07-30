'use client';

import React, { createContext, useContext, useState } from 'react';
import { Note } from '@/types';

interface NotesContextType {
  notes: Note[];
  addNote: (content: string) => void;
  removeNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (content: string) => {
    const newNote: Note = { id: Date.now().toString(), content, createdAt: new Date() };
    setNotes([...notes, newNote]);
  };

  const removeNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): NotesContextType => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
