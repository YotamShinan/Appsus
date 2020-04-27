import keepService from '../services/keep-service.js';
import NotesList from '../cmps/NotesList.jsx';
import CreateNote from '../cmps/CreateNote.jsx'

export default class Keep extends React.Component {

    state = {
        notes: null,
        pinnedNotes: null,
    }

    componentDidMount() {
        console.log('keep App mounted');
        this.loadNotes()
        
    }

    loadNotes = () => {
        const notes = keepService.query()
        this.setState({notes})
    }

    render() {
        const {notes, pinnedNotes} = this.state;
        return (
            <React.Fragment>
                    {<CreateNote />}
            <section className="notes-container flex column">
                {/* {<PinnedNotes />} */}
                {<NotesList notes={notes} />}
            </section>

            </React.Fragment>
        )
    }

}

// ---------------------------- ******* ----------------------------------------------

