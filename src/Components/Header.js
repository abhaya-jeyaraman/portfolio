import React, { Component } from 'react';
import { Navbar,NavbarBrand,NavItem,NavLink,Nav } from 'reactstrap';
//import '../CSS/Header.css';

class Header extends Component {
  render() {
    return (
        <Navbar color='light' light sticky="top">
          <NavbarBrand href="/portfolio">STYFI</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/portfolio">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio">Team</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
    );
  }
}

export default Header;
