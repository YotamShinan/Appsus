


// export default function EmailApp() {
//     return <h1>I am an Email APP!!!</h1>
// }

import emailService from "../services/emailService.js";
import {EmailList} from "../cmps/EmailList.jsx"
import {EmailDetails} from "../cmps/EmailDetails.jsx"
import {NewEmailForm} from "../cmps/NewEmailForm.jsx"
import {SideNav} from "../cmps/SideNav.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM


export default class EmailApp extends React.Component {
    state = {
        emails: []
    }
    componentDidMount() {
        this.loadEmails()
    }
    loadEmails = () =>{
        const emails = emailService.query();
        this.setState({emails});
    }

    render() {
        const {emails} = this.state;
        // console.log(emails)
        return (
            <Router>
                <section  className="emails-container flex">
                        <SideNav/>
                        <Switch>
                            <Route  component={NewEmailForm}  path="/emails/new" />
                            <Route  component={EmailDetails}  path="/emails/:emailId" />
                            <Route  component={() => <EmailList emails={emails}/> }  path="/emails/" />
                        {/* {emails && <EmailList emails={emails} />} */}
                        </Switch>
                </section>

            </Router>
        )
    }
}