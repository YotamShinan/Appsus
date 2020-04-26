


// export default function EmailApp() {
//     return <h1>I am an Email APP!!!</h1>
// }

import emailService from "../services/emailService.js";
import {EmailList} from "../cmps/EmailList.jsx"
import {SideNav} from "../cmps/SideNav.jsx"


export default class EmailApp extends React.Component {
    state = {
        emails: null
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
        return (
            <div className="emails-container flex">
                    {<SideNav/>}
                    
                    {emails && <EmailList emails={emails} />}
            </div>
        )
    }
}