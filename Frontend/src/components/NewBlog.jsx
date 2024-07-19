import React, { useState } from 'react';

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [readingDuration, setReadingDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/v1/api/blog/postblog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, author, imageUrl, readingDuration }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Blog created:', data);
                setTitle('');
                setContent('');
                setAuthor('');
                setImageUrl('');
                setReadingDuration('');
            } else {
                console.error('Failed to create blog:', response.statusText);
            }
        } catch (error) {
            console.error('Failed to create blog:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter blog title"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter blog content"
                        rows="5"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter author name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter image URL"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Reading Duration</label>
                    <input
                        type="text"
                        value={readingDuration}
                        onChange={(e) => setReadingDuration(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter reading duration (e.g., 5 mins)"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Create Blog
                </button>
            </form>
        </div>
    );
};

export default NewBlog;
