import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Brands = () => {
    const loadedBrands=useLoaderData();
    console.log(loadedBrands);
    return (
        <div>
            
        </div>
    );
};

export default Brands;