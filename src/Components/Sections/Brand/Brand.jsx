import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({brand}) => {

    // console.log(brand)
    const {brandName, brandImage}=brand;

    return (
        <div className='text-center h-52  shadow-lg p-3 rounded-lg bg-slate-100 drop-shadow-lg'>
            <img src={brandImage} alt="" className='w-30 h-24 mx-auto rounded-2xl'/>
            <Link to={`/branddata/${brandName}`} className='text-xl font-bold h-8 text-green-600 my-5 btn bg-white hover:bg-slate-200 drop-shadow-xl'>{brandName}</Link>
        </div>
    );
};

export default Brand;