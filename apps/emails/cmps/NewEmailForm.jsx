const { Link } = ReactRouterDOM

export class NewEmailForm extends React.Component {
    render() {
        return (
            <div className="new-email">
            </div>
            )
        }
    }
    
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