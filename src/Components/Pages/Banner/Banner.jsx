import React from 'react';
// import './banner.css'

const Banner = () => {
    return (
        <div className=' banner   '>
           
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JyxBn6r/istockphoto-535702471-612x612.jpg)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            
                        </div>
                        </div>
                    </div>
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/wzPm08H/download.jpg)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            
                        </div>
                        </div>
                    </div>
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Wt4GzRy/istockphoto-1205511045-612x612.jpg)'}}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            
                        </div>
                        </div>
                    </div>
                </div> 
                <div id="item4" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/YDGcnB0/istockphoto-866072902-612x612.jpg)'}}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <p className="mb-5">Unleash the Future: Tech Pioneers in Mobiles and Laptops Redefine the Game</p>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;