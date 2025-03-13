import Main from "../../assets/AboutMain.png";
import Navbar from "../../Components/Navbar/Navbar";
import vision from "../../assets/vision.png";
import mission from "../../assets/mission.png";
import values from "../../assets/value.png";
import { motion } from "framer-motion";
import map from "../../assets/map.png";
import one from "../../assets/One.png";
import two from "../../assets/Two.png";
import three from "../../assets/Three.png";
import four from "../../assets/Four.png";
import five from "../../assets/Five.png";
import Footer from "../../Components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa";

const teamMembers = [
  { name: "Ananya Joshi", role: "Founder", image: one },
  { name: "Shaurya Basu", role: "Sr. Engineer", image: two },
  { name: "Rahul Verma", role: "Engineer", image: three },
  { name: "Nisha Joshi", role: "Sr. Engineer", image: four },
  { name: "Tushar Bajaj", role: "Engineer", image: five },
  { name: "Ananya Joshi", role: "Founder", image: one },
  { name: "Tushar Bajaj", role: "Engineer", image: five },
  { name: "Shaurya Basu", role: "Sr. Engineer", image: two },
  { name: "Rahul Verma", role: "Engineer", image: three },
  { name: "Nisha Joshi", role: "Sr. Engineer", image: four },
];

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* About Section */}
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1420px] mx-auto py-10 md:py-[112px] px-4 md:px-8 lg:px-[144px] gap-6">
        {/* Text Content */}
        <div className="w-full lg:w-[618px] flex flex-col gap-4 text-left">
        <h3 className="text-red-600 font-extrabold font-redhat text-lg md:text-xl lg:text-[24px] uppercase tracking-wide mt-20 md:mt-0">
  OUR HISTORY
</h3>

  <h2 className="text-[#070912] font-extrabold text-2xl md:text-4xl lg:text-[36px] leading-snug font-redhat">
    Delivering Excellence
  </h2>
  <p className="text-[#070912] font-normal text-[16px] tracking-[0] font-manrope 
               text-sm md:text-base leading-relaxed w-full lg:w-[618px] ">
    Welcome to Fluoroplast Engineers Private Limited (FEPL), your trusted partner for high-quality hydraulic seals.
    We’ve been in the business for 29 years, and during that time, we’ve built a reputation for providing exceptional 
    products and unmatched customer service.
  </p>
  <p className="text-[#070912] font-normal text-[16px] tracking-[0] font-manrope 
               text-sm md:text-base leading-relaxed w-full lg:w-[618px]">
    Fluoroplast Engineers Private Limited (FEPL) was founded in 1994 by Mr. Ashwin Shah, a chemical science graduate
    with a passion for creating innovative sealing solutions. From the beginning, our company has been committed to 
    using only the highest quality materials and cutting-edge technology to manufacture products that exceed expectations.
  </p>
  <p className="text-[#070912] font-normal text-[16px] tracking-[0] font-manrope 
               text-sm md:text-base leading-relaxed w-full lg:w-[618px]">
    At Fluoroplast Engineers Private Limited (FEPL), we believe in putting our customers first. That’s why we’ve built 
    our business on a foundation of honesty, integrity, and exceptional service. We’re not just a supplier – we’re a 
    partner in your success, and we’re committed to working with you to find the right solutions for your unique needs.
  </p>
</div>


        {/* Image Below Text in Mobile */}
        <div className="flex rounded-[8px] object-cover mr-[120px] w-[398px] h-[304px]
               lg:w-[802px] lg:h-[600px] lg:ml-[20px] lg:-mr-[120px] lg:rounded-[8px] 
                ">
          <img src={Main} alt="Company Overview" />
        </div>


      </div>

      {/* Vision, Mission, Values Section */}
      <div className="w-full max-w-[1250px] mx-auto px-4 md:px-8 lg:px-[144px] py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { title: "Vision", desc: "Envisioning the growth from exporting by increasing xx% in revenue and exporting in more than xx countries.", img: vision },
          { title: "Mission", desc: "To cater different industries and solve manufacturing issues by providing disruptive designs and innovative products.", img: mission },
          { title: "Values", desc: "To serve the industry and clients by manufacturing products with utmost accuracy, sharpness, enthusiasm, and energy.", img: values }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img src={item.img} alt={item.title} className="mx-auto w-16" />
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Global Presence Section */}
      <div className="w-full bg-[#400000] text-white py-16 text-center">
        <motion.h2 className="text-lg md:text-xl font-bold uppercase tracking-wider"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          GLOBAL PRESENCE
        </motion.h2>

        <motion.h1 className="text-3xl md:text-5xl font-bold mt-2"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          We Export & Cater To Following Countries
        </motion.h1>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-white text-red-700 font-semibold rounded-full flex items-center gap-2 hover:bg-red-700 hover:text-white transition">
          Find A Distributor <FaArrowRight />
        </button>

        {/* Map Section */}
        <div className="mt-10">
          <img src={map} alt="Global Map" className="w-full max-w-[800px] mx-auto" />
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="py-16 px-4 md:px-8 text-center">
        <motion.h3 className="text-red-600 font-semibold uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Awesome Members
        </motion.h3>

        <motion.h2 className="text-2xl md:text-3xl font-bold mt-2"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          Meet Our Awesome And Expert Team Members
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {teamMembers.map((member, index) => (
            <motion.div key={index} className="bg-white p-2 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1, duration: 0.3 }}>
              <img src={member.image} alt={member.name} className="rounded-md w-full h-[200px] object-cover" />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
