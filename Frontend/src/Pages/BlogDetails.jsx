import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3; // Number of popular posts per page

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:5000/v1/api/blog/getsingleblog/${id}`);
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Failed to fetch blog:', error);
            }
        };

        const fetchAllBlogs = async () => {
            try {
                const response = await fetch('http://localhost:5000/v1/api/blog/getAllBlogs');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Failed to fetch blogs:', error);
            }
        };

        fetchBlog();
        fetchAllBlogs();
    }, [id]);

    const handleLike = async () => {
        try {
            const response = await fetch(`http://localhost:5000/v1/api/blog/${id}/like`, {
                method: 'PATCH',
            });
            const data = await response.json();
            setBlog(data);
        } catch (error) {
            console.error('Failed to like blog:', error);
        }
    };

    const handleUnlike = async () => {
        try {
            const response = await fetch(`http://localhost:5000/v1/api/blog/${id}/unlike`, {
                method: 'PATCH',
            });
            const data = await response.json();
            setBlog(data);
        } catch (error) {
            console.error('Failed to unlike blog:', error);
        }
    };

    if (!blog) {
        return <div>Loading...</div>;
    }

    // Calculate pagination for popular posts
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentPopularBlogs = blogs.filter(b => b._id !== blog._id).slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="max-w-6xl mx-auto mt-10 p-6 bg-white ">
            <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-96 object-cover rounded-md" />
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <p className="text-orange-500 text-xl">by {blog.author}</p>
                    <p className="text-gray-500 text-xl">Reading Duration: {blog.readingDuration}</p>
                </div>
                <div className="flex items-center mt-4">
                    <button
                        onClick={handleLike}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
                        Like
                    </button>
                    <button
                        onClick={handleUnlike}
                        className="bg-red-500 text-white px-4 py-2 rounded">
                        Unlike
                    </button>
                    <p className="ml-4 text-gray-600">Likes: {blog.likes}</p>
                </div>
            </div>
            <div className="mt-6 text-gray-700">{blog.content}</div>

            <h2 className="text-4xl font-bold mt-20">Popular Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {currentPopularBlogs.map((otherBlog) => (
                    <div key={otherBlog._id} className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <img src={otherBlog.imageUrl} alt="" className="w-full h-40 object-cover rounded-md" />
                        <div className="mt-4">
                            <p className="text-orange-500 text-xl">by {otherBlog.author}</p>
                            <h2 className="text-2xl font-bold mb-2">{otherBlog.title}</h2>
                            <p className="text-gray-700">{otherBlog.content.slice(0, 100)}...</p>
                            <p className="text-gray-500 text-sm">Reading Duration: {otherBlog.readingDuration}</p>
                            <Link to={`/blog/${otherBlog._id}`} className="text-orange-500 hover:underline cursor-pointer">Read More..</Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-8'>
                {Array.from({ length: Math.ceil((blogs.filter(b => b._id !== blog._id).length) / blogsPerPage) }, (_, i) => (
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
    );
};

export default BlogDetails;
