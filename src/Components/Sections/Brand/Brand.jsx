import React from 'react';

const Brand = ({brand}) => {

    // console.log(brand)
    const {brandName, brandImage}=brand;

    return (
        <div className='text-center h-52 flex-1 shadow-lg p-3 rounded-lg bg-slate-100 drop-shadow-lg'>
            <img src={brandImage} alt="" className='w-30 h-24 mx-auto rounded-2xl'/>
            <h2 className='text-3xl font-bold text-violet-600 my-5'>{brandName}</h2>
        </div>
    );
};

export default Brand;