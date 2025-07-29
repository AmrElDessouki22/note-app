'use client';

import React from 'react';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <h1 className="text-xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;