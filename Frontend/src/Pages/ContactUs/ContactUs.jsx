import { useState } from "react";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import mail from "../../assets/mail.png";
import call from "../../assets/call.png";
import location from "../../assets/location.png";

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
    fax : "",
    address : "",
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
      <div className="w-full h-[1366px] bg-white px-[144px] pt-[112px] -mb-[140px] gap-[64px] flex flex-col items-center">
       
        <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-10">
          {/* Left Section */}
          <div className="w-[400px] h-[1142px] gap-[8px] p-8 pt-[180px] rounded-lg ">
            {/* Address */}
            <div className="w-[400px] h-[582px] rounded-[8px] gap-[80px]">
            <div className="w-[378px] h-[198px] rounded-[8px] p-[32px] gap-[24px] flex items-start space-x-4">
             <img src= {location} alt="Mail Icon" className="w-[74px] h-[74px] rounded-[60px] p-[12px]" />
              <div className="w-[300px] h-[134px] rounded-[12px] gap-[8px] " >
                <h4 className="font-bold">Address</h4>
                <p className="text-gray-600">11/14 Subhash Estate, Ramol Road, CTM, Amraiwadi, Ahmedabad-380026 Gujarat, INDIA</p>
              </div>
            </div>

            {/* Phone */}
            <div className="w-[378px] h-[198px] rounded-[8px] p-[32px] gap-[24px] flex items-start space-x-4">
            <img src= {call} alt="Phone Icon" className="w-[74px] h-[74px] rounded-[60px] p-[12px]" />
              <div className="w-[300px] h-[134px] rounded-[12px] gap-[8px]" >
                <h4 className="font-bold">Phone Number</h4>
                <p className="text-gray-600">+91-79 29752921 </p>
                <p className="text-gray-600">+91-79 29758345  </p>
                <p className="text-gray-600">+91-79 29757182 </p>
              </div>
            </div>

            {/* Email */}
            <div className="w-[378px] h-[198px] rounded-[8px] p-[32px] gap-[24px] flex items-start space-x-4">
            <img src= {mail} alt="Mail Icon" className="w-[74px] h-[74px] rounded-[60px] p-[12px]" />
              <div className="w-[300px] h-[134px] rounded-[12px] gap-[8px] " >
                <h4 className="font-bold">Email Address</h4>
                <p className="text-gray-600">hiflon@hiflon.com / sales@fluoroplastind.com</p>
              </div>
            </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="w-[1024px] h-[1142px]  flex flex-col items-left">
            <div className=" w-[776px] h-[162px] gap-[8px] ">
            <h3 className="text-red-600 font-bold text-[24px] leading-[33.6px] tracking-wide uppercase text-center w-[187px] h-[42px] font-[\'Red Hat Display\'] text-left">Get in Touch</h3>
            <h2 className="font-[\'Red Hat Display\'] font-bold text-[60px] leading-[84px] tracking-normal w-[776px] h-[84px]  text-left">Fluoroplast Engineers</h2>
            <p className="font-[\'Manrope\'] font-normal text-[20px] leading-[28px] tracking-normal w-[776px] h-[28px] text-gray-600 text-left">We are always ready to solution your all problems.</p>
            </div>
          <form
            onSubmit={handleSubmit}
            className="w-[1024px] h-[920px] gap-[32px] rounded-lg space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <input type="text" name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} className=" p-[16px] pr-[24px] pl-[24px] rounded-lg w-[508px] h-[60px] border-[1px]" required />              
            <input type="text" name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} className=" p-[16px] pr-[24px] pl-[24px] rounded-lg w-[508px] h-[60px] border-[1px]" required />
              <input type="text" name="city" placeholder="City *" value={formData.city} onChange={handleChange} className=" p-[16px] pr-[24px] pl-[24px] rounded-lg w-[508px] h-[60px] border-[1px]" required />
              <input type="text" name="state" placeholder="State *" value={formData.state} onChange={handleChange} className=" p-[16px] pr-[24px] pl-[24px] rounded-lg w-[508px] h-[60px] border-[1px]" required />
              <input type="text" name="companyName" placeholder="Company Name *" value={formData.companyName} onChange={handleChange} className=" p-[16px] pr-[24px] pl-[24px] rounded-lg w-[508px] h-[60px] border-[1px]" required />
              <input type="text" name="businessNature" placeholder="Nature of Business *" value={formData.businessNature} onChange={handleChange} className=" p-[16px] pr-[24px] pl-[24px] rounded-lg w-[508px] h-[60px] border-[1px]" required />
              <input type="tel" name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} className=" p-[16px] pr-[24px] pl-[24px] rounded-lg w-[508px] h-[60px] border-[1px]" required />
              <input type="email" name="email" placeholder="Your Email *" value={formData.email} onChange={handleChange} className=" p-[16px] pr-[24px] pl-[24px] rounded-lg w-[508px] h-[60px] border-[1px]" required />
              <input type="tel" name="phone" placeholder="Fax *" value={formData.phone} onChange={handleChange} className=" p-[16px] pr-[24px] pl-[24px] rounded-lg w-[508px] h-[60px] border-[1px]" required />
              <input type="email" name="email" placeholder="Your Address *" value={formData.email} onChange={handleChange} className=" p-[16px] pr-[24px] pl-[24px] rounded-lg w-[508px] h-[60px] border-[1px]" required />
            </div>

            <input type="text" name="subject" placeholder="Subject *" value={formData.subject} onChange={handleChange} className="p-[16px] pr-[24px] pl-[24px] rounded-lg w-[1024px] h-[60px] border-[1px]" required />
            <textarea name="message" placeholder="Leave Your Message (Optional)" value={formData.message} onChange={handleChange} className="p-[16px] pr-[24px] pl-[24px] rounded-lg w-[1024px] h-[200px] border-[1px]"></textarea>

            <button type="submit" className="w-[250px] h-[60px] bg-gradient-to-r from-[#9D0A0E] to-[#F15922] text-white p-[16px] pr-[16px] pl-[24px] rounded-[48px] hover:opacity-90 transition shadow-lg shadow-red-500/50">
            Send a Message
          </button>
          </form>
        </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="w-full h-[962px]">
        <iframe
          title="Google Map"
          className="w-full h-full border-0"
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
