import BG from "../../assets/BG.png";
import AvatarOne from "../../assets/AvatarOne.png";
import AvatarTwo from "../../assets/AvatarTwo.png";
import AvatarThree from "../../assets/AvatarThree.png";
import { FaArrowRight } from "react-icons/fa";
import "./BlogSection.css";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: BG,
      date: "Jan 21, 2024",
      category: "Oil & Gas Insights",
      title: "Importers achieve cost savings through the First Sale rule!",
      description:
        "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
      author: "Rakesh Sheth",
      authorImage: AvatarOne,
    },
    {
      id: 2,
      image: BG,
      date: "Jan 21, 2024",
      category: "Oil & Gas Insights",
      title: "Importers achieve cost savings through the First Sale rule!",
      description:
        "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
      author: "Rahul How",
      authorImage: AvatarTwo,
    },
    {
      id: 3,
      image: BG,
      date: "Jan 21, 2024",
      category: "Oil & Gas Insights",
      title: "Importers achieve cost savings through the First Sale rule!",
      description:
        "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
      author: "Nakul Dholakiya",
      authorImage: AvatarThree,
    },
  ];

  return (
    <div className="blogs-container">
  {/* Section Title */}
  <div className="blogs-title-container">
    <p className="blogs-subtitle">Blogs</p>
    <h2 className="blogs-title">
      Insight, Industry Trends, Top <br /> News Headlines
    </h2>
  </div>

  {/* Blog Grid */}
  <div className="blogs-grid">
    {blogs.map((blog) => (
      <div key={blog.id} className="blog-card">
        {/* Blog Image */}
        <img src={blog.image} alt={blog.title} className="blog-image" />

        {/* Bottom Section */}
        <div className="blog-details">
          {/* Date & Category */}
          <p className="blog-meta">
            {blog.date} <span className="blog-category">{blog.category}</span>
          </p>

          {/* Title */}
          <h3 className="blog-title">{blog.title}</h3>

          {/* Description */}
          <p className="blog-description">{blog.description}</p>

          {/* Author Info */}
          <div className="blog-author">
            <img src={blog.authorImage} alt={blog.author} />
            <p>{blog.author}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* View All Button */}
  <div className="blogs-button-container">
    <button className="view-all-btn">
      <span>View All</span>
      <span>
        <FaArrowRight />
      </span>
    </button>
  </div>
</div>

  );
}
