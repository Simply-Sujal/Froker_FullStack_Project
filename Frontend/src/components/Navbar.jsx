import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import frokerlogo from "../assets/frokerlogo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="relative bg-cover bg-center bg-no-repeat">
                <div className="container mx-auto flex items-center justify-between py-2 px-6 md:px-20">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <Link to="/"><img src={frokerlogo} alt="Froker Logo" className="w-auto h-auto" /></Link>
                    </div>

                    <div className="hidden md:flex space-x-12 text-xl">
                        <Link to="/" className="text-orange-500 hover:text-orange-600 font-medium">Home</Link>
                        <Link to="/blogs" className="text-orange-500 hover:text-orange-600 font-medium">Blogs</Link>
                        <Link to="/discoverfroker" className="text-orange-500 hover:text-orange-600 font-medium">Discover Froker</Link>
                    </div>


                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - shown on mobile */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col px-4 py-5 space-y-2 text-center text-xl gap-10 text-orange-500 font-medium bg-blue-50">
                        <Link to="/" className="">Home</Link>
                        <Link to="/blogs" className="">Blogs</Link>
                        <Link to="/discoverfroker" className="">Discover Froker</Link>
                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;