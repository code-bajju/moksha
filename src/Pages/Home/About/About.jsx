import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import donto from "../../../Images/about-banner1.png";
import dontoAnimated from "../../../Images/cleaner.png";
import "./About.css";
import KNOW from '../About/KNOW.png';


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="about-wrapper">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="about-left">
              <img
                src={KNOW}
                alt="donto"
                className="img-fluid donto"
              />
            </div>
          </Col>
          <Col md={20} lg={6}>
            <div className="about-right mt-5 mt-lg-0">
              <div className="about-content text-start" data-aos="zoom-in">
                <h1>Welcome to a Family</h1>

                <p>
                Our WebApp Moksha is a personalized virtual trainer in individual’s pockets.The Moksha is presented as a holistic wellness platform that addresses various aspects of well-being, including the Immersive AR/VR Features, Emotionally Intelligent Chatbot,  accurate pose alignment, Calculate BMI, 3D Model Visualization and many more.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
