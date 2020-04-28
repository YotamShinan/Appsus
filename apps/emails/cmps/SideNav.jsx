const { Link, NavLink } = ReactRouterDOM

import emailService from "../services/emailService.js";



export class SideNav extends React.Component {
    render() {
        const numOfUnread = emailService.numOfUnread();
        // console.log(numOfUnread);
        return (
            <div className="side-nav flex column">
                <Link to="/emails/new" className="new-mail-btn">Compose <span>+</span></Link>
                <div className="tray-btn flex column">
                    <NavLink to="/emails/" exact activeClassName='active-filter' className="">All mails</NavLink>
                    <NavLink to="/emails/filter/inbox" activeClassName='active-filter' className="inbox-link">Inbox <span>{(numOfUnread)? numOfUnread.toString(): ''}</span></NavLink>
                    <NavLink to="/emails/filter/unread" activeClassName='active-filter' className="">Unread</NavLink>
                    <NavLink to="/emails/filter/starred" activeClassName='active-filter' className="">Starred</NavLink>
                    <NavLink to="/emails/filter/trash" activeClassName='active-filter' className="">Trash</NavLink>
                </div>
            </div>
        )
    }
}
