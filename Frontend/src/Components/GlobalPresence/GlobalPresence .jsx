import { motion } from "framer-motion";
import map from "../../assets/map.png"
import { FaArrowRight } from "react-icons/fa";
import './GlobalPresence.css'
import { Link } from "react-router-dom";

const GlobalPresence = () => {
  return (
    <div className="global-presence-section">
  {/* Title */}
  <motion.h2
    className="global-presence-title"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    GLOBAL PRESENCE
  </motion.h2>

  <motion.h1
    className="global-presence-heading"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
  >
    We Export & Cater To Following Countries
  </motion.h1>

  {/* CTA Button */}
  <Link to="/coming-soon">  <button className="find-distributor-btn">
    Find A Distributor
    <span>
      <FaArrowRight />
    </span>
  </button>
  </Link>


  {/* Map Section */}
  <div className="map-container">
    <img src={map} alt="Hexagonal World Map" className="map-image" />
  </div>
</div>


  );
};

export default GlobalPresence;
