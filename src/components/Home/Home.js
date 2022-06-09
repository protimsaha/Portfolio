import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Projects from './Projects';
import Reviews from './Reviews';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Projects />
            <Reviews></Reviews>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;