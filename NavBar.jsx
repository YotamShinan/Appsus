const { NavLink } = ReactRouterDOM


export function NavBar(props) {
    return <nav className="nav-bar flex">
        <ul className="main-nav-list clean-list flex space-evenly">
            
            <li><NavLink to='/emails'>Mitser Email</NavLink></li>
            <li><NavLink exact to='/keep'>Miss Keep</NavLink></li>
            <li><NavLink exact to='/books'>Miss Books</NavLink></li>
        </ul>

    </nav>
}

