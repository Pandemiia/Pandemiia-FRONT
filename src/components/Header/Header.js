import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logoImg from "./Img/logo.jpg";
import "./scss/style.scss";

import PopupLoginSignUp from "../PopupLoginSignUp";
import Button from "react-bootstrap/Button";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img className="rounded-circle" src={logoImg} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Головна</Nav.Link>
          <Nav.Link href="/map">Мапа</Nav.Link>
          <Nav.Link href="/">Приєднатися</Nav.Link>
          <Nav.Link href="/">Медикам</Nav.Link>
          <Nav.Link href="/">Технічні рішення</Nav.Link>
          <Nav.Link href="/">Контакти</Nav.Link>
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
