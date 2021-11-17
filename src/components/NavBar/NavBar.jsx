import {Link, NavLink} from 'react-router-dom'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="nav-background">
            <Container >
                <Link to="/"><img src="assets/img/logo.svg" alt="logo del sitio web" className="logo-style" /></Link> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="flex-row justify-content-around nav-margin align-items-center">
                        <NavLink exact to="/" activeClassName="active-navbar-link" className="navbar-link">HOME</NavLink>
                        <NavLink to="/productos" activeClassName="active-navbar-link" className="navbar-link">PRODUCTOS</NavLink>
                        <NavLink to="/sobre-nosotros" activeClassName="active-navbar-link" className="navbar-link">SOBRE NOSOTROS</NavLink>
                        <div className="navbar-dropdown">
                            <NavLink to="/categoria" className="navbar-link-dropdown" activeClassName="active-navbar-link"> CATEGORIAS
                                <div className="navbar-dropdown-content">
                                    <NavLink to="/categoria/Agendas" className="navbar-link">AGENDAS</NavLink>
                                    <NavLink to="/categoria/Cuadernos" className="navbar-link">CUADERNOS</NavLink>
                                    <NavLink to="/categoria/Recetarios" className="navbar-link">RECETARIOS</NavLink>
                                </div>
                            </NavLink>
                        </div>
                        <NavLink to="/carrito" activeClassName="active-navbar-link-carrito"><CartWidget /></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

