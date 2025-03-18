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
    <div className="custom-blog-section">
      <div className="custom-inner-blog-section">
        {/* Section Title */}
        <div className="custom-blog-header">
          <p className="custom-blog-subtitle">Blogs</p>
          <h2 className="custom-blog-title">
            Insight, Industry Trends, Top <br /> News Headlines
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="custom-blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="custom-blog-card">
              <img
                src={blog.image}
                alt={blog.title}
                className="custom-blog-img"
              />
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
                  <img src={blog.authorImage} alt={blog.author}  className="author-image"/>
                  <p className="author-name">{blog.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* View All Button */}
      <div className="custom-blog-btn-container">
        <button className="custom-blog-btn">
          <span>View All</span>
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}
