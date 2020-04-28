import emailService from "../services/emailService.js";
import eventBus from '../../../services/eventBusService.js';

const { Link } = ReactRouterDOM

const STAR = '★';
const TRASH = '🗑';

export class EmailDetails extends React.Component {
    state = {
        email: null
    }
    componentDidMount() {
        const id = this.props.match.params.emailId;
        emailService.getById(id)
            .then(email => {
                this.setState({ email })
            })
    }
    onRemoveEmail = () => {
        emailService.remove(this.state.email.id)
            .then(() => {
                eventBus.emit('show-msg', {txt: 'Email deleted successfully!'})
                this.props.history.push('/emails/')
            })
            .catch(err => {
                alert('OOPs, try again');
                console.log('ERR:', err);

            })
    }
    onToggleStarEmail = () => {
        emailService.toggleStar(this.state.email.id)
            .then((email) => {
                this.setState({ email })
            })
            .catch(err => {
                alert('OOPs, try again');
                console.log('ERR:', err);
            })
    }
    onToggleRead = () => {
        emailService.toggleRead(this.state.email.id)
            .then((email) => {
                if (email.isRead) 
                eventBus.emit('show-msg', {txt: 'Email marked as read successfully!'})
                else eventBus.emit('show-msg', {txt: 'Email marked as unread successfully!'})

                this.props.history.push('/emails/')
            })
            .catch(err => {
                alert('OOPs, try again');
                console.log('ERR:', err);
            })
    }
    onToggleTrash = () => {
        emailService.toggleTrash(this.state.email.id)
            .then((email) => {
                if (email.isTrash) 
                eventBus.emit('show-msg', {txt: 'Email moved to trash successfully!'})
                else eventBus.emit('show-msg', {txt: 'Email moved to Inbox successfully!'})

                this.props.history.push('/emails/')

            })
            .catch(err => {
                alert('OOPs, try again');
                console.log('ERR:', err);
            })
    }

    render() {
        const { email } = this.state;
        if (email) email.isRead = true;
        const Loading = <p>Loading...</p>
        return (
            (!email) ? Loading :
                <section className="email-details">
                    <div>
                        <div className="email-details-btns">
                            <Link to="/emails/">Back</Link>
                            <button to="/emails/" onClick={this.onToggleTrash}>Move to {(email.isTrash) ? "Inbox" : "Trash"}</button>
                            <button onClick={this.onToggleStarEmail} className={(email.isStarred) ? "starred" : ""}>{STAR}</button>
                            <button onClick={this.onToggleRead} >Mark as unread</button>
                            {email.isTrash && <button onClick={this.onRemoveEmail}>Delete</button>}

                        </div>
                        <div className="emails-details-main">
                            <h1>{email.subject}</h1>
                            <h2>{email.sender} &#60;<span>{email.senderAddress}</span>&gt;</h2>
                            <p>{email.body}</p>
                        </div>
                    </div>
                </section>
        )
    }
}
