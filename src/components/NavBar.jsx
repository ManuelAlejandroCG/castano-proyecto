import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand id="sambuca" href="#home">X Level</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">                            
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <NavDropdown.Item ><NavLink to='/'>Catalogo</NavLink></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><NavLink to='/category/mother' className={nav => nav.isActive ? 'nav-active' : ''}>Motherboards</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink to='/category/micro' className={nav => nav.isActive ? 'nav-active' : ''}>Microprocesadores</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink to='/category/memoria' className={nav => nav.isActive ? 'nav-active' : ''} style={{textDecoration:"none"}}>Memorias RAM</NavLink></NavDropdown.Item>
                            </NavDropdown>                            
                        </Nav>
                        <Nav>
                            <Nav.Link to='/cart'><CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
/* <Nav.Link href="#home">Home</Nav.Link>
<Nav.Link href="#nosotros">Nosotros</Nav.Link> */
export default NavBar;
