import React from 'react';
// import './banner.css'

const Banner = () => {
    return (
        <div className=' banner   drop-shadow-lg font-roboto'>
           
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero min-h-screen  relative" style={{backgroundImage: 'url(https://i.ibb.co/DKK3JHV/pexels-photo-205316.webp)'}}>
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-sm">
                            {/* <p className="mb-5 font-extrabold text-2xl  lg:text-3xl absolute  left-28 top-32 text-black lg:w-72 lg:mx-auto lg:top-20 lg:left-[37%]  md:text-black">A World of Wonders, Where Technology Meets Human Ingenuity.</p> */}
                            <img src="https://i.ibb.co/GJh6DLH/e56a29647ab8df7b3ecf521c837ccb44.jpg" className='h-44 absolute top-32 left-32 w-60 lg:hidden' alt="" />
                        </div>
                        </div>
                    </div>
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/vh9tGGj/57dadc44424423f5ddb137b6626ed81f.jpg)'}}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-sm">
                            <p className="mb-5 font-extrabold text-3xl">Tech Horizons, Discover What's Beyond, One Byte at a Time.</p>
                            
                        </div>
                        </div>
                    </div>
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Wt4GzRy/istockphoto-1205511045-612x612.jpg)'}}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-sm">
                            <p className="mb-5 font-extrabold text-3xl">Breaking Barriers with Bytes, Empowering Lives through Innovation.</p>
                        </div>
                        </div>
                    </div>
                </div> 
                <div id="item4" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/YDGcnB0/istockphoto-866072902-612x612.jpg)'}}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-sm">
                            <p className="mb-5 font-extrabold text-3xl">Unleash the Future, Tech Pioneers in Mobiles and Laptops Redefine the Game</p>
                            
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