'use client';

import React from 'react';

const Note: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="bg-white p-2 rounded shadow mb-2">
      {content}
    </div>
  );
};

export default Note;
