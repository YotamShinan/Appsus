import NotesPreview from '../cmps/NotesPreview.jsx';

export default function NotesList(props) {
    console.log('list');
    

    return (
        <div className="notes-list flex column wrap">
            {props.notes && props.notes.map(note => <NotesPreview note={note} key={note.id} />)}
        </div>
    )
}