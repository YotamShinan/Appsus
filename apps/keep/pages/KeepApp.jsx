import keepService from '../services/keepService.js';
import NotesList from '../cmps/NotesList.jsx';
import AddNote from '../cmps/AddNote.jsx'
import eventBus from '../../../services/eventBusService.js';


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
    
    onSendAsEmail = (noteId) => { 
        keepService.getNoteInfoForSending(noteId)
        .then((note) => this.props.history.push(`/emails/new/?subject=${note.info.title}&address=keep@google.com&${note.info.text}`)
        )
    }

    onRemoveNote = (noteId) => {
        keepService.removeNoteById(noteId)
        this.loadNotes();
        eventBus.emit('show-msg', {txt: 'You just threw it away!'})
    }

    onToggleIsPinned = (noteId) => {
        keepService.toggleIsPinned(noteId)
        .then(this.loadNotes)
        
    }

    onToggleIsDone = (noteId, todoId) => {        
        keepService.toggleTodoIsDone(noteId, todoId)
        .then(this.loadNotes);
    }

    onChangeNoteColor = (noteId, colorVal) => {
        keepService.changeNoteColor(noteId, colorVal)
        then(this.loadNotes);
    }

    onChangeFontColor = (noteId, colorVal) => {
        keepService.changeFontColor(noteId, colorVal)
        then(this.loadNotes);
    }

    render() {
        const { notes, pinnedNotes } = this.state;
        return (
            <React.Fragment>
                <AddNote loadNotes={this.loadNotes}/>
                <section className="pinned-notes-container flex">
                    {pinnedNotes && <NotesList notes={pinnedNotes} onSendAsEmail={this.onSendAsEmail} onChangeNoteColor={this.onChangeNoteColor} onChangeFontColor={this.onChangeFontColor} onRemoveNote={this.onRemoveNote} onToggleIsDone={this.onToggleIsDone} onToggleIsPinned={this.onToggleIsPinned} />}
                </section>
                <br />
                <section className="notes-container flex column">
                    {notes && <NotesList notes={notes} onSendAsEmail={this.onSendAsEmail} onChangeNoteColor={this.onChangeNoteColor} onChangeFontColor={this.onChangeFontColor} onRemoveNote={this.onRemoveNote} onToggleIsDone={this.onToggleIsDone} onToggleIsPinned={this.onToggleIsPinned} />}
                </section>

            </React.Fragment>
        )
    }

}

// ---------------------------- ******* ----------------------------------------------

