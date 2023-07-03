import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
                <Container>

                    <LinkContainer to="/">
                        <Navbar.Brand><i className="fa-solid fa-house"></i> Home</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <LinkContainer to="/cart">
                                <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="login">
                                <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                            </LinkContainer>

                        </Nav>

                        <Nav className="ms-auto">

                            <LinkContainer to="about" >
                                <Nav.Link><i className="fas fa-info"></i> About</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="contact" >
                                <Nav.Link><i className="fas fa-phone"></i> Contact</Nav.Link>
                            </LinkContainer>

                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    )
}

export default Header