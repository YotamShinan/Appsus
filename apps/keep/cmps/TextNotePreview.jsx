
export default function TextNotePreview(props) {
    const { note } = props;
    const text = note.info.txt;
    const title = note.info.title;

    return (
        <div className="note text-note flex column space-between">
            <p>{text}</p>
            <h2>{title}</h2>
            <ul className="note-tools flex space-between clean-list">
                <li><i className="fas fa-map-pin"></i></li>
                <li><i className="fas fa-palette"></i></li>
                <li><i className="fas fa-font"></i></li>
                <li><i className="fas fa-trash-alt"></i></li>
            </ul>
        </div>
    )
}