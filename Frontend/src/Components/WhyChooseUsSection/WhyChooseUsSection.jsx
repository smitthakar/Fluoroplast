import rightImage from "../../assets/right.png";
import backgroundImage from "../../assets/left.png"; // Left section background image
import qualityIcon from "../../assets/quality-icon.png";
import innovationIcon from "../../assets/innovation-icon.png";
import expertiseIcon from "../../assets/expertise-icon.png";
import customerFocusIcon from "../../assets/customer-focus-icon.png";
import { FaArrowRight } from "react-icons/fa";
import "./WhyChooseUsSection.css";

const WhyChooseUsSection = () => {
  return (
    <div className="why-choose-us">
      {/* Left Section */}
      <div className="why-choose-left">
        {/* Background Image */}
        <img src={backgroundImage} alt="Background" className="why-choose-bg" />

        {/* Section Content */}
        <h3 className="why-choose-subtitle">Why Choose Us</h3>
        <h2 className="why-choose-title">
          Providing Innovative &<br />
          Sustainable Solutions
        </h2>

        {/* Feature Items */}
        <div className="feature-container">
          <div className="feature-item">
            <img src={qualityIcon} alt="Quality" className="feature-icon" />
            <p className="feature-title">Quality</p>
          </div>
          <div className="feature-item">
            <img
              src={innovationIcon}
              alt="Innovation"
              className="feature-icon"
            />
            <p className="feature-title">Innovation</p>
          </div>
          <div className="feature-item">
            <img src={expertiseIcon} alt="Expertise" className="feature-icon" />
            <p className="feature-title">Expertise</p>
          </div>
          <div className="feature-item">
            <img
              src={customerFocusIcon}
              alt="Customer Focus"
              className="feature-icon"
            />
            <p className="feature-title">Customer Focus</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="custom-explor-btn">
          <button className="explor-btn">
            <span>Explore Industry</span>
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="why-choose-right">
        <img
          src={rightImage}
          alt="Industry Image"
          className="why-choose-image"
        />
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
