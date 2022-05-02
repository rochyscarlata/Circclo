import React, { useContext } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import LogoVyN from "../../assets/logos/logovyn.png";
import Logopeque from "../../assets/logos/logovyn.png";

import { FormattedMessage } from "react-intl";
import { NavLink, Link } from "react-router-dom";

import "./navbar.css";
import { langContext } from "../../context/langContext";

function NavBar() {
  const idioma = useContext(langContext);

  return (
    <Navbar expand="xl" className="navbar-c">
      <Container>
        <Navbar.Brand href="/" className="nav-brand">
          <img
            src={Logopeque}
            alt="logo"
            className="logonav"
            width="240"
            height="40"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
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
          </Nav>
          <Navbar.Brand href="/" className="nav-medio">
            <img
              src={LogoVyN}
              alt="logo"
              className="logonav"
              width="230"
              height="40"
            />
          </Navbar.Brand>
          <Nav className="ml-auto ">
            <NavLink to="/historia" className="nav-link">
              <FormattedMessage id="nav.historia" defaultMessage="Historia" />
            </NavLink>

            <NavLink to="/faq" className="nav-link">
              FAQ
            </NavLink>

            <NavLink to="/contacto" className="nav-link">
              <FormattedMessage id="nav.contacto" defaultMessage="Contacto" />
            </NavLink>

            <NavDropdown
              title={<FormattedMessage id="nav.idioma" defaultMessage="ESP" />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                onClick={() => idioma.establecerLenguaje("en-US")}
              >
                ENG
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-abajo"
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
