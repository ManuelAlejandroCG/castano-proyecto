import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar(props) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/'>
                    <Navbar.Brand href="#home">NivelX</Navbar.Brand>
                    </Link>                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#productos/3.1"><NavLink to='/category/mother' className={nav => nav.isActive ? 'nav-active' : ''}>Mother</NavLink></NavDropdown.Item>
                                <NavDropdown.Item href="#productos/3.2"><NavLink to='/category/micro' className={nav => nav.isActive ? 'nav-active' : ''}>Micro</NavLink></NavDropdown.Item>
                                <NavDropdown.Item href="#productos/3.3"><NavLink to='/category/memorias' className={nav => nav.isActive ? 'nav-active' : ''}>Memorias</NavLink></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#productos/3.4">Gabinetes</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;
