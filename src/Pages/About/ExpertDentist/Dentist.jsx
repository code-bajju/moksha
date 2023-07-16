import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import expertDentist from '../../../Images/experienceddentist.png';
import "./Dentist.css";

const Dentist = () => {
  return (
    <section className="expert-dentist">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <img
              src="https://previews.123rf.com/images/milkos/milkos1803/milkos180303133/97692405-female-nutritionist-working-on-laptop-in-office-woman-dietitian-typing-counting-calories-or.jpg"
              alt="expertDentist"
              className="img-fluid"
            />
          </Col>
          <Col lg={6}>
            <div className="expertDentist-txt mt-5 mt-lg-0">
              <h2>Experienced Nutritionist</h2>
              <p>
                {" "}
                Meet Lavisha, our experienced nutritionist dedicated to
                transforming lives through personalized nutrition plans. With a
                deep understanding of the body's needs and a passion for
                holistic wellness, Lavisha empowers clients to make informed
                dietary choices for optimal health and vitality. Join her on
                your journey to a healthier lifestyle and unlock the
                transformative power of nutrition for a vibrant life.
              </p>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dentist;
