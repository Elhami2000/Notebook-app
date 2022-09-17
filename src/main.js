function Main({ notes, activeNote }) {
    return <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" autoFocus />
            <textarea id="body" placeholder="Type a note!" />
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