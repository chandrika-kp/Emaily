import React from 'react';
import {connect } from 'react-redux';


const Header = () => {
    // console.log(this.props);
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="left brand-logo">Emaily</a>
                <ul className="right">
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>
        </nav>
        /* <header classNameName="App-header">
    <p>Hi there
    </p>
    <a
      classNameName="App-link"
      href="/auth/google"
      target="_blank">Sign In with Google
    </a>
  </header> */
    )
}

function mapStateToProps(auth){
    return {auth};
}
export default connect(mapStateToProps) (Header);