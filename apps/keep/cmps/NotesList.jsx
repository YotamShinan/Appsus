import NotesPreview from '../cmps/NotesPreview.jsx';

export default function NotesList(props) {
  
    return (
        <div className="notes-list flex column content-center space-between items-stretch wrap">
            {props.notes.map(note => <NotesPreview note={note} key={note.id} />)}
        </div>
    )
}