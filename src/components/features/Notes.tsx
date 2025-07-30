'use client';

import React, { useState } from 'react';
import Note from './Note';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  return (
    <div className="p-4">
      <div className="flex mb-4">
        <Input value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="Add a new note" />
        <Button onClick={addNote}>Add</Button>
      </div>
      <div>
        {notes.map((note, index) => (
          <Note key={index} content={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
