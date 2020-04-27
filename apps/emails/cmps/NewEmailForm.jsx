const { Link } = ReactRouterDOM

<<<<<<< HEAD


=======
import util from '../../../services/util-service.js';
import emailService from '../services/emailService.js';

export class NewEmailForm extends React.Component {
    state = {
        subject: '',
        address: '',
        body: ''
    }
    componentDidUpdate() {
        console.log(this.state.subject)
    }
    onAddEmail = (ev) => {
        ev.preventDefault();
        emailService.createEmail(this.state.subject, this.state.address, this.state.body)
        this.props.history.push('/emails/')
    }
    onInputChange = (ev) => {
        const name = ev.target.name
        const value = ev.target.value
        this.setState({ [name]: value })
    }
    render() {
        return <form className="add-email-form" onSubmit={this.onAddEmail}>
                    <div className="add-email-container">
                        <input autoComplete="off" placeholder="subject" onChange={this.onInputChange} value={this.state.subject} type="search" name="subject" id="" />
                        <input autoComplete="off" placeholder="send to:" onChange={this.onInputChange} value={this.state.address} type="search" name="address" id="" />
                        <input autoComplete="off" placeholder="write your email here" onChange={this.onInputChange} value={this.state.body} type="search" name="body" id="" />
                        <button>Send</button>
                    </div>
              </form>
    }
}
>>>>>>> ca5f3901c88b41a0e27d6d2d11772be87d450f8d

{/* <form className="flex column new-mail-form" onSubmit={ this.onFormSubmit } action="" method="post">
    <div className="new-mail-form-title">{ this.state.formTitle }</div>
    <span>
        <label htmlFor="new-mail-subject">To:</label>
        <input type="email" id="new-mail-to" name="to" value={ this.state.to } onChange={ this.handleChange } placeholder="E.g John@gmail.com" required />
    </span>
    <span>
        <label htmlFor="new-mail-cc">Cc:</label>
        <input type="text" id="new-mail-cc" name="cc" value={ this.state.cc } onChange={ this.handleChange } placeholder="Copies, seperate by commas" />
    </span>
    <span>
        <label htmlFor="new-mail-subject">Subject:</label>
        <input type="text" id="new-mail-subject" name="subject" value={ this.state.subject } onChange={ this.handleChange } placeholder="Mail Subject" required />
    </span>
    <textarea name="body" value={ this.state.body } onChange={ this.handleChange } placeholder="Your text..." required></textarea>
    <div className="new-mail-form-buttons flex space-between align-center">
        <button onClick={ this.onModalClose } className="dismiss simple-button normal-trans">&times;</button>
        <button className="send simple-button normal-trans"><i className="fas fa-paper-plane"></i></button>
    </div>
    </form> */}