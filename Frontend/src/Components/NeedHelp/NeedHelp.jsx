// import backgroundImage from "../../assets/help.png";
import { FaArrowRight } from "react-icons/fa";
import "./NeedHelp.css";

export default function CallToAction() {
  return (
    <div className="cta-container">
  {/* CTA Content */}
  <div className="cta-content">
    <h2>Need Help? Call Us Today</h2>
  </div>

  {/* CTA Button */}
  <div className="cta-button-container">
    <button className="cta-button">
      Let&apos;s Talk
      <span>
        <FaArrowRight />
      </span>
    </button>
  </div>
</div>

  );
}