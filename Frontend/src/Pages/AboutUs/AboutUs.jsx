import Main from "../../assets/AboutMain.svg";
import Navbar from "../../Components/Navbar/Navbar";
import vision from "../../assets/vision.png";
import mission from "../../assets/mission.png";
import values from "../../assets/value.png";
import { motion } from "framer-motion";
import one from "../../assets/One.png";
import two from "../../assets/Two.png";
import three from "../../assets/Three.png";
import four from "../../assets/Four.png";
import five from "../../assets/Five.png";
import Footer from "../../Components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa";
import "./AboutUs.css";
import GlobalPresence from "../../Components/GlobalPresence/GlobalPresence ";

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
      <div className="history-section">
        {/* Text Content */}
        <div className="history-content">
          <div className="history-header">
            <h3 className="history-subtitle">OUR HISTORY</h3>
            <h2 className="history-title">Delivering Excellence</h2>
          </div>
          <div className="his-para">
            <p className="history-paragraph">
              Welcome to Fluoroplast Engineers Private Limited (FEPL), your
              trusted partner for high-quality hydraulic seals. We’ve been in
              the business for 29 years, and during that time, we’ve built a
              reputation for providing exceptional products and unmatched
              customer service.
            </p>

            <p className="history-paragraph">
              Fluoroplast Engineers Private Limited (FEPL) was founded in 1994
              by Mr. Ashwin Shah, a chemical science graduate with a passion for
              creating innovative sealing solutions. From the beginning, our
              company has been committed to using only the highest quality
              materials and cutting-edge technology to manufacture products that
              exceed expectations.
            </p>

            <p className="history-paragraph">
              At Fluoroplast Engineers Private Limited (FEPL), we believe in
              putting our customers first. That’s why we’ve built our business
              on a foundation of honesty, integrity, and exceptional service.
              We’re not just a supplier – we’re a partner in your success, and
              we’re committed to working with you to find the right solutions
              for your unique needs.
            </p>
          </div>

          <div className="history-btn">
            <button className="history-btn">
              <span>Learn More</span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="history-image-container">
          <img src={Main} alt="Company Overview" className="history-image" />
        </div>
      </div>

      {/* Vision, Mission, Values Section */}
      <div className="about-container">
        {[
          {
            title: "Vision",
            desc: "Envisioning the growth from exporting by increasing xx% in revenue and exporting in more than xx countries.",
            img: vision,
          },
          {
            title: "Mission",
            desc: "To cater different industries and solve manufacturing issues by providing disruptive designs and innovative products.",
            img: mission,
          },
          {
            title: "Values",
            desc: "To serve the industry and clients by manufacturing products with utmost accuracy, sharpness, enthusiasm, and energy.",
            img: values,
          },
        ].map((item, index) => (
          <div key={index} className="about-card">
            <img src={item.img} alt={item.title} className="about-card-img" />
            <h3 className="about-card-title">{item.title}</h3>
            <p className="about-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="map-global">
        <GlobalPresence />
      </div>

      {/* Meet Our Team Section */}
      <div className="team-wrapper">
        <div className="team-heading">
          <motion.h3
            className="team-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Awesome Members
          </motion.h3>

          <motion.h2
            className="team-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Meet Our Awesome And Expert Team Members
          </motion.h2>
        </div>
        <div className="team-section">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="team-card-image"
              />
              <div className="team-card-content">
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-role">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
