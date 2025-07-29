'use client';

import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;