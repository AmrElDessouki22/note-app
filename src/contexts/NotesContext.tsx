"use client";

import { createContext, useState } from 'react';
import { Note } from '../types';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

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
  const [inputValue, setInputValue] = useState('');

  const addNote = (text: string) => {
    const newNote: Note = { id: Date.now(), text };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    addNote(inputValue);
    setInputValue('');
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      <div style={{ color: 'black' }}>
        <Input value={inputValue} onChange={handleInputChange} />
        <Button onClick={handleAddNote}>Add Note</Button>
      </div>
      {children}
    </NotesContext.Provider>
  );
};
