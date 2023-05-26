import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './about.css'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
        <Row style={{marginTop:"70px"}}>
            <Col>
                <h1 style={{textAlign: 'center' , marginTop: '50px'}}><b>About Us</b></h1>
                <div style={{textAlign: 'center'}}>
                <NavLink className="navi" to="/">Home</NavLink>
                <b>/</b>
                <NavLink className="navi" to="/About">About Us </NavLink>
                </div>
            </Col>
        </Row>

    </>
  )
}
export default Header