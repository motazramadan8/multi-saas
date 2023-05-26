import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import './home.css'
import { BsFillAwardFill } from "react-icons/bs";

const Whychoose = () => {
  return (
    <>
    <div style={{display: 'flex' , justifyContent: 'space-around'}} className='d-flex'>
        <div style={{display: 'flex'}}>
            <h1 style={{fontSize: '60px' , fontWeight: '700' , textAlign: 'center'}}>Why <span style={{color: '#EB6149'}}>choose</span> us </h1>
            <img className='mmg' width="50px" src="images/tittleshape1659158089.png" alt="" />
        </div>
    </div>
    <br />
    <br />
    <Container>
        <Row>
            <Col lg={4} md={6} s={12}>
                <span className='ppppa'><BsFillAwardFill /></span>
                <br />
                <br />
                <h3>Globally Recognize</h3>
                <p style={{color: 'gray'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem sit accusantium doloremqueau dantium, totam rem aperiam.</p>
            </Col>

            <Col lg={4} md={6} s={12}>
                <span className='ppppa'><BsFillAwardFill /></span>
                <br />
                <br />
                <h3>Globally Recognize</h3>
                <p style={{color: 'gray'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem sit accusantium doloremqueau dantium, totam rem aperiam.</p>
            </Col>

            <Col lg={4} md={6} s={12}>
                <span className='ppppa'><BsFillAwardFill /></span>
                <br />
                <br />
                <h3>Globally Recognize</h3>
                <p style={{color: 'gray'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem sit accusantium doloremqueau dantium, totam rem aperiam.</p>
            </Col>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


            <Col lg={4} md={6} s={12}>
                <span className='ppppa'><BsFillAwardFill /></span>
                <br />
                <br />
                <h3>Globally Recognize</h3>
                <p style={{color: 'gray'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem sit accusantium doloremqueau dantium, totam rem aperiam.</p>
            </Col>

            <Col lg={4} md={6} s={12}>
                <span className='ppppa'><BsFillAwardFill /></span>
                <br />
                <br />
                <h3>Globally Recognize</h3>
                <p style={{color: 'gray'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem sit accusantium doloremqueau dantium, totam rem aperiam.</p>
            </Col>

            <Col lg={4} md={6} s={12}>
                <span className='ppppa'><BsFillAwardFill /></span>
                <br />
                <br />
                <h3>Globally Recognize</h3>
                <p style={{color: 'gray'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem sit accusantium doloremqueau dantium, totam rem aperiam.</p>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Whychoose