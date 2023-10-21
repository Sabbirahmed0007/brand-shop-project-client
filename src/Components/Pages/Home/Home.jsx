import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../../Sections/Brands/Brands';
import Aboutus from '../../Sections/Aboutus/Aboutus';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Brands></Brands>
            <Aboutus></Aboutus>
            
        </div>
    );
};

export default Home;