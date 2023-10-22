import React from 'react';
import { Link } from 'react-router-dom';

const SingleBrandData = ({products}) => {
    console.log(products);
    const {brandName, category, photo, price, rating,name }= products;
    return (
        <div>
           
        {/* Products of brands */}
            <div className='my-7 rounded-lg shadow-xl py-4 '>
                <img src={photo} alt="" className='w-full h-96 rounded-t-lg'/>
                <div className='my-5 mx-4 drop-shadow-md'>
                    <h1 className='font-bold text-2xl my-2 h-20'>{name}</h1>
                    <h2 className='text-lg font-bold my-3'><span className='text-xl'>Brand</span> : {brandName}</h2>
                    <h2 className='text-[15px] uppercase font-bold my-2'>category: {category}</h2>
                    <h2 className='font-medium'><span className='font-bold'>Price</span>: {price}</h2>
                    <h2 className='font-medium my-2'><span className='font-bold'>Rating</span>: {rating}</h2>
                    <div className='grid grid-cols-2 mx-2 gap-2  my-5'>
                        <Link className='btn w-full btn-warning font-bold '>Updata</Link>
                        <Link className='btn w-full btn-secondary font-bold '>Details</Link>
                    </div>

                </div>
            </div>

            
        </div>
    );
};

export default SingleBrandData;