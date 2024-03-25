import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand as={NavLink} to="/" title="This is the home page.">
        BadBank
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to="/createaccount"
            title="Add Users to the system and display them on AllData page."
          >
            Create Account
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/login"
            title="User must be logged in before performing Deposit and Withdraw."
          >
            Login
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/deposit"
            title="This is the Deposit page and the user must be logged in to perform this action."
          >
            Deposit
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/withdraw"
            title="This is the Withdraw page and the user must be logged in to perform this action."
          >
            Withdraw
          </Nav.Link>
          <Nav.Link as={NavLink} to="/alldata" title="AllData is the BD for this app.">
            AllData
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
