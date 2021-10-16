import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="nav-background">
            <Container >
                <a href="#home"><img src="assets/img/logo.svg" alt="logo del sitio web" className="logo-style" /></a> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="flex-row justify-content-around nav-margin align-items-center">
                        <a href="#productos" className="navbar-link">PRODUCTOS</a>
                        <a href="#imagenes" className="navbar-link">IMAGENES</a>
                        <a href="#sobreNosotros" className="navbar-link">SOBRE NOSOTROS</a>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

