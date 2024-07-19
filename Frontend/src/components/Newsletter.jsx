import React from 'react';

const Newsletter = () => {
    return (
        <section className="bg-blue-50 py-10 mt-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between">
                    {/* Left Side: Newsletter Form */}
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">Subscribe to our newsletter to get the latest updates and news</h2>
                        <form className="flex items-center justify-center max-w-lg ">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="py-3 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-r-md transition duration-300 ease-in-out"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Illustration or Image */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
                        <img
                            src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1706767740/Frokerassets/OBJECTS_lpey0b.png"
                            alt="Newsletter froker"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;