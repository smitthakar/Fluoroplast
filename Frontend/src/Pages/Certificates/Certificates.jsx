import  { useState } from "react";
import certificateImage from "../../assets/certificate.svg"; 
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Certificates.css";

const Certificates = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <Navbar />
      <div className="certificate-wrapper">
        <h2 className="certificate-title">Certificates</h2>

        <div className="certificate-grid">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="certificate-card"
              onClick={() => setActiveImage(certificateImage)}
            >
              <img
                src={certificateImage}
                alt="Certificate"
                className="certificate-img"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {activeImage && (
        <div className="zoom-overlay" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Zoomed Certificate" className="zoom-image" />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Certificates;
