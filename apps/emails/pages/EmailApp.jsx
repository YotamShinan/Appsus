import emailService from "../services/emailService.js";
import {EmailList} from "../cmps/EmailList.jsx"
import {EmailDetails} from "../cmps/EmailDetails.jsx"
import {NewEmailForm} from "../cmps/NewEmailForm.jsx"
import {SideNav} from "../cmps/SideNav.jsx"
import {SearchBox} from "../cmps/SearchBox.jsx"


const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM


export default class EmailApp extends React.Component {
    state = {
        emails: []
    }
    componentDidMount() {
        this.loadEmails()
    }
    componentDidUpdate(prevProps){
        if (prevProps.match.params.filterBy !== this.props.match.params.filterBy) {
        this.loadEmails()
        }
    }
    loadEmails = () =>{
        const filterBy = this.props.match.params.filterBy;
        const emails = emailService.query(filterBy);
        this.setState({emails});
    }

    render() {
        const {emails} = this.state;
        return (
            <Router>
                <SearchBox/>
                <section  className="emails-container flex">
                        <SideNav/>
                        <Switch>
                            <Route  exact component={NewEmailForm}  path="/emails/new" />
                            <Route  exact component={EmailDetails}  path="/emails/:emailId" />
                            <Route  component={() => <EmailList emails={emails}/> }  path="/emails" />
                        </Switch>
                </section>

            </Router>
        )
    }
}