"use client";

import { useState } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  const [note, setNote] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const handleButtonClick = () => {
    onClick(note);
    setNote('');
  };

  return (
    <div>
      <input
        type="text"
        value={note}
        onChange={handleInputChange}
        placeholder="Enter note"
      />
      <button onClick={handleButtonClick} className="btn">
        {children}
      </button>
    </div>
  );
};

export default Button;
