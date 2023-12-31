import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import doctorfinding from '../../../Images/doctorfinding.c2532ac3.png';
import heroTeeth from '../../../Images/hero-theeth.54c2c4e9.png';
import womanbrush from '../../../Images/woman-brush.c4158ac5.png';
import hero from '../Banner/hero.png';
import './Banner.css';



const Banner = () => {
    return (
            <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <h2>Moksha</h2>
                                <h1>Empowering Holistic Wellness</h1>
                                <p className="mb-xs-5">
Fusing the Power of Yoga, Nutrition, and Dynamic Gym Exercises for Complete Well-being. </p>
                                <div className="banner-btn m-sm-auto">
                                    <Link to="/start"><button className="theme-btn btn-fill">Try Yoga</button></Link>
                                    <Link to="/about">   <button className='theme-btn2 bth-blank'>Learn More</button></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={6} className="mt-sm-5">
                          
                          <img className="hero-img" src={hero}></img>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Banner;