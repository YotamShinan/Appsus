const { NavLink } = ReactRouterDOM


export function NavBar(props) {
    return <nav className="nav-bar">
        <ul className="">
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/emails'>Mitser Email</NavLink></li>
            <li><NavLink exact to='/keep'>Miss Keep</NavLink></li>
            <li><NavLink exact to='/books'>Miss Books</NavLink></li>
        </ul>
        <button onClick={() => {
            props.history.goBack();
            
        }}>Back</button>
    </nav>
}

