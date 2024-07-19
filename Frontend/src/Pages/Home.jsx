import React from 'react'
import homepageimage from "../assets/homepageimage.png"
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <section className='w-full py-8'>
            <div className='max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between'>
                <div className='md:px-1 px-8 w-full md:w-[50%]'>
                    <h1 className='text-2xl md:text-3xl font-bold leading-tight mb-4'>
                        <span className='text-6xl md:text-7xl text-left md:text-center'>Elevate your</span> <br />
                        Influence {"<<"}
                        Connection {"<<"}
                        Earning!!
                    </h1>
                    <p className='text-xl text-slate-800 font-semibold'>Connect with top brands, expand reach & earn big!<br></br>
                        Simplify posting & sharing links with Froshare</p>

                    <div className='mt-10'>
                        <Link to="/blogs" className='text-xl text-slate-50 font-medium px-32 py-4 bg-orange-500 rounded-full'>
                            Explore Blogs
                        </Link>
                    </div>

                </div>
                <div className='mt-14 md:mt-0 flex justify-center md:justify-end px-8'>
                    <img src={homepageimage} alt="homepageimage" className='w-[600px] h-[600px]' />
                </div>
            </div>
        </section>
    )
}

export default Home
