import React, {useContext} from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import LogoVyN from "../../assets/logos/circclovyn.png";
import { FormattedMessage } from "react-intl";
import "./navbar.css";
import { langContext } from "../../context/langContext";

function NavBar() {
  const idioma = useContext(langContext);

  return (
    <Navbar expand="xl" className="navbar-c">
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoVyN} alt="logo" className="logonav" width="230" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link href="#home">
              <FormattedMessage id="nav.inicio" deffaultMessage="Inicio" />
            </Nav.Link>
            <Nav.Link href="#nosotros">
              <FormattedMessage id="nav.nosotros" deffaultMessage="Nosotros" />
            </Nav.Link>
            <Nav.Link href="#productos">
              <FormattedMessage
                id="nav.productos"
                deffaultMessage="Productos"
              />
            </Nav.Link>

            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#contacto">
              <FormattedMessage id="nav.contacto" deffaultMessage="Contacto" />
            </Nav.Link>

            <NavDropdown title="ESP" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=> idioma.establecerLenguaje('en-US')}>ENG</NavDropdown.Item>
              <NavDropdown.Item onClick={()=> idioma.establecerLenguaje('es-AR')}>ESP</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
