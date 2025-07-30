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
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
};

export default Button;
