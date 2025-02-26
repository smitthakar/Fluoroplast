import Main from "../../assets/AboutMain.png";
import Navbar from "../../Components/Navbar/Navbar";
import vision from "../../assets/vision.png";
import mission from "../../assets/mission.png";
import values from "../../assets/value.png";
import { motion } from "framer-motion";
import map from "../../assets/map.png";
import arr from "../../assets/Arrow rigth.png";
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
      <div className="flex flex-row lg:flex-row  justify-between bg-white w-[1420px] h-[734px]  py-[112px] px-[144px] gap-[20px]">
        <div className="w-[618px] h-[537px]  flex flex-col gap-[40px]">
          <h3 className="text-red-600 font-extrabold text-[24px] uppercase tracking-[6%] w-[618px] h-[34px] font-redhat leading-[33.6px]">
            OUR HISTORY
          </h3>

          <h2 className="text-[#070912] font-extrabold text-[60px] leading-[24px] w-[618px] h-[84px] font-redhat tracking-[0]">
            Delivering Excellence
          </h2>

          <p className="text-[#070912] font-normal text-[16px] leading-[22.4px] w-[618px]  tracking-[0] font-manrope mt-[-40px]">
            Welcome to Fluoroplast Engineers Private Limited (FEPL), your
            trusted partner for high-quality hydraulic seals. We’ve been in the
            business for 29 years, and during that time, we’ve built a
            reputation for providing exceptional products and unmatched customer
            service.
          </p>

          <p className="text-[#070912] font-normal text-[16px] leading-[22.4px] w-[618px]  tracking-[0] font-manrope">
            Fluoroplast Engineers Private Limited (FEPL) was founded in 1994 by
            Mr. Ashwin Shah, a chemical science graduate with a passion for
            creating innovative sealing solutions. From the beginning, our
            company has been committed to using only the highest quality
            materials and cutting-edge technology to manufacture products that
            meet and exceed our customer&rsquo;s expectations.
          </p>

          <p className="text-[#070912] font-normal text-[16px] leading-[22.4px] w-[618px]  tracking-[0] font-manrope">
            At Fluoroplast Engineers Private Limited (FEPL), we believe in
            putting our customers first. That’s why we’ve built our business on
            a foundation of honesty, integrity, and exceptional service. We’re
            not just a supplier – we’re a partner in your success, and we’re
            committed to working with you to find the right solutions for your
            unique needs.
          </p>
        </div>

        <div className="flex rounded-[8px] object-cover w-[802px] h-[600px] ml-[20px] -mr-[120px]">
          <img src={Main} alt="Company Overview" />
        </div>
      </div>

      {/* Vision, Mission, Values Section */}
      <div className="w-[1420px] justify-center h-[495px] py-[80px] px-[144px] ">
        <div className="w-[1250px] h-[235px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vision */}
          <div className="bg-white rounded-[12px] shadow-lg p-[32px] text-center w-[410px] h-[235.25px] gap-[16px]">
            <img src={vision} alt="Vision" className="m-auto w-[60px] h-[60px] gap-[8px] px-[2px] py-[3px]" />
            <h3 className="text-black font-semibold text-[30px] leading-[42px] tracking-[0] text-center mb-2 font-[\'Red Hat Display \']">
              Vision
            </h3>

            <p className="text-[#070912] font-normal text-[16px] leading-[22.4px] tracking-[0] text-center font-manrope">
              Envisioning the growth from exporting by increasing xx% in revenue
              and exporting in more than xx countries.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-[12px] shadow-lg p-[32px] text-center w-[410px] h-[235.25px] gap-[16px]">
            {" "}
            <img
              src={mission}
              alt="Mission"
              className="m-auto w-[60px] h-[60px] gap-[8px] px-[2px] py-[3px]"
            />
            <h3 className="text-black font-semibold text-[30px] leading-[42px] tracking-[0] text-center mb-2 font-[\'Red Hat Display \']">
              Mission
            </h3>
            <p className="text-[#070912]  font-normal text-[16px] leading-[22.4px] tracking-[0] text-center font-manrope">
              To cater different industries and solve manufacturing issues by
              providing disruptive designs and innovative products.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-[12px] shadow-lg p-[32px] text-center w-[410px] h-[235.25px] gap-[16px]">
            {" "}
            <img src={values} alt="Values" className="m-auto w-[60px] h-[60px] gap-[8px] px-[2px] py-[3px]" />
            <h3 className="text-black font-semibold text-[30px] leading-[42px] tracking-[0] text-center mb-2 font-[\'Red Hat Display \']">
              Values
            </h3>
            <p className="text-[#070912] font-normal text-[16px] leading-[22.4px] tracking-[0] text-center font-manrope">
              To serve the industry and clients by manufacturing products with
              utmost accuracy, sharpness, enthusiasm, and energy.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[-140px] relative w-full h-[1154px] bg-[#400000] flex flex-col items-center justify-center text-white pt-[200px]">
        {/* Title */}
        <motion.h2
          className="text-[24px] leading-[33.6px] font-extrabold uppercase text-center -mt-[240px] tracking-[0.06em] font-redhat"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          GLOBAL PRESENCE
        </motion.h2>

        <motion.h1
          className="text-[60px] leading-[84px] font-bold text-center mt-2 font-redhat"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We Export & Cater To Following Countries
        </motion.h1>

        {/* CTA Button */}

        <button
          className="w-[250px] h-[60px] px-[24px] py-[16px] rounded-[48px] border-[2px] mt-[20px] border-[#9D0A0E] bg-white text-[#9D0A0E] font-semibold font-['Manrope'] shadow-md 
        ease-in-out relative flex items-center justify-center gap-2 group 
        hover:bg-gradient-to-r hover:from-[#9D0A0E] hover:to-[#F15922] hover:text-white"
        >
          Find A Distributor
          {/* Right Arrow - Initially Hidden, Appears & Moves on Hover */}
          <span
            className="opacity-0 transform translate-x-0 transition-all duration-300 ease-in-out text-white 
            group-hover:opacity-100 group-hover:translate-x-2"
          >
            <FaArrowRight />
          </span>
        </button>
        {/* Map Section with Background */}
        <div className="relative w-[100%] h-[60%] ">
          <img
            src={map} // Using your uploaded image
            alt="Hexagonal World Map"
            className="w-[1220px] h-[899.7px] object-contain ml-[10%]"
          />
        </div>
      </div>

      <div className="py-16 px-8 text-center">
        <motion.h3
          className="text-red-600 font-semibold uppercase tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Awesome Members
        </motion.h3>
        <motion.h2
          className="text-3xl font-bold mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Meet Our Awesome And Expert Team Members
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-md w-full h-[200px] object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
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
