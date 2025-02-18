import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

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
    fax: "",
    address: "",
    subject: "",
    message: "",
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
      <div className="w-full h bg-white mt-[60px]">
        {/* Contact Form Section */}
        <div className="flex flex-col lg:flex-row items-start justify-center px-[144px]  py-[112px] gap-[64px] w-full h-[1362px]">
          <div className="flex flex-col lg:flex-row items-start justify-center w-full h-[1142px] rounded-[8px] gap-[80px]">
            {/* Left Side: Contact Info */}
            <div className="w-full h-[1142px] lg:w-1/3 space-y-6 gap-[8px]">
              <div className="w-[528px] h-[528px] rounded-[8px] gap-[80px] ">
                <div>
                    
                </div>
                <h3 className="text-red-600 font-semibold text-xl uppercase">
                  Get in Touch
                </h3>
                <h2 className="text-4xl font-bold">Fluoroplast Engineers</h2>
                <p className="text-gray-600">
                  We are always ready to provide solutions for your problems.
                </p>

                {/* Address */}
                <div className="flex items-start space-x-4 w-[528px] h-[198px] rounded-[8px] p-[32px] gap-[24px]">
                  <FaMapMarkerAlt className="text-red-600 text-2xl mt-1" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-600">
                      11/14 Subhash Estate, Ramol Road, CTM, Amraiwadi,
                      Ahmedabad-380026 Gujarat, INDIA
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start space-x-4 w-[528px] h-[198px] rounded-[8px] p-[32px] gap-[24px]">
                  <FaPhoneAlt className="text-red-600 text-2xl mt-1" />
                  <div>
                    <h4 className="font-bold">Phone Number</h4>
                    <p className="text-gray-600">
                      +91-79 29752921 <br />
                      +91-79 29758345 <br />
                      +91-79 29757182
                    </p>
                  </div>
                </div>
              

              {/* Email Address */}
              <div className="flex items-start space-x-4 w-[528px] h-[198px] rounded-[8px] p-[32px] gap-[24px]">
                <FaEnvelope className="text-red-600 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold">Email Address</h4>
                  <p className="text-gray-600">
                    hiflon@hiflon.com <br />
                    sales@fluoroplastind.com
                  </p>
                </div>
              </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-2/3 bg-white space-y-6 "
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  value={formData.city}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State *"
                  value={formData.state}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                  required
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name *"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                  required
                />
                <input
                  type="text"
                  name="businessNature"
                  placeholder="Nature of Business *"
                  value={formData.businessNature}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                  required
                />
                <input
                  type="text"
                  name="fax"
                  placeholder="Fax"
                  value={formData.fax}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address *"
                  value={formData.address}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
                required
              />
              <textarea
                name="message"
                placeholder="Leave Your Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full h-32"
              ></textarea>

              <button
                type="submit"
                className="w-full md:w-auto bg-red-600 text-white py-3 px-6 rounded-full hover:bg-red-700 transition shadow-lg shadow-red-500/50"
              >
                Send a Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Section (Fixed) */}
        <div className="w-full h-[962px]">
          <iframe
            title="Google Map"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9038060980038!2d72.63585597476931!3d22.990564517522845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86113520c023%3A0xdd66aa70de283561!2sFluoroplast%20Engineers%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1739880463056!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
