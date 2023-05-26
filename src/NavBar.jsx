import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillTelephoneFill , BsFillEnvelopeFill , BsFacebook , BsInstagram , BsLinkedin , BsTwitter } from "react-icons/bs";
import "./App.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand to="#">
                        <div className='d-flex'>
                            <p><span style={{color: '#EB6149'}}><BsFillTelephoneFill /></span>     01153802977</p>
                            <p style={{marginLeft: '10px'}}><span style={{color: '#EB6149'}}><BsFillEnvelopeFill /></span>     motazramadan@gmail.com</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , width: '40px' , height: '40px' , objectFit: 'cover'}} to="#link"><BsFacebook /></Nav.Link>
                        <Nav.Link style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , width: '40px' , height: '40px' , objectFit: 'cover'}} to="#link"><BsInstagram /></Nav.Link>
                        <Nav.Link style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , width: '40px' , height: '40px' , objectFit: 'cover'}} to="#link"><BsLinkedin /></Nav.Link>
                        <Nav.Link style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , width: '40px' , height: '40px' , objectFit: 'cover'}} to="#link"><BsTwitter /></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>



                    <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand to="#home">
                            <img src="images/image1669295366.png" alt="" width="150px" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-auto">
                            <NavLink className="navi" to="/">Home</NavLink>
                            <NavLink className="navi" to="/About">About Us </NavLink>
                            <NavLink className="navi" to="#link">Pages</NavLink>
                            <NavLink className="navi" to="/Price">Pricing Plan</NavLink>
                            <NavLink className="navi" to="#home">Contact</NavLink>
                          </Nav>
                          <Nav className="ms-auto">
                            <NavLink className="close" to="/#">
                                login
                            </NavLink>
                            
                          </Nav>
                         </Navbar.Collapse>
                       </Container>
                     </Navbar>
    </div>
  )
}

export default NavBar