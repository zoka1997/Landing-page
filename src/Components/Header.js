import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid header-page sticky-top">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Navbar.Brand href="#home"><Image src="images/logo.png" className="logo" alt="logo" /></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="mr-auto">
                              <Nav.Link to="/">Home</Nav.Link>
                              <Nav.Link to="/sectiontwo">Service</Nav.Link>
                              <Nav.Link to="/aboutus">About us</Nav.Link>
                              <Nav.Link to="/gallery">Gallery</Nav.Link>
                              <Nav.Link to="/contact">Contact us</Nav.Link>
                             
                </Nav>
                </Navbar.Collapse>
</Navbar>
      </div>
    )
  }
}
