import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Brand from '../Brand/Brand';

const Brands = () => {


    
    const [Brands, setBrands]= useState([]);

    useEffect(()=>{
        fetch(`brands.json`)
        .then(res=> res.json())
        .then(data=>{
            // console.log(data);
            setBrands(data);
        })
    },[])

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='mt-20 text-center'>
                <h1 className='uppercase font-extrabold text-2xl '> Discover Our Top Brands Collection</h1>
                <p className='mt-1 text-justify mx-2'>Explore a diverse range of top brands that offer quality and innovation. Our collection features renowned names in the world of technology, electronics, and more. From iconic household names to emerging trendsetters, our selection caters to all preferences. Whether you're looking for cutting-edge smartphones, high-performance computers, or premium audio equipment, you'll find it here. Each brand embodies a commitment to excellence, ensuring you have access to the latest products and technologies. Stay ahead of the curve and elevate your lifestyle with our top brands. Discover the best in the market, all in one place.




</p>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-3 my-10 justify-evenly items-center space-x-2 space-y-4'>
                {Brands.map(brand=><Brand key={brand.id} brand={brand}></Brand>)}
            </div>
        </div>
    );
};

export default Brands;