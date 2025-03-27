import React from 'react';
import { Link } from 'react-router-dom';
import './UnderConstruction.css';

import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import LinkedIn from "../../assets/LinkedIn.svg";
import Twitter from "../../assets/Twitter.svg";
import Youtube from "../../assets/YouTube.svg";

const UnderConstruction = () => {
  return (
    <div className="uc-wrapper" style={{ fontFamily: 'Red Hat Display, sans-serif' }}>
      <div className="uc-overlay "></div>
      <div className="uc-container">
        <h1 className="uc-title"  style={{ fontFamily: 'Red Hat Display, sans-serif' }}> UNDER CONSTRUCTION </h1>
        <h2 className="uc-subtitle">We're working hard to launch soon!</h2>

        <div className="uc-progress-bar">
          <div className="uc-progress"></div>
        </div>
        <div className="uc-progress-labels" style={{ fontFamily: 'Manrope, sans-serif' }}>
          <span>0%</span>
          <span>100%</span>
        </div>

        <div className="uc-button-group">
          <Link to="/" className="uc-notify-btn">Home</Link>
        </div>

        <p className="uc-message mt-10" style={{ fontFamily: 'Manrope, sans-serif' }}>Subscribe to get notified when we launch.</p>

        <div className="uc-social-icons">
          <a href="#"><img src={Facebook} alt="Facebook" /></a>
          <a href="#"><img src={LinkedIn} alt="LinkedIn" /></a>
          <a href="#"><img src={Instagram} alt="Instagram" /></a>
          <a href="#"><img src={Twitter} alt="Twitter" /></a>
          <a href="#"><img src={Youtube} alt="YouTube" /></a>
        </div>

        <div className="uc-footer" style={{ fontFamily: 'Manrope, sans-serif' }}>
          &copy; 2025 by Under Construction. Powered and secured by Fluroplast Eng.
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;