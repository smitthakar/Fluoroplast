import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import mail from "../../assets/mail.png";
import call from "../../assets/call.png";
import location from "../../assets/location.png";
import { FaArrowRight } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    companyName: "",
    businessNature: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    fax: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! 🚀");
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-wrapper">
          {/* Left Section */}
          <div className="contact-info">
            <div className="contact-details">
              {/* Address */}
              <div className="contact-card">
                <img src={location} alt="Location Icon" className="contact-icon" />
                <div className="contact-text">
                  <h4 className="contact-text-heading">Address</h4>
                  <p className="contact-text-para">11/14 Subhash Estate, Ramol Road, CTM, Amraiwadi, Ahmedabad-380026 Gujarat, INDIA</p>
                </div>
              </div>
              {/* Phone */}
              <div className="contact-card">
                <img src={call} alt="Phone Icon" className="contact-icon" />
                <div className="contact-text">
                  <h4 className="contact-text-heading">Phone Number</h4>
                  <div className="contact-text-para">
                  <p >+91-79 29752921</p>
                  <p>+91-79 29758345</p>
                  <p>+91-79 29757182</p>
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className="contact-card">
                <img src={mail} alt="Mail Icon" className="contact-icon" />
                <div className="contact-text">
                  <h4 className="contact-text-heading"> Email Address</h4>
                  <p className="contact-text-para" >hiflon@hiflon.com <br/>sales@fluoroplastind.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="contact-form-section">
            <div className="contact-heading">
              <h3 className="contact-head">Get in Touch</h3>
              <h2 className="contact-subHeading">Fluoroplast Engineers</h2>
              <p className="description-para">We are always ready to solution your all problems.</p>
            </div>
            <div className="contact-form">
            <form onSubmit={handleSubmit} >
              <div className="form-grid">
                <input type="text" name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} required />
                <input type="text" name="city" placeholder="City *" value={formData.city} onChange={handleChange} required />
                <input type="text" name="state" placeholder="State *" value={formData.state} onChange={handleChange} required />
                <input type="text" name="companyName" placeholder="Company Name *" value={formData.companyName} onChange={handleChange} required />
                <input type="text" name="businessNature" placeholder="Nature of Business *" value={formData.businessNature} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email *" value={formData.email} onChange={handleChange} required />
                <input type="text" name="fax" placeholder="Fax *" value={formData.fax} onChange={handleChange} required />
                <input type="text" name="address" placeholder="Your Address *" value={formData.address} onChange={handleChange} required />
              </div>

              <input type="text" name="subject" placeholder="Subject *" value={formData.subject} onChange={handleChange} required />
              <textarea name="message" placeholder="Leave Your Message (Optional)" value={formData.message} onChange={handleChange}></textarea>

              <button className="contact-btn" type="submit">
                <span>Send A Message</span>
                <span className="arrow-icon"><FaArrowRight /></span>
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section">
        <iframe
          title="Google Map"
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9038060980038!2d72.63585597476931!3d22.990564517522845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86113520c023%3A0xdd66aa70de283561!2sFluoroplast%20Engineers%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1739880463056!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
