import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import automotive from "../../assets/automotiveOne.png";
import help from "../../assets/help.png";
import parts from "../../assets/partsOne.png";
import BG from "../../assets/BG.png";
import arrow from "../../assets/Arrow.png";

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
                    <div className="flex justify-end"><img src={arrow} alt="" /></div>
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
                className="bg-white shadow-lg rounded-lg overflow-hidden h-[500x] hover:bg-[#9D0A0E] hover:text-white transition-all duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-[390px]  h-[250px] object-cover"
                />
                <div className="px-[2px] ml-2 flex flex-col items-left text-left mt-1 w-[390px] h-[150px] ">
                  <h3 className="text-lg font-semibold w-[300px] mt-5">{event.title}</h3>
                  <span className="border mt-3 w-[70%] "></span>
                  <button className="mt-1 px-2 py-2 items-left text-left rounded">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-[190px] ml-[550px] ">
          <nav className="inline-flex space-x-2">
            <button className="px-3 py-2 bg-red-700 text-white rounded-full">
              ←
            </button>
            {[...Array(10).keys()].map((num) => (
              <button
                key={num}
                className="px-3 py-2 rounded-full bg-gray-200 hover:bg-red-700 hover:text-white"
              >
                {num + 1}
              </button>
            ))}
            <button className="px-3 py-2 bg-red-700 text-white rounded-full">
              →
            </button>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Event;
