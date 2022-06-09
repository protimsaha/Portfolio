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
                    <h1 class=" font-bold  banner-title">PUSPOK PROTIM SAHA</h1>
                    <p class="py-6 font-medium  text-2xl text-white">Hi , I am Puspok Protim Saha . I am a student of BSc in aeronautical engineering. I am a MERN stack web developer. I am developing websites since last year. I am passionate about building websites. I generally use React JS for the front-end, Express JS and Node JS for the backend, and MongoDB as my database. As a web developer, I want to explore many many new technologies in the future and work with them. </p>
                    <a rel='noreferrer' target='_blank' href='https://docs.google.com/document/d/1pr2BxXbXoDAgejEK0hK8Z88qTHUB7JWO3C3MhBxdqY4/edit?usp=sharing'> <button class="btn text-black bg-gradient-to-r from-secondary to-primary">View Resume</button></a>
                </div>
            </div>
        </div>

    );
};

export default Banner;