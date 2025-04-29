import React, { useEffect, useState } from 'react';
import { getNotes } from '../utils/storage'; // Create this utility

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  return (
    <div className="p-4">
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map((note, index) => (
          <div key={index} className="p-4 border rounded mb-4">
            <h3 className="font-bold">{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;

// Why useEffect to sync storage → state: useEffect ensures notes are loaded from localStorage only once when the component mounts.