'use client';

import React from 'react';
import { Note } from '@/types';
import Button from '../ui/Button';
import { useNotes } from '@/contexts/NotesContext';

const NoteItem: React.FC<{ note: Note }> = ({ note }) => {
  const { deleteNote } = useNotes();

  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span>{note.content}</span>
      <Button onClick={() => deleteNote(note.id)}>Delete</Button>
    </li>
  );
};

export default NoteItem;