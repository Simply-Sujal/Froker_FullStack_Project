import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:5000/v1/api/blog/getAllBlogs');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Failed to fetch blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    // Calculate the blogs for the current page
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className='w-full py-8'>
            <div className='max-w-[1320px] mx-auto'>
                <h1 className='uppercase text-4xl font-medium pt-8 text-slate-900 text-center'>
                    <span className='text-orange-500'>Froker</span> Blog
                </h1>
                <p className='text-center text-slate-800 font-medium text-5xl w-[800px] mx-auto pt-10 leading-relaxed'>
                    Articles covering the most recent updates and advancements
                </p>
                <div className='pt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {currentBlogs.length > 0 && (
                        <div className='md:col-span-1 bg-white shadow-md rounded-lg p-6 mb-6'>
                            <img src={currentBlogs[0].imageUrl} alt="" className='w-full h-96 object-cover rounded-md' />
                            <p className='text-orange-500 text-xl mt-2'>by {currentBlogs[0].author}</p>
                            <h2 className='text-2xl font-bold mb-2 mt-4'>Title : {currentBlogs[0].title}</h2>
                            <p className='text-gray-700'>{currentBlogs[0].content.slice(0, 15)}</p>
                            <p className='text-gray-500 text-sm'>Reading Duration: {currentBlogs[0].readingDuration}</p>
                            <Link to={`/blog/${currentBlogs[0]._id}`} className='text-orange-500 hover:underline cursor-pointer'>Read More..</Link>
                        </div>
                    )}
                    <div className='md:col-span-1 grid grid-cols-1 gap-6 '>
                        {currentBlogs.slice(1, 3).map((blog, index) => (
                            <div key={index} className='flex gap-5 bg-white shadow-md rounded-lg p-6 mb-6'>
                                <img src={blog.imageUrl} alt="" className='w-[400px] h-40 object-cover rounded-md' />
                                <div>
                                    <p className='text-orange-500 text-xl mt-2'>by {blog.author}</p>
                                    <h2 className='text-2xl font-bold mb-2 mt-4'>{blog.title.slice(0, 10)}</h2>
                                    <p className='text-gray-700'>{blog.content.slice(0, 20)}</p>
                                    <p className='text-gray-500 text-sm'>Reading Duration: {blog.readingDuration}</p>
                                    <Link to={`/blog/${blog._id}`} className='text-orange-500 hover:underline cursor-pointer'>Read More..</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className='text-4xl text-slate-900 font-medium pt-20 pb-10'>Recent Posts</h1>
                <div className='md:col-span-1 grid grid-cols-3 gap-6'>
                    {currentBlogs.map((blog, index) => (
                        <div key={index} className='gap-5 bg-white shadow-md rounded-lg p-6 mb-6'>
                            <img src={blog.imageUrl} alt="" className='w-[400px] h-40 object-cover rounded-md' />
                            <div>
                                <p className='text-orange-500 text-xl mt-2'>by {blog.author}</p>
                                <h2 className='text-2xl font-bold mb-2 mt-4'>{blog.title}</h2>
                                <p className='text-gray-700'>{blog.content}</p>
                                <p className='text-gray-500 text-sm'>Reading Duration: {blog.readingDuration}</p>
                                <Link to={`/blog/${blog._id}`} className='text-orange-500 hover:underline cursor-pointer'>Read More..</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-8'>
                    {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`mx-1 px-4 py-2 border rounded ${currentPage === i + 1 ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>


            <Newsletter />
        </section>
    );
};

export default Blogs;
