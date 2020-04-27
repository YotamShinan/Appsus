
export default function TxtCmp(props) {
    const { note } = props;
    const text = note.info.txt;
    const title = note.info.title;

    return (
        <div className="note text-note">
            <p>{text}</p>
            <h2>{title}</h2>
        </div>
    )
}

