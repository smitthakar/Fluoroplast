import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import automotive from "../../assets/automotiveOne.png";
import help from "../../assets/help.png";
import parts from "../../assets/partsOne.png";
import BG from "../../assets/BG.png";
import arr from "../../assets/Arrow rigth.png";
import arrLeft from "../../assets/Arrow left.png";
import { FaArrowRight } from "react-icons/fa";
// import arrow from "../../assets/arrow.png";

const categories = [
  { name: "Latest News", path: "/news" },
  { name: "Upcoming Events", path: "/events" },
  { name: "Media Coverage", path: "/media" },
];

const allEvents = [
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
  { title: "Virtual Events, Webinars & Trade Shows", image: help },
  { title: "Virtual Events, Webinars & Trade Shows", image: parts },
  { title: "Virtual Events, Webinars & Trade Shows", image: BG },
  { title: "Virtual Events, Webinars & Trade Shows", image: automotive },
];

const hoverImages = [
  help,
  automotive, // Hover image 1
  BG,
  parts,
  help,
  automotive, // Hover image 1
  BG,
  parts
];


const Event = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Pagination Logic
  const totalPages = Math.ceil(allEvents.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentEvents = allEvents.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const pages = [];

    pages.push(
      <li key="prev">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-[54px] h-[54px] flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
        >
          <img src={arrLeft} alt="Previous" />
        </button>
      </li>
    );

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

    pages.push(
      <li key="next">
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-[54px] h-[54px] flex items-center justify-center bg-red-700 text-white rounded-full hover:bg-red-800 transition"
        >
          <img src={arr} alt="Next" />
        </button>
      </li>
    );

    return pages;
  };
  return (
    <>
      <Navbar />
      <div className="container  px-[144px] py-[112px] w-full h-[1500px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] w-[1232px] h-[1100px]">
          {/* Sidebar */}
          <div className="md:col-span-1 h-[228px] w-[290px] gap-[24px]">
            <ul className="space-y-1">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.path}
                    className=" p-3 bg-white-700 text-black rounded-lg border-[2px] hover:bg-red-800 hover:text-white transition flex justify-between items-center"
                  >
                    {category.name}
                    <div className="flex justify-end">
                     <FaArrowRight />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 h-auto w-[920px]">
            {currentEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden h-[390px] transition-all duration-300 group"
              >
                <div className="relative">
                  {/* Default Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-[390px] h-[250px] object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  {/* Hover Image */}
                  <img
                    src={hoverImages[index % hoverImages.length]}
                    alt={event.title}
                    className="w-[390px] h-[250px] object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-col items-left text-left w-[390px] h-[160px] hover:bg-red-700 hover:text-white transition relative">
                  <h3 className="text-lg font-semibold w-[240px] mt-5 ml-3 font-[\'Red Hat Display\'] ">
                    {event.title}
                  </h3>

                  {/* Centered Line */}
                  <span className="border mt-3 w-full mx-0"></span>

                  {/* Explore Button with Arrow on Hover */}
                  <button className="mt-3 ml-3 flex items-center justify-between w-[100px]">
                    Explore
                    <span className="ml-[190px] opacity-0 group-hover:opacity-100 ">
                    <FaArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center  ml-[650px]">
          <ul className="flex space-x-2">{renderPagination()}</ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Event;
