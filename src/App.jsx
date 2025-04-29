import { useState } from 'react';
import Header from './components/Header';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';

function App() {
  const [view, setView] = useState('add');
  const [notes, setNotes] = useState([]);

  const handleNoteAdded = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <Header />
      <nav className="flex justify-center gap-4 p-4 bg-white shadow-md">

      <button
          onClick={() => setView('view')}
          className={`p-3 rounded-lg ${
            view === 'view' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } hover:bg-blue-400 hover:text-white transition`}
        >
          View Notes
        </button>

        <button
          onClick={() => setView('add')}
          className={`p-3 rounded-lg ${
            view === 'add' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } hover:bg-blue-400 hover:text-white transition`}
        >
          Add Note
        </button>
        
      </nav>
      <div className="flex-grow p-6">
        {view === 'add' ? <AddNote onNoteAdded={handleNoteAdded} /> : <NotesList />}
      </div>
    </div>
  );
}

export default App;

// Why this nav approach for simplicity: Buttons with conditional rendering are easy to implement and maintain.