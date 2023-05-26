import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';

const Quations = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <img className='mmg' width="500px" src="images/faq1659424973.png" alt="" />
                </Col>
                <Col>
                    <div style={{display: 'flex' , justifyContent: 'space-around'}} className='d-flex'>
                        <div style={{display: 'flex'}}>
                            <h1 style={{fontSize: '60px' , fontWeight: '700' , textAlign: 'center'}}>Our <span style={{color: '#EB6149'}}>Pricing</span> Plan </h1>
                            <img className='mmg' width="50px" src="images/tittleshape1659158089.png" alt="" />
                        </div>
                    </div>
                    <br />
                    <br />
                    <Accordion defaultActiveKey="0">
                    <Accordion.Item className='accc' eventKey="1">
                        <Accordion.Header>
                                   How can I use this website templates?
                                </Accordion.Header>
                        <Accordion.Body>
                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstan occur in which toil and pain can procure him some great pleasure.
                        </Accordion.Body>
                    </Accordion.Item>
                    <br />
                    <br />
                    <Accordion.Item className='accc' eventKey="2">
                        <Accordion.Header>
                                   What are the entry requirement?
                                </Accordion.Header>
                        <Accordion.Body>
                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstan occur in which toil and pain can procure him some great pleasure.


                        </Accordion.Body>
                    </Accordion.Item>
                    <br />
                    <br />
                    <Accordion.Item className='accc' eventKey="3">
                        <Accordion.Header>
                                   How  can I give the payment for uses?
                                </Accordion.Header>
                        <Accordion.Body>
                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstan occur in which toil and pain can procure him some great pleasure.


                        </Accordion.Body>
                    </Accordion.Item>
                    <br />
                    <br />
                    <Accordion.Item className='accc' eventKey="14">
                        <Accordion.Header>
                                   How do I  purchase membership?
                                </Accordion.Header>
                        <Accordion.Body>
                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstan occur in which toil and pain can procure him some great pleasure.


                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Col>

            </Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Container>
    </div>
  )
}

export default Quations