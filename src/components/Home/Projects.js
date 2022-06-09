import React from 'react';
import portfolio1 from '../../image/Fiver 2.jpg'
import portfolio2 from '../../image/Fiver 4.jpg'
import portfolio3 from '../../image/portfolio.PNG'
import portfolio4 from '../../image/saha center.PNG'

const Projects = () => {
    return (
        <>
            <h1 className='my-8 text-5xl font-semibold text-center text-slate-600'>My Projects</h1>
            <div className='grid px-4 gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                <div class="  card my-5  bg-base-100 shadow-xl">
                    <figure class="px-2 pt-3">
                        <img src={portfolio1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-red-500 text-2xl uppercase">Fly Parts</h2>
                        <p className='text-xl'>This is a full-stack website with admin panel access and a payment gateway. Here users can buy aircrafts parts and make card payment.Admin control whole system and also can make new admin.</p>
                        <div class="card-actions">
                            <a className='mx-auto' href="https://assignment-12-836ed.web.app/" target='_blank' rel="noreferrer"> <button class="btn btn-outline">Live site</button></a>
                            <div className='flex '>
                                <a rel="noreferrer" target='_blank' className='mx-2' href="https://github.com/protimsaha/Fly-parts-client"><button class="btn btn-outline">github client</button></a>

                                <a rel="noreferrer" target='_blank' href="https://github.com/protimsaha/fly-parts-server"><button class="btn btn-outline">github server</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" card my-5  bg-base-100 shadow-xl">
                    <figure class="px-2 pt-3">
                        <img src={portfolio2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-red-500 text-2xl uppercase">ultimate bikes</h2>
                        <p className='text-xl'>This is a Full-stack website. This is a huge bike warehouse management website. The client can manage orders, and deliver and import bikes from here.</p>
                        <div class="card-actions ">
                            <a className='mx-auto' href="https://assignment-11-eb5e6.web.app/" target='_blank' rel="noreferrer">  <button class="btn btn-outline">Live site</button></a>

                            <div className='flex'>
                                <a rel="noreferrer" target='_blank' className='mx-2' href="https://github.com/protimsaha/Ultimate-bikes"><button class="btn btn-outline">github client</button></a>

                                <a rel="noreferrer" target='_blank' href="https://github.com/protimsaha/ultimates-bikes-server"><button class="btn btn-outline">github server</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card my-5  bg-base-100 shadow-xl">
                    <figure class="px-2 pt-3">
                        <img src={portfolio3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-red-500 text-2xl uppercase">swim trainer</h2>
                        <p className='text-xl'>This is a front-end website of an independent service provider. This is a swimming trainer’s website. </p>
                        <div class="card-actions">
                            <a href="https://assignment-10-6ef43.web.app/" target='_blank' rel="noreferrer">  <button class="btn btn-outline">Live site</button></a>
                            <a rel="noreferrer" target='_blank' href="https://github.com/protimsaha/the-swimming-trainer">   <button class="btn btn-outline">github</button></a>
                        </div>
                    </div>
                </div>
                <div class="card my-5  bg-base-100 shadow-xl">
                    <figure class="px-2 pt-3">
                        <img src={portfolio4} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-red-500 text-2xl uppercase">saha convention center</h2>
                        <p className='text-xl'>This is a convention center's website.Clients can book any package of the convention center.There are severel types of packages there.</p>
                        <div class="card-actions">
                            <a href="https://saha-convention-center.netlify.app/" target='_blank' rel="noreferrer"> <button class="btn btn-outline">Live site </button></a>
                            <a target='_blank' rel="noreferrer" href="https://github.com/protimsaha/saha-convention-center"><button class="btn btn-outline">github</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;