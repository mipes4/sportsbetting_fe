import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavbarItem from "./NavbarItem";

export default function NavigationComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
        Sports Betting
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="pills" style={{ width: "100%" }} fill>
          <NavbarItem path="/voorspellingen" linkText="Voorspellingen" />
          <NavbarItem path="/regels" linkText="Regels" />
        </Nav>
        <Nav>
          <NavDropdown title="*Welkom firstname*" id="collasible-nav-dropdown">
            <NavDropdown.Item as="#action/3.1">Profiel</NavDropdown.Item>
            <NavDropdown.Item as="#action/3.2">Admin</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
