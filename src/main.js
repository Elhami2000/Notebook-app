import React, { useState } from "react";
function Main({ activeNote, onUpdateNote }) {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        });
    };
    const getInitialState = () => {
        const value = "Category";
        return value;
    };
    const [value, setValue] = useState(getInitialState);
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    if (!activeNote) {
        return <div className="no-active-note">Notes have not been selected.</div>
    }

    return <div className="app-main">
        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <h4 className="preview-title">
            <select style={{marginRight: "10px"}} value={value} onChange={handleChange}>
                <option value="Category">Category</option>
                <option value="Reminder">Reminder</option>
                <option value="Note">Note</option>
                <option value="ToDo">To do</option>
            </select>
                {`${value}`} -  Date {new Date(activeNote.lastModified).toLocaleDateString("en-GB", { hour: "2-digit", minute: "2-digit" })}
            </h4>
            <div className="markdown-preview">{activeNote.body}</div>
        </div>
        <div className="app-main-note-edit">
            <input type="text" id="title" value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus />
            <textarea id="body" placeholder="Type a note!" value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)} />
        </div>

    </div>;
}

export default Main;