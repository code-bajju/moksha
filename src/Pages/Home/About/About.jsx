import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import donto from "../../../Images/about-banner1.png";
import dontoAnimated from "../../../Images/cleaner.png";
import "./About.css";

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
                src="https://github.com/code-bajju/Project-Image/blob/main/KNOW.png?raw=true"
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
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quod, eaque omnis inventore sed vero fugit earum aliquid soluta culpa minima qui expedita nesciunt odit perspiciatis suscipit in rerum natus magnam. Quasi repudiandae quae voluptatum sunt ad minima repellat vero delectus, quisquam, culpa consectetur nobis obcaecati, reiciendis laudantium! Modi, quae.
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
