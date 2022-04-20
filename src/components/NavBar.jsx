import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">NivelX</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>                                
                                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#productos/3.1">Mother</NavDropdown.Item>
                                    <NavDropdown.Item href="#productos/3.2">Micro</NavDropdown.Item>
                                    <NavDropdown.Item href="#productos/3.3">Memorias</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#productos/3.4">Gabinetes</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#carrito">Carrito</Nav.Link>                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
