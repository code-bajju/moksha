import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="contactUs-wrapper">
            <Container>
                <Row>
                    <Col md={6} lg={6} xl={4}>
                        <div className="single-contact icon1">
                            <div className="c-icon">
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <div className="c-info text-start">
                                <h4>Address</h4>
                              <p>MM(DU), Mullana (Ambala),
                              </p>
                              <p>
                              Haryana, India, 133207

                              </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4}>
                        <div className="single-contact icon2">
                            <div className="c-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="c-info text-start">
                                <h4>Email</h4>
                                <p>bajranggour666@gmail.com</p>
                                <p>11212766@mmec.mmdu.org</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4}>
                        <div className="single-contact icon3">
                            <div className="c-icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="c-info text-start">
                                <h4>Phone</h4>
                                <p>+91 7056545878</p>
                                <p>+91 7056545485</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;