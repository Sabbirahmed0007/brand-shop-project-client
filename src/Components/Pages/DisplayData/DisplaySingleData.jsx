import React from 'react';
import { Link } from 'react-router-dom';

const DisplaySingleData = ({data}) => {
    // console.log(data);
    const {name, photo, description , brandName, price, rating, _id}=data;
    return (
        <div>
            <div className='my-10 mx-4 bg-slate-200 drop-shadow-lg rounded-md text-black py-3'>
                <img src={photo} alt="" className='w-full h-96 rounded-t-md' />
                <div className='mx-5 py-4'>
                    <h1 className='my-2 text-xl font-bold uppercase h-16'>{name}</h1>
                    <h3 className='font-semibold'><span className='font-bold'>Brand</span> : {brandName}</h3>
                    <h3 className='font-semibold my-1'><span className='font-bold'>Price</span> : {price}</h3>
                    <h3 className='font-semibold my-1'><span className='font-bold'>Rating</span> : {rating}</h3>
                    <h1 className='h-24'><ellipse title={description}>{description.slice(0,150)} ...</ellipse></h1>
                </div>
                <div className='grid grid-cols-2 mx-2 gap-2  my-5'>
                    <Link to={`/updatedata/${_id}`} className='btn w-full btn-warning font-bold capitalize '>Update</Link>
                    <Link to={`/details/${_id}`} className='btn w-full btn-secondary font-bold capitalize'>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default DisplaySingleData;