import React from 'react';
import Dentist from '../../../components/Dentist/Dentist';
import Feature from '../../../components/Feature/Feature';
// import LatestBlog from '../../../components/LatestBlog/LatestBlog';
// import Service from '../../../components/Service/Service';
import About from '../About/About';
// import Promo from '../Appoinment-promo/Promo';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
// import Slick from '../Slick/Slick';
import KommunicateChat from '../ChatBot/ChatBot';


const Home = () => {

    return (
        <>
           <Banner />
           <Feature />
           <About />
           {/* <Service /> */}
           <KommunicateChat/>
           <Dentist />
           <Appoinment />
           {/* <Promo /> */}
           {/* <Slick /> */}
        </>
    );
};

export default Home;