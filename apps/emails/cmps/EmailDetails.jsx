import emailService from "../services/emailService.js";
const { Link } = ReactRouterDOM


export class EmailDetails extends React.Component{
    state = {
        email : ''
    }
    componentDidMount() {
        const id = this.props.match.params.emailId;
        // console.log(id);
        emailService.getById(id)
            .then(email => {
                this.setState({email})
            })
    }
    onRemoveEmail = () => {
        emailService.remove(this.state.email.id)
            .then(()=>{
                console.log('Email was removed');
            })
            .catch(err => {
                alert('OOPs, try again');
                console.log('ERR:', err);
                
            })
    }
    onToggleStarEmail = () => {
        emailService.toggleStar(this.state.email.id)
        .then((email) => {
            // console.log(email, 'Email was starred / unstarred');
            // console.log('Email was starred / unstarred');
            this.setState({email})
        })
        .catch(err => {
            alert('OOPs, try again');
            console.log('ERR:', err);  
        })
    }
    onToggleRead = () => {
        emailService.toggleRead(this.state.email.id)
        .then((email) => {
            console.log(email, 'Email marked as read / unread');
            console.log('Email marked as read / unread');
            this.setState({email})
        })
        .catch(err => {
            alert('OOPs, try again');
            console.log('ERR:', err);  
        })
    }
    onToggleTrash = () => {
        emailService.toggleTrash(this.state.email.id)
        .then((email) => {
            console.log(email, 'Email moved to/from Trash');
            console.log('Email moved to/from Trash');
            this.setState({email})
        })
        .catch(err => {
            alert('OOPs, try again');
            console.log('ERR:', err);  
        })
    }
    
    render() {
        const { email} = this.state;
        const Loading = <p>Loading...</p>
        return (
            (!email)? Loading : 
            <section className="email-details">
                <div>
                    <div>
                        <Link to="/emails/">Back</Link>
                        <Link to="/emails/" onClick={this.onRemoveEmail}>Move to trash</Link>
                        <button onClick={this.onToggleStarEmail} className={(email.isStarred)? "starred": ""}>Star</button>
                        <Link to="/emails/" onClick={this.onToggleRead} >{(email.isRead)? "Mark as unread": "Mark as read"}</Link>
                    </div>
                    <h1>{email.subject}</h1>
                    <h2>{email.sender} <span>{email.senderAddress}</span></h2>
                </div>
                <p>{email.body}</p>
            </section>     
            )
    }
}
