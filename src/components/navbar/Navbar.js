import React, { useContext } from "react";
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
import { NavLink, Link } from "react-router-dom";

import "./navbar.css";
import { langContext } from "../../context/langContext";

function NavBar() {
  const idioma = useContext(langContext);

  return (
    <Navbar expand="xl" className="navbar-c">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={LogoVyN}
            alt="logo"
            className="logonav"
            width="230"
            height="40"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <NavLink to="/" className="nav-link" activeClassName="">
              <FormattedMessage id="nav.inicio" defaultMessage="Inicio" />
            </NavLink>


            <NavLink to="/Nosotros" className="nav-link">
              <FormattedMessage id="nav.nosotros" defaultMessage="Nosotros" />
            </NavLink>


            <Link
              to={{ pathname: "https://takepedido.com/circclo" }}
              target="_blank"
              className="nav-link"
            >
              <FormattedMessage id="nav.productos" defaultMessage="Productos" />
            </Link>


            <NavLink to="/historia" className="nav-link">
              <FormattedMessage id="nav.historia" defaultMessage="Historia" />
            </NavLink>


            <NavLink to="/faq" className="nav-link">
              FAQ
            </NavLink>


            <Nav.Link href="#contacto">
              <FormattedMessage id="nav.contacto" defaultMessage="Contacto" />
            </Nav.Link>


            <NavDropdown title="ESP" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => idioma.establecerLenguaje("en-US")}
              >
                ENG
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => idioma.establecerLenguaje("es-AR")}
              >
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
