import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BrandData = () => {
    const loadedData=useLoaderData()
    console.log(loadedData)
    return (
        <div>
            
        </div>
    );
};

export default BrandData;