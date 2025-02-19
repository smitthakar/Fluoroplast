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
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white w-full min-h-[900px] py-[112px] px-[144px] gap-[80px]">
        <div className="w-full lg:w-[50%] flex flex-col gap-6">
          <h3 className="text-red-600 font-semibold text-[24px] uppercase tracking-widest -mb-8">
            OUR HISTORY
          </h3>
          <h2 className="text-black font-extrabold text-[55px] leading-tight">
            Delivering Excellence
          </h2>
          <p className="text-gray-600 text-[16px] leading-[28px]">
            Welcome to Fluoroplast Engineers Private Limited (FEPL), your
            trusted partner for high-quality hydraulic seals. We’ve been in the
            business for 29 years, and during that time, we’ve built a
            reputation for providing exceptional products and unmatched customer
            service.
          </p>

          <p className="text-gray-600 text-[16px] leading-[28px]">
            Fluoroplast Engineers Private Limited (FEPL) was founded in 1994 by
            Mr. Ashwin Shah, a chemical science graduate with a passion for
            creating innovative sealing solutions. From the beginning, our
            company has been committed to using only the highest quality
            materials and cutting-edge technology to manufacture products that
            meet and exceed our customer&rsquo;s expectations.
          </p>

          <p className="text-gray-600 text-[16px] leading-[28px]">
            At Fluoroplast Engineers Private Limited (FEPL), we believe in
            putting our customers first. That’s why we’ve built our business on
            a foundation of honesty, integrity, and exceptional service. We’re
            not just a supplier – we’re a partner in your success, and we’re
            committed to working with you to find the right solutions for your
            unique needs.
          </p>
        </div>

        <div className="relative w-full lg:w-[50%] flex justify-center">
          <img src={Main} alt="Company Overview" className="rounded-lg w-full h-[600px] object-cover" />
        </div>
      </div>

       {/* Vision, Mission, Values Section */}
       <div className="w-full py-16 px-8 mb-[200px]">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vision */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <img src={vision} alt="Vision" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-black-600 font-bold text-2xl mb-2">Vision</h3>
            <p className="text-black-700 text-[16px] leading-[24px]">
              Envisioning the growth from exporting by increasing xx% in revenue
              and exporting in more than xx countries.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <img
              src={mission}
              alt="Mission"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-black-600 font-bold text-2xl mb-2">Mission</h3>
            <p className="text-black-700 text-[16px] leading-[24px]">
              To cater different industries and solve manufacturing issues by
              providing disruptive designs and innovative products.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center ">
            <img src={values} alt="Values" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-black-600 font-bold text-2xl mb-2">Values</h3>
            <p className="text-black-700 text-[16px] leading-[24px]">
              To serve the industry and clients by manufacturing products with
              utmost accuracy, sharpness, enthusiasm, and energy.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[-180px] relative w-full h-[1254px] bg-[#400000] flex flex-col items-center justify-center text-white">
      {/* Title */}
      <motion.h2 
        className="text-lg font-semibold uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        GLOBAL PRESENCE
      </motion.h2>

      <motion.h1
        className="text-3xl font-bold text-center mt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We Export & Cater To Following Countries
      </motion.h1>

      {/* CTA Button */}
      <button
  className="mt-4 pt-[16px] pb-[16px] pr-[16px] pl-[24px] gap-[8px] bg-white text-red-700 rounded-full font-semibold shadow-md border-[2px] border-red-700 transition-all duration-500 w-[200px] h-[50px] rounded-[48px]
  hover:bg-gradient-to-r hover:from-[#9D0A0E] hover:to-[#F15922] hover:text-white hover:shadow-lg flex items-center justify-center space-x-2 overflow-hidden group"
>
  <span className="whitespace-nowrap">Find A Distributor</span>
  {/* Sliding Custom Arrow (Appears on Hover) */}
  <img
    src={arr}
    alt="Arrow"
    className="w-[20px] h-[20px] transform translate-x-[-10px] opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:invert"
  />
</button>
      {/* Map Section with Background */}
      <div className="relative w-[100%] h-[70%] mt-8">
        <img
          src={map} // Using your uploaded image
          alt="Hexagonal World Map"
          className="w-[1920px] h-[899.7px] object-contain "
        />
      </div>
      </div>

      <div className="py-16 px-8 text-center">
        <motion.h3 className="text-red-600 font-semibold uppercase tracking-widest" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Awesome Members
        </motion.h3>
        <motion.h2 className="text-3xl font-bold mt-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          Meet Our Awesome And Expert Team Members
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {teamMembers.map((member, index) => (
            <motion.div key={index} className="bg-white p-4 rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1, duration: 0.3 }}>
              <img src={member.image} alt={member.name} className="rounded-md w-full h-[200px] object-contain" />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
