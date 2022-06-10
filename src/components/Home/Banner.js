import React from 'react';
import './Banner.css'
import me from '../../image/dipu.jpg'

const Banner = () => {
    return (

        <div class="hero banner  min-h-[90vh] bg-base-100">

            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className=''>
                    <img src={me} class=" max-w-sm lg rounded-lg shadow-2xl" alt='' />
                </div>
                <div className=''>
                    <h1 class=" font-bold border p-3 mb-5 banner-title">PUSPOK PROTIM SAHA</h1>
                    <div>
                        <h2 className='uppercase text-3xl font-bold mt-6 text-white'>Working Technologies</h2>
                        <div className='flex flex-col p-5 m-5'>
                            <h2 className='text-3xl font-bold text-orange-300'>React JS</h2>
                            <h2 className='text-3xl font-bold text-orange-300'>Express JS</h2>
                            <h2 className='text-3xl font-bold text-orange-300'>Node JS</h2>
                            <h2 className='text-3xl font-bold text-orange-300'>Mongo DB</h2>
                        </div>
                    </div>
                    <a rel='noreferrer' target='_blank' href='./PUSPOK PROTIM SAHA resume (2).pdf' download> <button class="btn text-black bg-gradient-to-r from-secondary to-primary">Download Resume</button></a>
                </div>
            </div>
        </div>

    );
};

export default Banner;