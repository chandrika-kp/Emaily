import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { NavLink } from 'react-router-dom';
import Payments from './Payments';


const Header = ({ auth, fetchUser }) => {
    console.log('Auth state:', auth);
    // const handleLogout = () => {
    //     // Dispatch the logout action
    //     actions.logout();
    // };

    const renderContent = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li ley="2"><a href="/api/logout" >Logout</a></li> // Assuming there is a logout route
                ]

        }
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink to={auth ? '/surveys' : '/'} className="left brand-logo">Emaily</NavLink>
                <ul className="right">
                    {renderContent()}
                    {/* <li><a href='/'>Login</a></li> */}
                </ul>
            </div>
        </nav>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
