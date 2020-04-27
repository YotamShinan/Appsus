export default function ImgNotePreview(props) {
    const { note } = props;
    const title = note.info.title;
    const url = note.info.url;

    return (
        <div className="note img-note flex column space-between">
            <img src={url}/>
            <h3>{title}</h3>
            <ul className="note-tools flex space-between clean-list">
                <li><i className="fas fa-map-pin"></i></li>
                <li><i className="fas fa-palette"></i></li>
                <li><i className="fas fa-font"></i></li>
                <li><i className="fas fa-trash-alt"></i></li>
            </ul>
        </div>
    )
}

