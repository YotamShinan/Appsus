const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM
const history = History.createBrowserHistory()

import { NavBar } from './NavBar.jsx';

// comment

import Emails from './apps/emails/pages/EmailApp.jsx';
import Keep from './apps/keep/pages/KeepApp.jsx';
// import BookApp from './apps/Books/pages/BookApp.jsx';
import Home from './pages/HomePage.jsx';



export class App extends React.Component {


    render() {
        return (
            <Router>
                <header className="">
                    <h1>Appsus</h1>
                    <NavBar history={history}></NavBar>
                </header>
                <main>
                    <Switch>
                        <Route component={Emails} path="/emails" />
                        <Route component={Keep} path="/keep" />
                        {/* <Route component={BookApp} path="/books" /> */}
                        <Route component={Home} path="/" />
                    </Switch>
                </main>
                <footer>
                    copyrights 2020 &copy;
                </footer>
            </Router>
        )
    }
}


