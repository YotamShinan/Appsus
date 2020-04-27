
import TextNotePreview from '../cmps/TextNotePreview.jsx'
import TodoNotePreview from '../cmps/TodoNotePreview.jsx'
import ImgNotePreview from '../cmps/ImgNotePreview.jsx'
import VideoNotePreview from '../cmps/VideoNotePreview.jsx'

export default function NotesPreview(props){
    const { note } = props;
    
    return (
        <div className="note-preview">
            {note.type === "txt" && <TextNotePreview note={note} />}
            {note.type === "todo" && <TodoNotePreview note={note} />}
            {note.type === "img" && <ImgNotePreview note={note}  />}
            {note.type === "video" && <VideoNotePreview note={note}  />}
        </div>
    );
};