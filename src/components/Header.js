 import React from 'react'
 import { Container, Row, Navbar, Nav } from 'react-bootstrap'
 
 const Header = () => {
   return (
     <header>
       <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
        <Navbar.Brand href="/">MCA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#"><i className='fas fa-home'></i> Home</Nav.Link>
            <Nav.Link href="#"><i className='fas fa-book'></i> Pizada</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
     </header>
   )
 }
 
 export default Header
 