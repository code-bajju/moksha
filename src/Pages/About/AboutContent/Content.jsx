import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12}  lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>About Us</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">Welcome to Moksha, your ultimate destination for holistic well-being. Our health food and yoga app combines the power of nutritious food and transformative yoga practices to nurture your body and mind. With our expert guidance and personalized approach, we strive to empower you on your wellness journey. Join us and discover the path to a vibrant and balanced life.</p>
                    </Col>
                </Row>
            </Container>
            <iframe
        title="Embedded Content"
        src="http://localhost:5174/"
        width="600"
        height="400"
        frameBorder="0"
        style={{ border: '1px solid #ccc' }}
      />
        </section>
    );
};

export default Content;