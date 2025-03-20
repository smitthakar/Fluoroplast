import BG from "../../assets/BG.png";
import AvatarOne from "../../assets/AvatarOne.png";
import AvatarTwo from "../../assets/AvatarTwo.png";
import AvatarThree from "../../assets/AvatarThree.png";
import { FaArrowRight } from "react-icons/fa";
import "./BlogSection.css";
import MainBlog from "../MainBlog/MainBlog";

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

        {/* Blog Grid with MainBlog */}
        <div className="custom-blog-grid">
          {blogs.map((blog) => (
            <MainBlog key={blog.id} blog={blog} />
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
