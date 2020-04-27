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
        this.setState({ notes })
    }

    render() {
        const { notes, pinnedNotes } = this.state;
        return (
            <React.Fragment>
                <AddNote />
                <section className="notes-container flex column">
                    {/* {<PinnedNotes />} */}
                    {notes && <NotesList notes={notes} />}
                    {/* {<NotesList notes={notes.filter(note => note.isPinned)} />} */}
                </section>

            </React.Fragment>
        )
    }

}

// ---------------------------- ******* ----------------------------------------------

