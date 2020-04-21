import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

import PopupLoginSignUp from "../PopupLoginSignUp";
import Button from "react-bootstrap/Button";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">Pandemia</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Головна</Nav.Link>
          <Nav.Link href="/map">Мапа</Nav.Link>
          <Nav.Link href="/">Приєднатися</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-primary" onClick={handleShow}>
            Вхід
          </Button>
          <PopupLoginSignUp show={show} handleClose={handleClose} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
