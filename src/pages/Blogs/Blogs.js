import React, { useEffect, useState } from "react";
import Blog from "../../components/Blog/Blog";
import "./Blosgs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="blog-header">
        <div className="container">
          <h1 clssName="my-2">
            Our <span className="fw-bold">Blogs</span>
          </h1>
          <p className="lead text-secondary">
            Read all the news about our company
          </p>
        </div>
      </div>
      <div className="container my-5 py-2">
        {blogs?.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
