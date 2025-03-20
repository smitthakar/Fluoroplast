import "./MainBlog.css";

export default function MainBlog({ blog }) {
  return (
    <div className="custom-blog-card">
      <img src={blog.image} alt={blog.title} className="custom-blog-img" />
      <div className="custom-blog-content">
        <div className="custom-blog-meta-wrapper">
          <div className="custom-blog-meta">{blog.date}</div>
          <div className="custom-blog-category">{blog.category}</div>
        </div>
        <div className="custom-blog-title-wrapper">
          <span className="borderleft"></span>
          <h3 className="custom-blog-card-title">{blog.title}</h3>
        </div>

        <p className="custom-blog-description">{blog.description}</p>

        <div className="custom-blog-author">
          <img
            src={blog.authorImage}
            alt={blog.author}
            className="author-image"
          />
          <p className="author-name">{blog.author}</p>
        </div>
      </div>
    </div>
  );
}
