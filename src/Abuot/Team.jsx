import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFacebook , BsInstagram , BsLinkedin , BsTwitter } from "react-icons/bs";
import Footer from '../Footer'

const Team = () => {
  return (
    <>
            <div style={{display: 'flex' , justifyContent: 'space-around'}} className='d-flex'>
                <div style={{display: 'flex'}}>
                    <h1 style={{fontSize: '60px' , fontWeight: '700' , textAlign: 'center'}}>Expert Team <span style={{color: '#EB6149'}}>Members</span></h1>
                    <img className='mmg' width="50px" src="images/tittleshape1659158089.png" alt="" />
                </div>
            </div>
            <br />
            <br />  
            <Container>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <img src="images/tam11659177448.jpg" alt="" />
                        <br />
                        <br />
                        <div style={{marginLeft: '50px'}}>
                            <h4 >Marvin McKinney</h4>
                            <p>CEO</p>
                            <div className='d-flex'>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , cursor: 'pointer'}}><BsFacebook /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsInstagram /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsLinkedin /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsTwitter /></span></p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src="images/tam21659177448.jpg" alt="" />
                        <br />
                        <br />
                        <div style={{marginLeft: '50px'}}>
                            <h4 >Kristin Watson</h4>
                            <p>Kristin Watson</p>
                            <div className='d-flex'>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , cursor: 'pointer'}}><BsFacebook /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsInstagram /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsLinkedin /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsTwitter /></span></p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src="images/tam31659177448.jpg" alt="" />
                        <br />
                        <br />
                        <div style={{marginLeft: '50px'}}>
                            <h4 >Jane Cooper</h4>
                            <p>UI/UX Designer</p>
                            <div className='d-flex'>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , cursor: 'pointer'}}><BsFacebook /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsInstagram /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsLinkedin /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsTwitter /></span></p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src="images/tam41659177448.jpg" alt="" />
                        <br />
                        <br />
                        <div style={{marginLeft: '50px'}}>
                            <h4 >Ronald Richards</h4>
                            <p>Content Writer</p>
                            <div className='d-flex'>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , cursor: 'pointer'}}><BsFacebook /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsInstagram /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsLinkedin /></span></p>
                                <p to="#link"><span style={{color: 'white' , backgroundColor: '#EB6149' , borderRadius: '50%' , padding: '10px' , objectFit: 'cover' , marginLeft: '7px' , cursor: 'pointer'}}><BsTwitter /></span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <br />
            <Footer />
    </>
  )
}

export default Team