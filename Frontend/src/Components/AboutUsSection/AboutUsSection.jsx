import newImage from "../../assets/Group 1.png"; // Your combined image
import { FaArrowRight } from "react-icons/fa6";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <div className="about-section">
  {/* Right Content - Text */}
  <div className="about-text-content">
    <h3 className="about-subtitle">About Us</h3>
    <h2 className="about-title">Delivering Excellence</h2>

    <p className="about-primary-text">
      All the parts are available as per the customer design, drawing & sample with
      <span className="highlighted-text"> 100% PTFE as well as filled grade PTFE</span>.
    </p>

    <p className="about-description">
      Fluoroplast Engineers Pvt Ltd (FEPL), established in 1994, is a leading manufacturer of PTFE and specialty products.
      With a strong commitment to quality and innovation, FEPL has grown from a small venture to a trusted global supplier of PTFE products and compressor spares for major industries.
    </p>

    <p className="about-description">
      Based in Ahmedabad, Gujarat, India, the company has been serving the market since 1996, consistently delivering efficient and high-quality solutions to meet customer needs.
      FEPL continues to expand its reach, developing export markets worldwide.
    </p>

    <button className="learn-more-btn">
      <span className="ml-4">Learn More</span>
      <span>
        <FaArrowRight />
      </span>
    </button>
  </div>

  {/* Left Content - Image */}
  <div className="about-image-container">
    <img src={newImage} alt="Company Overview" className="about-image" />
  </div>
</div>

  );
};

export default AboutUsSection;
