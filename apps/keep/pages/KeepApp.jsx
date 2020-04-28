import keepService from '../services/keepService.js';
import NotesList from '../cmps/NotesList.jsx';
import AddNote from '../cmps/AddNote.jsx'

export default class Keep extends React.Component {

    state = {
        notes: null,
        pinnedNotes: null,
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        const notes = keepService.query()
        const pinnedNotes = keepService.getPinnedNotes()
        this.setState({ notes, pinnedNotes })
        
    }  
    
    onRemoveNote = (noteId) => {
        keepService.removeNoteById(noteId)
        this.loadNotes();
    }

    onToggleIsPinned = (noteId) => {
        keepService.toggleIsPinned(noteId)
        .then(this.loadNotes)
        
    }

    render() {
        const { notes, pinnedNotes } = this.state;
        return (
            <React.Fragment>
                <AddNote loadNotes={this.loadNotes}/>
                <section className="pinned-notes-container flex">
                    {pinnedNotes && <NotesList notes={pinnedNotes} onRemoveNote={this.onRemoveNote} onToggleIsPinned={this.onToggleIsPinned} />}
                </section>
                <br />
                <section className="notes-container flex column">
                    {notes && <NotesList notes={notes} onRemoveNote={this.onRemoveNote} onToggleIsPinned={this.onToggleIsPinned} />}
                </section>

            </React.Fragment>
        )
    }

}

// ---------------------------- ******* ----------------------------------------------

