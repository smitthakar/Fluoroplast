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
import "./New&Event.css";
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
      <div className="event-container">
        <div className="event-grid">
          {/* Sidebar */}
          <div className="sidebar-category">
            <ul className="sidebar-list">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link to={category.path} className="sidebar-link">
                    {category.name}
                    <div className="sidebar-arrow">
                      <FaArrowRight />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {currentEvents.map((event, index) => (
              <div key={index} className="event-card group">
                <div className="event-image-wrapper relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image-default group-hover:opacity-1"
                  />
                  <img
                    src={hoverImages[index % hoverImages.length]}
                    alt={event.title}
                    className="event-image-hover"
                  />
                </div>
                <div className="event-content group-hover:bg-red-700 group-hover:text-white">
                  <h3 className="event-title">{event.title}</h3>
                  <span className="event-divider"></span>
                  <button className="event-explore-btn">
                    Explore
                    <span className="event-arrow group-hover:opacity-100">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination-container">
            <ul className="pagination-list">{renderPagination()}</ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Event;
