function Main({ notes, activeNote, onUpdateNote }) {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
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
            <small className="preview-title">
                       Category -  Date {new Date(activeNote.lastModified).toLocaleDateString("en-GB", {hour: "2-digit", minute: "2-digit"})}
                    </small>
            <div className="markdown-preview">{activeNote.body}</div>
        </div>
    </div>;
}

export default Main;