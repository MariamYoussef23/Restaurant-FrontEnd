import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import utensils from "../images/fork&knife.png";
import delivery from "../images/delivery.png";
import { Button, Image } from "react-bootstrap";
import React from "react";
import Cart from "./homeComps/cart";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Navbar className="main fixed-top" expand="sm">
        <Container>
          <Navbar.Brand className="fw-bold nav d-flex-">
            <Link to="/" style={{textDecoration: 'none'}}>
              <div className="d-flex justify-content-center align-items-center main">
                OBSD<Image src={utensils} height={25} width={20}></Image>
              </div>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-lg-center justify-content-center">
              <Nav.Link href="/" className="main">
                Menu
              </Nav.Link>
              <Nav.Link href="/" className="main">
                Most Popular
              </Nav.Link>
              <div>
                <Cart />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
