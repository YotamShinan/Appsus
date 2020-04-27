const { Link, NavLink } = ReactRouterDOM

export class SideNav extends React.Component {
    render() {
        return (
            <div className="side-nav">
                <Link to="/emails/new" className="new-mail-btn">Compose <span>+</span></Link>
                <div className="tray-btn flex column">
                    <NavLink to="/emails/" activeClassName='active-filter' className="">All mails</NavLink>
                    <Link to="/emails/filter/inbox" className="">Inbox</Link>
                    <Link to="/emails/filter/trash" className="">Trash</Link>
                    <Link to="/emails/filter/starred" className="">Starred</Link>
                </div>
            </div>
        )
    }
}
