export const getNotes = () => {
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : [];
};

export const saveNote = (note) => {
  const notes = getNotes();
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
};


export const deleteNote = (index) => {
  const notes = getNotes();
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
};