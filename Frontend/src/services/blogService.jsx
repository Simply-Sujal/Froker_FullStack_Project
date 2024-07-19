
export const getBlogs = async () => {
    const response = await fetch('http://localhost:5000/v1/api/blog/getAllBlogs');
    return response.json();
};

export const likeBlog = async (id) => {
    const response = await fetch(`http://localhost:5000/v1/api/blog/${id}/like`, {
        method: 'PATCH',
    });
    return response.json();
};

export const unlikeBlog = async (id) => {
    const response = await fetch(`http://localhost:5000/v1/api/blog/${id}/unlike`, {
        method: 'PATCH',
    });
    return response.json();
};