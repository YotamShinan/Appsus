import eventBus from '../../../services/eventBusService.js'
import emailService from '../services/emailService.js';

export class EmailCompose extends React.Component {
    state = {
        subject: '',
        address: '',
        body: '',
    }
    componentDidMount() {
        // TODO
        // const urlParams = new URLSearchParams(window.location.search);
        // console.log(window.location.search)
        // console.log(urlParams);
        // let subject = urlParams.get('subject');
        // // let body = urlParams.get('body');
        // // console.log('subject', subject, 'body', body);


        const location = this.props.location.search.substring(1);
        if (location){
            // console.log(location);
            var vars = location.split("&");
            var stam = [];
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                stam.push(pair);
            }

            console.log(stam);
            this.setState({ subject: stam[0][1], address: stam[1][1], body: stam[2][1] })
        }

        // const url = new URL(window.location);
        // const params = new URLSearchParams(url.search);
        // console.log(params);
        // var subject = params.get('subject');
        // console.log('subject', subject);



        // const params = new URLSearchParams('?body=popo&subject=ernest')
        // console.log(this.state.subject)


        const id = this.props.match.params.emailId;
        console.log('id', id);
        if (id) {
            emailService.getById(id)
                .then(email => {
                    if (email) {
                        let { subject, body, senderAddress } = email;
                        let subjectReply = 'Re: ' + subject;
                        let bodyReply = body + '\n\n-----------------------------\n\n';
                        this.setState({ subject: subjectReply, address: senderAddress, body: bodyReply })
                    }
                })
        }
    }
    onAddEmail = (ev) => {
        ev.preventDefault();
        emailService.createEmail(this.state.subject, this.state.body, this.state.address)
        eventBus.emit('show-msg', { txt: 'Email sent!' })
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
                <textarea className="email-input-body" name="body" value={this.state.body} onChange={this.onInputChange} placeholder="Your text..." required></textarea>
                <button className="send-email-btn"><i className="fas fa-paper-plane"></i></button>
            </div>
        </form>
    }
}