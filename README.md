# Notes App

A simple React-based note-taking application built with Vite. This app allows users to add, view, edit, and delete notes. Notes are persisted in `localStorage` to ensure data is retained across sessions.

## Features

- Add new notes with a title and content.
- View a list of all notes.
- And delete notes.
- Notes are persisted in `localStorage`.
- Responsive and clean UI styled with Tailwind CSS.

---

## Why?

### **Why localStorage + key naming**
- **Why localStorage**: LocalStorage is a simple and effective way to persist data on the client side without requiring a backend. It ensures that notes remain available even after the browser is closed or refreshed.
- **Key naming**: The key `notes` is used to store all notes in a single JSON object, making it easy to retrieve and update.

---

### **Why useState + this submit handler**
- **Why useState**: `useState` is used to manage the form inputs (`title` and `content`) as controlled components. This ensures that the form state is always in sync with the UI.
- **Submit handler**: The submit handler processes the form data, validates it, and updates the notes list by calling the `saveNote` utility function.

---

### **Why useEffect to sync storage → state**
- **Why useEffect**: `useEffect` is used to load notes from `localStorage` when the `NotesList` component mounts. This ensures that the app's state is initialized with the persisted data.

---

### **Why this nav approach for simplicity**
- **Why tabs/buttons for navigation**: A simple button-based navigation is used to toggle between "Add Note" and "View Notes" views. This approach is lightweight and avoids the complexity of routing for a small app.

---

### **Styling Approach**
- **Why Tailwind CSS**: Tailwind CSS was chosen for its utility-first approach, which allows for rapid styling without writing custom CSS. It ensures a consistent design and responsive layout with minimal effort.

---

### **Loading & Error States**
- **Why show spinner here**: A spinner is displayed while saving a note to indicate that the app is processing the operation.
- **Why display error banner**: An error banner is shown if saving to `localStorage` fails (e.g., due to quota issues) to inform the user of the problem.

---

## Setup & Run Steps

1. Clone the repository:
   ```bash
   git clone <your-repo-URL>
   cd Notes_App

2. Install dependencies
    ```bash
    npm install
3. Install dependencies
    ```bash
    npm run dev