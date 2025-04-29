import React, { useEffect, useState } from 'react';
import { getNotes, deleteNote, } from '../utils/storage';
import Card from './Card';
import Modal from './Modal';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null); // Note to display in modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleCardClick = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    const index = notes.indexOf(selectedNote);
    deleteNote(index);
    setNotes(getNotes());
    setIsModalOpen(false);
  };

  const handleUpdate = () => {
    // Logic for updating the note can be added here
    alert('Update functionality not implemented yet!');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {notes.length === 0 ? (
        <p className="text-gray-500 text-center">No notes available. Add some notes to get started!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <Card
              key={index}
              title={note.title}
              content={note.content}
              onClick={() => handleCardClick(note)} // Pass note to modal
            />
          ))}
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        note={selectedNote}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default NotesList;

// Why useEffect to sync storage → state: useEffect ensures notes are loaded from localStorage only once when the component mounts.