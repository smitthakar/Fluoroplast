import { useState } from "react";
import blog from "../../assets/blogimg.png";
import BG from "../../assets/BG.png";
import AvatarOne from "../../assets/AvatarOne.png";
import AvatarTwo from "../../assets/AvatarTwo.png";
import AvatarThree from "../../assets/AvatarThree.png";
import Footer from "../../Components/Footer/Footer";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";
import Navbar from "../../Components/Navbar/Navbar";
import arr from "../../assets/Arrow rigth.png";
import arrLeft from "../../assets/Arrow left.png";
import { Link } from "react-router-dom";
import "./Blog.css";
import MainBlog from "../../Components/MainBlog/MainBlog";

const featuredPosts = [
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

const dummyPostTemplate = {
  image: BG,
  date: "Jan 21, 2024",
  category: "Oil & Gas Insights",
  title: "Importers achieve cost savings through the First Sale rule!",
  description:
    "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
  author: "Dummy Author",
  authorImage: AvatarOne,
};

// Fill with dummy data (e.g., 90 posts)
const dummyPosts = new Array(90).fill(null).map((_, idx) => ({
  ...dummyPostTemplate,
  id: idx + 4, // IDs after featured ones (4,5,6...)
}));

// Merge featured + dummy
const blogPosts = [...featuredPosts, ...dummyPosts];


const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Pagination Logic
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const blogs = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderPagination = () => {
    const pages = [];

    // Left Arrow
    pages.push(
      <li key="prev">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-[54px] h-[54px] flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
        >
          <img src={arrLeft} alt="prev" />
        </button>
      </li>
    );

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(
          <li key={i}>
            <button
              onClick={() => handlePageChange(i)}
              className={`px-4 py-2 rounded-full transition-all w-[54px] h-[54px] ${
                currentPage === i ? "bg-red-500 text-white" : "bg-red-100"
              }`}
            >
              {i}
            </button>
          </li>
        );
      } else if ((i === currentPage - 2 || i === currentPage + 2) && totalPages > 5) {
        pages.push(
          <li key={`ellipsis-${i}`} className="px-4 w-[54px] h-[54px] rounded-full text-red-500 bg-red-100">
            <span className="text-3xl">...</span>
          </li>
        );
      }
    }

    // Right Arrow
    pages.push(
      <li key="next">
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-[54px] h-[54px] flex items-center justify-center bg-red-700 text-white rounded-full hover:bg-red-800 transition"
        >
          <img src={arr} alt="next" />
        </button>
      </li>
    );

    return pages;
  };

  return (
    <>
      <Navbar />
      <div className="article-section-container">
        {/* Title */}
        <h2 className="article-section-title">Blogs</h2>

        {/* Featured Blog */}
        <div className="article-container">
          <div className="article-image-section">
            <img src={blog} alt="Featured Blog" className="article-thumbnail" />
          </div>

          <div className="article-content-section">
            <div className="article-meta-info">
              <div className="article-date">Jan 21, 2024</div>
              <div className="article-category-tag">Oil & Gas Insights</div>
            </div>

            <h3 className="article-heading">
              Importers achieve cost savings through the First Sale rule!
            </h3>

            <p className="article-summary">
              Engineering plastics are high-performance materials with
              mechanical and thermal properties, used in automotive, aerospace,
              and electronics.
            </p>

            <Link to="/blog-details" className="article-read-more">
              Read More
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-10">
          {blogs.map((blog, index) => (
            <MainBlog key={index} blog={blog} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8">
          <ul className="flex space-x-2">{renderPagination()}</ul>
        </div>
      </div>

      <NeedHelp />
      <Footer />
    </>
  );
};

export default Blogs;
