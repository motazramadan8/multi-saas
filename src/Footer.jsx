import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { BsFacebook , BsInstagram , BsLinkedin , BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
     <Container>
        <Row>
            <Col lg={2} md={6} sm={12}>
                <img src="images/image1669295366.png" alt="" width="300px" />
                <br />
                <br />
                <p style={{color: 'gray' , marginLeft: '20px'}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is
                    that it has a more-or-less.
                </p>
                <br />
                <br />
                <div className='d-flex'>
                    <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , cursor: 'pointer'}}><BsFacebook /></span></p>
                    <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsInstagram /></span></p>
                    <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsLinkedin /></span></p>
                    <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsTwitter /></span></p>
                </div>
            </Col>

            <Col style={{marginLeft: '19%' , marginTop: "20px"}} lg={2} md={6} sm={12}>
                <p style={{fontSize: '25px'}}>Community</p>
                <ul style={{color: "gray" , fontSize: "18px" , textAlign: 'left'}}>
                    <li className='list-group-item'>About</li>
                    <li className='list-group-item'>Templates</li>
                    <li className='list-group-item'>Press</li>
                    <li className='list-group-item'>Faq</li>
                    <li className='list-group-item'>Privacy Policy</li>
                    <li className='list-group-item'>Terms Condition</li>
                </ul>
            </Col>

            <Col style={{marginLeft: '40px' , marginTop: "20px"}} lg={2} md={6} sm={12}>
                <p style={{fontSize: '25px'}}>Our Templates</p>
                <ul style={{color: "gray" , fontSize: "18px" , textAlign: 'left'}}>
                    <li className='list-group-item'>Donation</li>
                    <li className='list-group-item'>Job Post</li>
                    <li className='list-group-item'>Events</li>
                    <li className='list-group-item'>Suppor Ticket</li>
                    <li className='list-group-item'>Ecommerce</li>
                    <li className='list-group-item'>Knowledgebase   </li>
                </ul>

            </Col>

            <Col style={{ marginTop: "20px"}} lg={2} md={6} sm={12}>
                <p style={{fontSize: '25px'}}>Contact Info </p>
                <ul style={{color: "gray" , fontSize: "18px" , textAlign: 'left'}}>
                    <li className='list-group-item'>41/1, Hilton Mall, NY City</li>
                    <li className='list-group-item'>+201153802977</li>
                    <li className='list-group-item'>motazramadan@gmail.com</li>
                </ul>

            </Col>
        </Row>    
    </Container>   
    <h5 style={{textAlign: 'center'}}>© 2023 Motaz Ramadan . All Rights Reserved.</h5>
    </>
  )
}

export default Footer