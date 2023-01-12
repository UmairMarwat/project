import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';



function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className=''>
      <Navbar.Brand href="#home">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto d-flex align-content-between">
          <Nav.Link href="#home">Home</Nav.Link>
          
          
          <NavDropdown title="About Us" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Option 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Option 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Calender" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Option 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Option 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Teams" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Option 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Option 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Donations" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Option 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Option 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Option 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Option 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default MyNavbar;