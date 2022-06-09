import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className='feedback min-h-[60vh] '>
            <h2 className='uppercase text-4xl text-slate-900 font-semibold text-center'>Please give me a feedback</h2>
            <div className='flex-col flex '>
                <input type="text" placeholder="Your name" class="input input-bordered input-secondary mx-auto w-2/3 my-5" />
                <input type="text" placeholder="Your email" class="input input-bordered input-secondary mx-auto w-2/3 my-5" />
                <textarea className='border rounded-xl mx-auto w-2/3 my-5' name="" id="" cols="5" rows="5"></textarea>
                <button className='btn mx-auto w-1/2 my-5'>Submit</button>
            </div>
        </div>
    );
};

export default Testimonial;