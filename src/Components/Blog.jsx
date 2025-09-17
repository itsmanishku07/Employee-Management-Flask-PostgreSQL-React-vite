import React, { useState, useEffect } from "react";

const Blog = () => {
  const [formData, setFormData] = useState({
    blogtitle: "",
    blogcontent: "",
    username: localStorage.getItem("username") || "",
  });
  const [blogs, setBlogs] = useState([]);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        username: localStorage.getItem("username")
      };

      const res = await fetch("https://dashboard-alpha-nine-93.vercel.app/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      setFormData({
        blogtitle: "",
        blogcontent: "",
        username: localStorage.getItem("username") || "",
      });

      fetchBlogs();
    } catch (err) {
      console.error(err);
      alert("Failed to post blog");
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch("https://dashboard-alpha-nine-93.vercel.app/allblogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Create Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="blogtitle"
              value={formData.blogtitle}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Content</label>
            <textarea
              name="blogcontent"
              value={formData.blogcontent}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="email"
              value={localStorage.getItem("username") || "anonymous"}
              disabled
              className="w-full px-3 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Post Blog
          </button>
        </form>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Blogs</h2>
        {blogs.length === 0 ? (
          <p className="text-gray-500 text-center">No blogs</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between"
              >
                <h3 className="text-xl font-bold text-blue-600 flex justify-between">
                  {blog.blogtitle}
                 {blog.username === localStorage.getItem("username") ? (
                    <a
                    className="text-xs text-red-600 hover:underline"
                    href={`http://127.0.0.1:5000/deleteblog/${blog.id}`}
                  >
                    Delete
                  </a>
                 ):(
                    <h1></h1>
                 )
                }
                  
                </h3>
                <p className="text-gray-700 mt-2">{blog.blogcontent}</p>
                <p className="text-sm text-gray-500 mt-4 flex justify-between">
                  <span>
                    Posted by:{" "}
                    <span className="font-semibold">{blog.username}</span>
                  </span>
                  <span className="font-semibold">{blog.postdate}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
