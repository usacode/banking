import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/" title="This is the home page.">
        BadBank
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/createaccount"
              title="Add Users to the system and display them on AllData page."
            >
              Create Account
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/login"
              title="User must be logged in to perform Deposit and Withdraw."
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/deposit"
              title="This is the Deposit page and the user must be logged in to perform this action."
            >
              Deposit
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/withdraw"
              title="This is the Withdraw page and the user must be logged in to perform this action."
            >
              Withdraw
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/alldata"
              title="This played role of DB"
            >
              AllData
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
