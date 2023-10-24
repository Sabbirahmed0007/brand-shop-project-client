import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplaySingleData from './DisplaySingleData';

const DisplayData = () => {
    const loadedData= useLoaderData();

    // console.log(loadedData);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
            {
                loadedData.map(data=><DisplaySingleData key={data._id} data={data}></DisplaySingleData>)
            }
        </div>
    );
};

export default DisplayData;