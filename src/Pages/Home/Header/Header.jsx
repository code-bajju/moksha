import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.png';
import './Header.css';

const Header = () => {

    const { user, logout } = useAuth();
    const redirectToWebsite = () => {
    window.location.href = 'https://asana-sense.vercel.app/start';
  };

    return (
        <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className="container-head">
                   <Link to="/home"><Navbar.Brand ><img src={logo} alt="logo" /></Navbar.Brand></Link> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                           
                            <Link to="/start" className='list-item text-decoration-none'>Yoga</Link>
                            <Link to="/bmi" className='list-item text-decoration-none'>BMI & Diet</Link>
                            <Link to="/nutricount" className='list-item text-decoration-none'>Nutri Count</Link>
                            <Link to="/about" className='list-item text-decoration-none'>About Us</Link>
                            <Link to="/Disclaimer" className='list-item text-decoration-none'>Disclaimer</Link>
                            {user.email 
                            ?
                            <button type="button" className="btn btn-danger" onClick={logout}>Log Out</button>
                            :
                            <Link to="/login" type="button" className="btn btn-danger">Login</Link>
                            }
                            {user.email &&
                                <Navbar.Text><FontAwesomeIcon icon={faUser} /><span className="userName">{user.displayName}</span></Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;