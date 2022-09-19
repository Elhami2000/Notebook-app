import { useState } from "react";

function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {
    const [input, setInput] = useState('');
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
    const filteredNotes = sortedNotes.filter(el => {
        if(input === ''){
            return el
        } else{
            return el.title.toLowerCase().includes(input);
        }
    });

    return <div className="app-sidebar">
        <input className="app-search" onChange={(event) => setInput(event.target.value.toLowerCase())}/>
        <div className="app-sidebar-header">
            <h1>All Notes</h1>
            <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
            {filteredNotes.map((note) => (
                <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                    <div className="sidebar-note-title">
                        <strong>{note.title}</strong>
                        <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                    </div>

                    <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                </div>
            ))}

        </div>
    </div>
}

export default Sidebar;