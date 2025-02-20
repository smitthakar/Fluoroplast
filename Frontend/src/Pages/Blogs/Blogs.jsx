import { useState } from "react";
import blog from "../../assets/blogimg.png"; // Update with actual image path
import BG from "../../assets/BG.png"; // Update with actual image path
import AvatarOne from "../../assets/AvatarOne.png"; // Update with actual image path
import Footer from "../../Components/Footer/Footer";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";
import Navbar from "../../Components/Navbar/Navbar";

// Generate an array of 12 blog posts
const blogPosts = new Array(12).fill({
  title: "Importers achieve cost savings through the First Sale rule!",
  date: "Jan 21, 2024",
  category: "Oil & Gas Insights",
  description:
    "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
  author: "Nakul Dholakiya",
  image: BG, // ✅ Ensure correct image path
});

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Pagination Logic
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
    <Navbar />
    <div className="p-9  w-[1432px] top-[114px] h-[2100px] left-[100px]  relative">
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
<a href="#" className="text-red-500 font-semibold mt-4 inline-block">
  Read More
</a>

  </div>
</div>

      {/* Blog Grid - 9 Cards per Page */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {currentPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden w-[450px] h-[470px] ">
            {/* Blog Image */}
            <img src={post.image} alt="Blog" className="w-[450px] h-[240px] object-cover" />

            {/* Blog Content */}
            <div className="p-4  w-[480px]">
              {/* Date & Category */}
              <p className="text-gray-500 text-xs">
                {post.date}
                <span className="text-red-500 font-semibold ml-[250px]">  {post.category}</span>
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold mt-2 border-l-2 border-red-500 pl-2 font-redhat">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-l mt-2">{post.description}</p>

              {/* Author Section */}
              <div className="mt-4 flex items-center">
                <img src={AvatarOne} alt="Author" className="w-6 h-6 rounded-full mr-2" />
                <p className="text-gray-700 text-xs font-medium">{post.author}</p>
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
