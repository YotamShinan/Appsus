import NotesPreview from '../cmps/NotesPreview.jsx';

export default function NotesList(props) {
  
    return (
        <div className="notes-list flex wrap">
            {props.notes.map(note => <NotesPreview note={note} key={note.id} />)}
        </div>
    )
}