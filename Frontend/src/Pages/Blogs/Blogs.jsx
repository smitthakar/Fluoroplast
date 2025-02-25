import { useState } from "react";
import blog from "../../assets/blogimg.png"; // Update with actual image path
import BG from "../../assets/BG.png"; // Update with actual image path
import AvatarOne from "../../assets/AvatarOne.png"; // Update with actual image path
import Footer from "../../Components/Footer/Footer";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const blogPosts = new Array(12).fill({
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

  return (
    <>
    <Navbar />
    <div className="p-9  w-[1432px] top-[114px] h-[2500px] left-[100px]  relative">
      {/* Title */}
       {/* Title */}
       <h2 className="text-3xl font-bold mb-6 font-redhat">Blogs</h2>

{/* Featured Blog */}
<div className=" w-[1350px] flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mb-10">
  {/* Image Section */}
  <div className="w-full md:w-[604px]">
    <img src={blog} alt="Gears" className="w-full h-[272px] object-cover" />
  </div>

  {/* Content Section */}
  <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
    {/* Date & Category */}
    <p className="text-gray-500 text-sm">
      Jan 21, 2024{" "}
      <span className="text-red-500 font-semibold ml-[10px]">   Oil & Gas Insights</span>
    </p>

    {/* Title */}
    <h3 className="text-3xl font-bold mt-2 border-l-4 border-red-800 pl-4 font-redhat">
      Importers achieve cost savings through <br /> the First Sale rule!
    </h3>

    {/* Description */}
    <p className="text-gray-600 text-m mt-2 pb-2 border-b border-gray-500">
  Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.
</p>

{/* Read More */}
<Link to="/blog-details" className="text-red-500 font-semibold mt-4 inline-block">
  Read More
</Link>

  </div>
</div>

      {/* Blog Grid - 9 Cards per Page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-10 w-full h-[667px]">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white h-[590px] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group  "
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[300px] object-cover"
            />

            {/* Bottom Section - Changes on Hover */}
            <div className="p-5 bg-white group-hover:bg-[#9D0A0E] transition-all duration-300 h-[343px] gap-[16px]">
              {/* Date & Category */}
              <p className="text-gray-500 text-sm group-hover:text-white transition-all duration-300 flex justify-between font-['Manrope']">
                {blog.date}{" "}
                <span className="text-red-500 font-medium group-hover:text-white font-['Manrope']">
                  {blog.category}
                </span>
              </p>

              {/* Title with Standing Line */}
              <h3 className="mt-2 font-['Manrope'] font-semibold text-[18px] leading-[25.2px] tracking-[0] text-black group-hover:text-white transition-all duration-300 relative pl-4">
                {/* Custom Rounded Vertical Border */}
                <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-red-600 group-hover:bg-white rounded-full font-['Manrope'] "></span>
                {blog.title}
              </h3>

              {/* Description */}
              <p className="mt-1 font-['Manrope'] font-semibold text-[16px] leading-[28px] tracking-[0] text-gray-600 group-hover:text-white transition-all duration-300 ">
                {blog.description}
              </p>

              {/* Author Info */}
              <div className="mt-5 flex items-center w-[326px] h-[40px] gap-[12px] ">
              <img
  src={blog.authorImage} // ✅ Corrected
  alt={blog.author}
  className="w-[40px] h-[40px] rounded-full mr-1"
/>
                <p className="text-gray-800  font-['Manrope'] font-medium group-hover:text-white transition-all duration-300 w-[412px] h-[28px] ">
                  {blog.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8">
        <ul className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i}>
              <button
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-full border border-red-500 transition-all ${
                  currentPage === i + 1
                    ? "bg-red-500 text-white"
                    : "bg-white text-red-500 hover:bg-red-100"
                }`}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
    <NeedHelp />
        <Footer />
    </>
  );
};

export default Blogs;
