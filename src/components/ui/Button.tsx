"use client";

import { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<string[]>([]);

  const handleClick = () => {
    setNotes(prevNotes => [...prevNotes, note]);
    setNote('');
  };

  return (
    <div>
      <input 
        value={note} 
        onChange={(e) => setNote(e.target.value)} 
        className="input" 
        style={{ color: 'black' }} 
      />
      <button onClick={handleClick} className="btn">
        {children}
      </button>
      <ul>
        {notes.map((note, index) => (
          <li key={index} style={{ color: 'black' }}>
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Button;
