import React from 'react'
import { NavLink } from "react-router-dom";
import { Col, Row } from 'react-bootstrap'


const Header = () => {
  return (
    <div>
        <Row style={{marginTop:"70px"}}>
            <Col>
                <h1 style={{textAlign: 'center' , marginTop: '50px'}}><b>Price</b></h1>
                <div style={{textAlign: 'center'}}>
                <NavLink className="navi" to="/">Home</NavLink>
                <b>/</b>
                <NavLink className="navi" to="/Price">Price </NavLink>
                </div>
            </Col>  
        </Row>
    </div>
  )
}

export default Header