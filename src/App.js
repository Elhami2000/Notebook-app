import {useState} from 'react'
import uuid from "react-uuid";
import './App.css';
import Main from './main';
import Sidebar from './sidebar';

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Test note",
      body: "",
      lastModified: Date.now()
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  return (
    <div className="App">
     <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} />
     <Main notes={notes}/>
    </div>
  );
}

export default App;
