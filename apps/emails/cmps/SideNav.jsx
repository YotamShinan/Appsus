const { Link } = ReactRouterDOM

export class SideNav extends React.Component {
    render() {
        return (
            <div className="side-nav">
                <Link to="/emails/new" className="new-mail-btn">Compose <span>+</span></Link>
                <section>
                    

                </section>
            </div>
            )
        }
    }
    