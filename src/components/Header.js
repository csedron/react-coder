import React from 'react';
import * as ReactBootstrap from "react-bootstrap";

function Header() {

    return (
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootstrap.Navbar.Brand href="#home">CS SERVICIOS</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#features">Inicio</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#pricing">Precios</ReactBootstrap.Nav.Link>
      <ReactBootstrap.NavDropdown title="Servicios" id="collasible-nav-dropdown">
        <ReactBootstrap.NavDropdown.Item href="#action/3.1">Desarrollo Web</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.2">Virtualizacion </ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.3">Filtrado Web</ReactBootstrap.NavDropdown.Item>
        {/* <ReactBootstrap.NavDropdown.Divider />
        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item> */}
      </ReactBootstrap.NavDropdown>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
      <ReactBootstrap.Nav.Link href="#deets">Chat en linea</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
        Sobre Nosotros
      </ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    )
}

export default Header;