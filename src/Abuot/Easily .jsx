import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSpring , animated } from '@react-spring/web'
import './about.css'

    function Number({ n }){
        const { number } = useSpring({
            from: { number: 0},
            number: n,
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10},
        });
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    }

const Easily  = () => {
  return (
    <>
            <div style={{display: 'flex' , justifyContent: 'space-around'}} className='d-flex'>
            <div style={{display: 'flex'}}>
                <p className='hh1hh'>Easily make your <span style={{color: '#EB6149'}}>Website</span></p>
            <img className='mmg' width="50px" src="images/tittleshape1659158089.png" alt="" />
            </div>
            </div>
            <br />
            <br />    
            <div>
                <Col md={12} className='vidddddiv'>
                    <img className='mgiimg' src="images/download.png" alt="" />
                </Col>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <Row>
                    <Col lg={3} md={6} sm={6}>
                        <h1 style={{marginLeft: '50px' , color: '#EB6149'}} className='d-flex'>
                            <Number n={5} /> +
                        </h1>
                        <p style={{color: 'gray'}}>
                            Years in the industry
                        </p>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <h1 style={{marginLeft: '50px' , color: '#EB6149'}} className='d-flex'>
                            <Number n={65} /> +
                        </h1>
                        <p style={{color: 'gray'}}>
                            Employees working
                        </p>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <h1 style={{marginLeft: '50px' , color: '#EB6149'}} className='d-flex'>
                            <Number n={2} /> K
                        </h1>
                        <p style={{color: 'gray'}}>
                            Active registered users
                        </p>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <h1 style={{marginLeft: '30px' , color: '#EB6149'}} className='d-flex'>
                            <Number n={2500} /> +
                        </h1>
                        <p style={{color: 'gray'}}>
                            Active registered users
                        </p>
                    </Col>
                </Row>
            </Container>
     </>
  )
}
export default Easily 