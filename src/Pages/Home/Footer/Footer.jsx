import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
// import { AiTwotoneHeart } from "react-icons/Ai";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
              
                    <Col>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Services</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Realtime Yoga Pose Detection</NavLink>
                                <NavLink className="footer-link">Personal Assistant</NavLink>
                                <NavLink className="footer-link">Chat Bot</NavLink>
                                <NavLink className="footer-link">Custom Diet Chart</NavLink>
                                {/* <NavLink className="footer-link">Sedation Dentistry</NavLink> */}
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our Address</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">MM(DU)</NavLink>
                                <NavLink className="footer-link">Mullana (Ambala),Mullana, Haryana, India, 133207</NavLink>
                                <NavLink className="footer-link">Phone: +91 7056545878</NavLink>
                                <NavLink className="footer-link">Email:11212766@mmec.mmdu.org</NavLink>
                                {/* <NavLink className="footer-link">Fax:+1 675 5867 340</NavLink> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-black">
            Made with ❤️ by EliteByte using ReactJS.

            </div>
        </div>
    );
};

export default Footer;