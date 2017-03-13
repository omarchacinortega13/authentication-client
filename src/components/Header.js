import React from 'react';
import Signin from './auth/Signin';
import {connect} from 'react-redux';
import {Link} from 'react-router';


class Header extends React.Component {

    renderLinks() {
        if (this.props.authenticated) {
            // show link to signout
            return (
                <li className="nav-item">
                    <Link to="/signout" className="nav-link">Sign Out</Link>
                </li>
            )
        } else {
            // show a link to sing in or sign up
            return [
                <li className="nav-item" key={1}>
                    <Link to="/signin" className="nav-link">Sign in</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>
            ]

        }
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Redux Auth</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }

}

function mapStateToProps(state) {
    console.log(' state.auth ', state.auth.toJS());
    return {
        authenticated: state.auth.get('authenticated')
    }
}

export default connect(mapStateToProps)(Header);