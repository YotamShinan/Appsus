import AddNote from "./AddNote";

export default class CreateNote extends React.Component {
    state = {
        type: '',
        text: '',
        placeholder: 'Enter here'
    }

    componentDidMount() {

    }

    onInputChange = (ev) => {
        this.setState({ text: ev.taget.value })
    }

    onAddNote = (ev) => {
        ev.preventDefault();
        if (!this.state.text) return
        const details = this.setDetails()
        AddNote(this.state.type, details)
            .then(this.props.loadNotes);
        eventBusService.callModal('updatesModal', { type: 'success', message: 'Note was successfully added' });

        this.setState({ text: '' })
    }

    setDetails = () => {
        let details = {};
        switch (this.state.type) {
            case 'txt':
                details.txt = this.state.text
                break;
            case 'img':
                details.url = this.state.text
            case 'video':
                details.url = this.state.text
                break;
            case 'maps':
                details.place = this.state.text
                break;
            case 'music':
                details.url = this.state.text
                break;
            case 'todo':
                details.todos = []
                this.state.text.split(',').map(txt => details.todos.push({ id: getRandomId(), txt, isDone: false }))
                break;
            default:
                break;
        }
        return details
    }

    onTypeChange = (ev) => {
        this.setState({ type: ev.target.value })
        switch (ev.target.value) {
            case 'txt':
                this.setState({ placeholder: 'Enter text', text: '' })
                break;
            case 'todo':
                this.setState({ placeholder: 'Enter todos separated by commas', text: '' })
                break;
            case 'img':
                this.setState({ placeholder: 'Enter image URL', text: '' })
                break;
            case 'video':
                this.setState({ placeholder: 'Enter video URL', text: '' })
                break;
            case 'maps':
                this.setState({ placeholder: 'Enter (lat,lng) or place name', text: '' })
                break;
            case 'music':
                this.setState({ placeholder: 'Enter mp3 or Spotify URL', text: '' })
                break;
            default:
                break;
        }
    }
    get types() {
        const { type } = this.state
        return <div className='types-container'>
            <label htmlFor="txt" className={ (type === 'txt') ? 'active-type' : '' }>
                <i className="fas fa-text-height"></i></label>
            <input onChange={ this.onTypeChange } type='radio' id='txt' name='type' value='txt' />
            <label htmlFor="todo" className={ (type === 'todo') ? 'active-type' : '' }>
                <i className="fas fa-list-ul"></i></label>
            <input onChange={ this.onTypeChange } type='radio' id='todo' name='type' value='todo' />

            <label htmlFor="img" className={ (type === 'img') ? 'active-type' : '' }>
                <i className="fas fa-image"></i></label>
            <input onChange={ this.onTypeChange } type='radio' id='img' name='type' value='img' />
            <label htmlFor="video" className={ (type === 'video') ? 'active-type' : '' }>
                <i className="fas fa-video"></i></label>
            <input onChange={ this.onTypeChange } type='radio' id='video' name='type' value='video' />
            <label htmlFor="maps" className={ (type === 'maps') ? 'active-type' : '' }>
                <i className="fas fa-map-marked-alt"></i></label>
            <input onChange={ this.onTypeChange } type='radio' id='maps' name='type' value='maps' />
            <label htmlFor="music" className={ (type === 'music') ? 'active-type' : '' }>
                <i className="fas fa-music"></i></label>
            <input onChange={ this.onTypeChange } type='radio' id='music' name='type' value='music' />

        </div>
    }

    render() {
        return <form onSubmit={ this.onAddNote }>
            <div className="add-note-container">
                <input placeholder={ this.state.placeholder } onChange={ this.onInputChange } value={ this.state.text } type="search" name="add-note" id="" />
                { this.types }
            </div>
        </form>
    }
}

