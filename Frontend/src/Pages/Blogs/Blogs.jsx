import { useState } from "react";
import blog from "../../assets/blogimg.png"; // Update with actual image path
import BG from "../../assets/BG.png"; // Update with actual image path
import AvatarOne from "../../assets/AvatarOne.png"; // Update with actual image path
import Footer from "../../Components/Footer/Footer";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";
import Navbar from "../../Components/Navbar/Navbar";
import arr from "../../assets/Arrow rigth.png";
import arrLeft from "../../assets/Arrow left.png";
import { Link } from "react-router-dom";
import "./Blog.css"

const blogPosts = new Array(90).fill({
  image: BG,
  date: "Jan 21, 2024",
  category: "Oil & Gas Insights",
  title: "Importers achieve cost savings through the First Sale rule!",
  description:
    "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
  author: "Nakul Dholakiya",
  authorImage: AvatarOne,
});

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
    }
  };

  const renderPagination = () => {
    const pages = [];

    // Left Arrow
    pages.push(
      <li key="prev">
        <button onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1} className="w-[54px] h-[54px] flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition">
            <img src={arrLeft} alt="" />
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
                currentPage === i
                  ? "bg-red-500 text-white"
                  : "bg-red-100"
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
        <button onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages} className="w-[54px] h-[54px] flex items-center justify-center bg-red-700 text-white rounded-full hover:bg-red-800 transition">
            <img src={arr} alt="" />
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
            <img src={blog} alt="Gears" className="article-thumbnail" />
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

        {/* Blog Grid - 9 Cards per Page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-10 w-[1439px] h-[667px]">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white h-[590px] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[300px] object-cover"
              />

              <div className="p-5 bg-white group-hover:bg-[#9D0A0E] transition-all duration-300 h-[343px] gap-[16px]">
                <p className="text-gray-500 text-sm group-hover:text-white transition-all duration-300 flex justify-between">
                  {blog.date}
                  <span className="text-[#9D0A0E] font-medium group-hover:text-white">
                    {blog.category}
                  </span>
                </p>

                <h3 className="mt-2 font-semibold text-[18px] leading-[25.2px] tracking-[0] text-black group-hover:text-white relative pl-4">
                  <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-600 group-hover:bg-white "></span>
                  {blog.title}
                </h3>

                <p className="mt-1 font-semibold text-[16px] leading-[28px] tracking-[0] text-gray-600 group-hover:text-white">
                  {blog.description}
                </p>

                <div className="mt-5 flex items-center">
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-[40px] h-[40px] rounded-full mr-1"
                  />
                  <p className="text-gray-800 font-medium group-hover:text-white">
                    {blog.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center mt-8 ml-[650px]">
            <ul className="flex space-x-2">{renderPagination()}</ul>
          </div>
        </div>
      </div>

      <NeedHelp />
      <Footer />
    </>
  );
};

export default Blogs;