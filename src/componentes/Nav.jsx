import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navtae({ items = [] }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

        {/* LOGO */}
        <Navbar.Brand className="me-lg-5">
          <img
            src="/imgs/escudo de la enat.jpeg"
            alt="Logo ENAT"
            className="img-fluid"
            style={{ width: "50px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="text-center">
            {items.map((item) => (
              <Nav.Item key={item.nombre}>
                <Nav.Link href={item.href}>
                  {item.nombre}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navtae;


