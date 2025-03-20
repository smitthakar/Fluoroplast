import certificateImage from "../../assets/certificate.png"; 
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Certificates.css";

const Certificates = () => {
  return (
    <>
    <Navbar/>
    <div className="certificate-wrapper">
  <h2 className="certificate-title">Certificates</h2>

  <div className="certificate-grid">
    {[...Array(7)].map((_, index) => (
      <div key={index} className="certificate-card">
        <img
          src={certificateImage}
          alt="Certificate"
          className="certificate-img"
        />
      </div>
    ))}
  </div>
</div>

    <Footer/>
    </>
  );
};

export default Certificates;
