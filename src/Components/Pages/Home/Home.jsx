import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../../Sections/Brands/Brands';
import Aboutus from '../../Sections/Aboutus/Aboutus';
import { useLoaderData } from 'react-router-dom';
import Testimonials from '../../Sections/Testimonials/Testimonials';
import Contact from '../../Sections/Contact/Contact';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Aboutus></Aboutus>
            <Testimonials></Testimonials>
            <Contact></Contact>

            
        </div>
    );
};

export default Home;