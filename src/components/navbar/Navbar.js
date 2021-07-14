import React from "react";
import { Navbar, Container, NavDropdown, Nav, Form, FormControl } from "react-bootstrap";
import LogoVyN from "../../assets/logos/circclovyn.png";
import './navbar.css';
function NavBar() {
  return (
    <Navbar  expand="xl" className="navbar-c">
<Container>
        <Navbar.Brand href="#home">
          <img src={LogoVyN} alt="logo" width="230" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>


            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            
            <NavDropdown title="ESP" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ENG</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ESP
              </NavDropdown.Item>             
            </NavDropdown>
          </Nav>
         
         
        </Navbar.Collapse>
        </Container>
    </Navbar>



  );

}

export default NavBar;
