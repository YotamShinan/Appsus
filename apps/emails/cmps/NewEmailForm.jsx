import eventBus from '../../../services/eventBusService.js'
import util from '../../../services/utilService.js';
import emailService from '../services/emailService.js';

const { Link } = ReactRouterDOM
export class NewEmailForm extends React.Component {
    state = {
        subject: '',
        address: '',
        body: ''
    }
    componentDidMount() {
        // TODO
        console.log(this.props);
       const params= new URLSearchParams('?body=popo&subject=ernest')
        // console.log(this.state.subject)
    }
    onAddEmail = (ev) => {
        ev.preventDefault();
        emailService.createEmail(this.state.subject, this.state.body, this.state.address)
        eventBus.emit('show-msg', {txt: 'Email sent!'})
        this.props.history.push('/emails/')
    }
    onInputChange = (ev) => {
        const name = ev.target.name
        const value = ev.target.value
        this.setState({ [name]: value })
    }
    render() {
        return <form className="add-email-form flex" onSubmit={this.onAddEmail}>
                    <div className="add-email-container flex column">
                        <input className="email-input-subject" autoComplete="off" placeholder="subject" onChange={this.onInputChange} value={this.state.subject} type="search" name="subject" id="" />
                        <input className="email-input-address" autoComplete="off" placeholder="send to:" onChange={this.onInputChange} value={this.state.address} type="search" name="address" id="" />
                        <textarea className="email-input-body"  name="body" value={ this.state.body } onChange={ this.onInputChange} placeholder="Your text..." required></textarea> 
                        <button className="send-email-btn"><i className="fas fa-paper-plane"></i></button>
                    </div>
              </form>
    }
}