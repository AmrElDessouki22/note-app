"use client";

import { useState, useContext } from 'react';
import { NotesContext } from '../../contexts/NotesContext';
import Button from '../ui/Button';
import Input from '../ui/Input';

const NewNoteForm = () => {
  const [noteText, setNoteText] = useState('');
  const [newNote, setNewNote] = useState('');
  const { addNote } = useContext(NotesContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteText(e.target.value);
  };

  const handleNewNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote(e.target.value);
  };

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      addNote(noteText);
      setNoteText('');
    }
  };

  const handleAddNewNote = () => {
    if (newNote.trim() !== '') {
      addNote(newNote);
      setNewNote('');
    }
  };

  return (
    <div className="new-note-form">
      <Input value={noteText} onChange={handleInputChange} placeholder="Enter a new note" />
      <Button onClick={handleAddNote}>Add Note</Button>
      <Input value={newNote} onChange={handleNewNoteChange} placeholder="Enter another new note" />
      <Button onClick={handleAddNewNote}>Add Another Note</Button>
    </div>
  );
};

export default NewNoteForm;
