import React from 'react';

const DisplaySingleData = ({data}) => {
    // console.log(data);
    const {name, photo, description , brandName, price, rating}=data;
    return (
        <div>
            <div className='my-10 mx-4 bg-slate-200 drop-shadow-lg rounded-md text-black'>
                <img src={photo} alt="" className='w-full h-80 rounded-t-md' />
                <div className='mx-5 py-4'>
                    <h1 className='my-2 text-xl font-bold uppercase h-16'>{name}</h1>
                    <h3 className='font-semibold'><span className='font-bold'>Brand</span> : {brandName}</h3>
                    <h3 className='font-semibold my-1'><span className='font-bold'>Price</span> : {price}</h3>
                    <h3 className='font-semibold my-1'><span className='font-bold'>Rating</span> : {rating}</h3>
                    <h1 className='h-24'><ellipse title={description}>{description.slice(0,150)} ...</ellipse></h1>
                </div>
            </div>
        </div>
    );
};

export default DisplaySingleData;