
import TxtCmp from '../cmps/PreviewTextNote.jsx'
import TodoCmp from '../cmps/PreviewTodoNote.jsx'
import ImgCmp from '../cmps/PreviewImgNote.jsx'
import VidCmp from '../cmps/PreviewVideoNote.jsx'

export default function NotesPreview(props){
    const { note } = props
    return (
        <div className="note-preview">
            {note.type === "NoteText" && <TxtCmp note={note} />}
            {note.type === "NoteTodos" && <TodoCmp note={note} />}
            {note.type === "NoteImg" && <ImgCmp note={note}  />}
            {/* {note.type === "NoteVid" && <VidCmp note={note}  />} */}
        </div>
    );
};