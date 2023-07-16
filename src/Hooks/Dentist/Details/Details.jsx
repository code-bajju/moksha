import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CalcButton } from '../../Diet/styles/Buttons';
import { useContext, useState } from 'react';
import MainContextProvider, { MainContext } from '../../Diet/context/MainContextProvider';
import female from '../../Diet/assets/female.png';
import male from '../../Diet/assets/male.png';

import { Col, Container, Row } from 'react-bootstrap';
import './Details.css';
import Results from '../../Diet/components/pages/ResultPage';
import Calculations from '../../Diet/components/pages/Calculations';
import BmiCalculator from '../../Diet/components/BmiCalculator';

const Details = () =>{


    return (
        <>

            <section className="dentist-details-sec">
                <Container>
                    <Row>
                        <Col md={7} lg={8}>
                            <div className="single-dentist-details">
                                <h2>Dr. Nathan Currie <span>(DMD, MS, DICOI)</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy.</p>
                            </div>
                            <div className="dentist-award">
                                <h3>Dental Associations</h3>
                                <ul className="p-0">
                                    <li>American Dental Association</li>
                                    <li>Academy of General Dentistry</li>
                                    <li>Carolina Dental Society</li>
                                    <li>Academy of General Dentistry</li>
                                    <li>American Association of Women Dentists</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="achivement-img-bg"></div>
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2>Experienced Dentist</h2>
                            <p>Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.</p>
                            <p>Dr. Harrie believes in providing her patients with more than just world class dental care. He also helps patients recognize the vital connection between dental health and whole body health. A graduate of the University of California’s School of Dentistry, Dr. Harrie is a leader in the movement to bring environmental sanity and well-being into the dental world for future.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
};

export default Details;