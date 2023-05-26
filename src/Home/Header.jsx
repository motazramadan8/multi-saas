import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './home.css'

const Header = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col className='cccol' style={{marginTop: '10%'}} lg={6} md={12} sm={12}>
                <h1 style={{fontSize: '60px' , fontWeight: '700'}}>Create your own website within few </h1>
                <span style={{display: 'flex'}}><h1 className='sspan' style={{fontSize: '60px' , fontWeight: '700'}}>minutes</h1> <div className='spinnnner'>
                    <img className='mmg' width="50px" src="images/tittleshape1659158089.png" alt="" />
                </div></span>
                <br />
                <div>
                    <p style={{color: 'gray' , fontSize: '17px'}}>You can easily create your website by Pica. We will  provide all  type of  digital service for you. We have somany readymade website  for you. We always try to provide best service for our customer.</p>
                </div>
                <br />
                <div className='d-flex'>
                    <button style={{paddingTop: '10px' , paddingBottom: '10px' , paddingLeft: '20px' , paddingRight: '20px'}} className='close'>
                        Get Started
                    </button>
                    <p style={{color: 'gray' , fontSize: '17px' , marginTop: '13px' , marginLeft: '10px'}}>10 Days for free trial , No card required</p>
                </div>
                </Col>

                <Col style={{marginTop: '3%'}} className='dddddiv' lg={6}>
                    <img width="500" src="images/hero-man1659158117.png" alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header