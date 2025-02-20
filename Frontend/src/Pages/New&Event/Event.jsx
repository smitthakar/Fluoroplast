import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import automotive from "../../assets/automotiveOne.png";
import help from "../../assets/help.png";
import parts from "../../assets/partsOne.png";
import BG from "../../assets/BG.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import arrow from "../../assets/arrow.png";

const categories = [
  { name: "Latest News", path: "/news" },
  { name: "Upcoming Events", path: "/events" },
  { name: "Media Coverage", path: "/media" },
];

const events = [
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
            {events.map((event, index) => (
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
                  <button className="mt-3 ml-3 flex items-center justify-between w-[100px] transition-all duration-300">
                    Explore
                    <span className="ml-[190px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-[180px] ml-[550px] ">
          <nav className="inline-flex space-x-2">
            <button className="p-[17px] w-[54px] h-[54px] rounded-[600px] gap-[10px]  bg-red-700 text-white ">
            <FaArrowLeft />
            </button>
            {[...Array(10).keys()].map((num) => (
              <button
                key={num}
                className=" h-[50px] w-[50px] top-[52px] font-[\'manrope\'] rounded-full font-bold bg-gray-200 hover:bg-red-700 hover:text-white"
              >
                {num + 1}
              </button>
            ))}
            <button className=" p-[17px]  w-[54px] h-[54px] rounded-[600px] gap-[10px] bg-red-700 text-white ">
              <FaArrowRight />
            </button>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Event;
