function Main({ notes, activeNote, onUpdateNote }) {
    const onEditField = (key, value) => {
        onUpdateNote({
            id: activeNote.id,
            [key]: value,
            lastModified: Date.now()
        });
    };

    if(!activeNote){
        return <div className="no-active-note">Notes have not been selected.</div>
    }

    return <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus />
            <textarea id="body" placeholder="Type a note!" value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)} />
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            {notes.map((note) => (
            <small className="preview-title">
                        Date {new Date(note.lastModified).toLocaleDateString("en-GB", {hour: "2-digit", minute: "2-digit"})}
                    </small>
                    ))}
            <div className="markdown-preview">{activeNote.body}</div>
        </div>
    </div>;
}

export default Main;