import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

import "./header.css"

const Headers = () => {

  const navigate = useNavigate();

  const Brand = () =>{
    navigate("/")
  }
  return (
    <>
       <Navbar className='navigation-bar' collapseOnSelect expand="lg">
        <Container>
          <h1 className='title'>CRUD Operation</h1>
          {/* <Navbar.Brand className='brand'  onClick={Brand} > <Image className='logo-image' src="/logo.jpeg" ></Image><Image className='logo-text' src='aj-logo.gif' /></Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav className='nav-link'>
              {/* <Nav.Link href="#deets">About</Nav.Link>
              <Nav.Link href="#memes">Contact</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers