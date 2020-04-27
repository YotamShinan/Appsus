export default function ImgNotePreview(props) {
    const { note } = props;
    const title = note.info.title;
    const url = note.info.url;

    return (
        <div className="note img-note">
            <img src={url}/>
            <h3>{title}</h3>
        </div>
    )
}

