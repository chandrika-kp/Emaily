import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';  // Import your actions (assuming they are in a file named 'actions')

const Header = ({ auth,fetchUser }) => {
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
                return <li><a href="/api/logout" >Logout</a></li>;  // Assuming there is a logout route
        }
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="left brand-logo">Emaily</a>
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
