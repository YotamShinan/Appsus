

 export default function NotePreview(props) {
    const { note } = props
    console.log(note);
    

    return (
        <div className="note-preview">
            <h2>{note.info.title}</h2>
            <p>{note.info.txt}</p>
        </div>
    )
}

// export default NotesPreview = ({ props }) => {
//     const { note } = props
//     return (
//         <div className="note-preview">
//             {note.type === "NoteText" && <TxtCmp note={note} />}
//             {note.type === "NoteTodos" && <TodoCmp note={note} />}
//             {note.type === "NoteImg" && <ImgCmp note={note}  />}
//             {note.type === "NoteVid" && <VidCmp note={note}  />}
//         </div>
//     );
// };