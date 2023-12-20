import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Yoga3d = () => {
    return (
        <section className="about-Yoga3d-sec">
            <iframe
        title="Embedded Yoga3d"
        src="http://localhost:5174/"
        width="600"
        height="400"
        frameBorder="0"
        style={{ border: '1px solid #ccc' }}
      />
        </section>
    );
};

export default Yoga3d;