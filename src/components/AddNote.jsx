import React, { useState } from 'react';
import { saveNote } from '../utils/storage';

const AddNote = ({ onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(''); // Clear previous errors

    try {
      const newNote = { title, content };
      saveNote(newNote); // Save to localStorage
      onNoteAdded(newNote); // Update parent state
      setTitle('');
      setContent('');
      alert('Note added successfully!'); // Success message
    } catch (err) {
      setError('Failed to save the note. Please try again.'); // Handle errors
    } 
    setLoading(false); // Stop loading
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 w-[50%] mx-auto">
      {error && <p className="text-red-500">{error}</p>} {/* Error message */}
      {loading && <p className="text-blue-500">Saving...</p>} {/* Loading indicator */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded"
        disabled={loading} // Disable input while loading
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-2 border rounded"
        disabled={loading} // Disable input while loading
        rows={10}
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded"
        disabled={loading} // Disable button while loading
      >
        Add Note
      </button>
    </form>
  );
};

export default AddNote;

// Why useState + this submit handler: useState simplifies controlled inputs, and the submit handler ensures form data is processed efficiently.
// Why show spinner here: To indicate the app is processing the save operation.
// Why display error banner: To inform the user of any issues during the save process.