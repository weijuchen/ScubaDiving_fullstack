// # I need to import React module and link component from different package.
// And use return statement to define navigation menu.


import React from "react";
import { Link } from "react-router-dom";



const NavbarComponent = () => {
  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {/* This code creates a clickable link in a navigation menu. When
                you click this link, it will take you to the main page of the
                website (the root URL). The link is labeled "Home," so you know
                it's meant to bring you back to the homepage when you click on
                it. */}
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/destination">
                    Destination
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/fundivepackage">
                    Fun Dive Package
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/divingholidaytips">
                    Divng Holiday Tips
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Logout
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavbarComponent;
