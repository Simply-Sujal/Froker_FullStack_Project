import React from 'react'
import { Link } from 'react-router-dom'

const DiscoverFroker = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 font-bold text-center'>
                Welcome to Discover Froker
            </h1>
            <div className='mt-10'>
                <Link to="/blogs" className='text-lg sm:text-xl md:text-2xl text-slate-50 font-medium px-8 sm:px-16 md:px-24 lg:px-32 py-2 sm:py-3 md:py-4 bg-orange-500 rounded-full hover:bg-orange-600 transition duration-300'>
                    Explore Blogs
                </Link>
            </div>
        </div>
    )
}

export default DiscoverFroker
