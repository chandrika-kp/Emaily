import React from 'react'

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Emaily</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
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

export default Header