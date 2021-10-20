const Blog = ({ blog }) => {
  console.log(blog);
  const { title, img, description, updated } = blog;
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card mb-3" style={{ width: "70%" }}>
        <img src={img} className="card-img-top blog-img" />
        <div className="card-body card-desc">
          <h3 className="card-title text-color">{title}</h3>
          <p className="card-text text-secondary">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              Last updated {updated} months ago
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
