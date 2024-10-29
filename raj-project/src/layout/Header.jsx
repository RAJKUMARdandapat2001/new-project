import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 24,
                    }}
                        as={Link} to="/">Hello Raj</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 18
                            }}
                                
                                as={Link} to="/form">Form</Nav.Link>
                        
                        <Nav.Link style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 18
                            }}
                                
                                as={Link} to="/useref">UseRef</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header