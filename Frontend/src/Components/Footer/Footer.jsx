import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";
import Logo from "../../assets/logo_all 1.png";
import call from "../../assets/call.png";
import email from "../../assets/mail.png";
import location from "../../assets/location.png";
import frame from "../../assets/frame.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-20 pt-[90px] pb-[-40px]">
      <div className=" flex flex-wrap justify-between gap-y-10">
        {/* Left Section - Logo & About */}
        <div className="w-[25%]">
          <img
            src={Logo}
            alt="Fluoroplast Engineers"
            className="w-[381px] h-[87px] mb-6 ml-[-15px]"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            The active and knowledgeable entrepreneur is now the promoter of the
            company and displays sharpness, enthusiasm, and professionalism.
          </p>
          {/* Social Icons */}
          {/* Social Icons */}
          <div className="flex space-x-3 mt-6">
            {[LinkedIn, Instagram, Facebook, Twitter, Youtube].map(
              (icon, index) => (
                <div
                  key={index}
                  className="rounded-full flex items-center justify-center"
                >
                  <img
                    src={icon}
                    alt="social-icon"
                    className="rounded-[48px] h-[45px] w-[45px]"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Our Company */}
        <div className="w-[15%]">
          <h3 className="text-lg font-semibold mb-4">Our Company</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
    {[
      { name: "Home", path: "/" },
      { name: "About Us", path: "/aboutus" },
      { name: "Downloads", path: "/downloads" },
      { name: "Technical Documents", path: "/document" },
      { name: "Gallery", path: "/gallery" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Contact Us", path: "/contactus" },
    ].map((item, index) => (
      <li key={index} className="flex items-center gap-2">
        › <Link to={item.path} className="hover:text-white transition">{item.name}</Link>
      </li>
    ))}
  </ul>
        </div>

        {/* Products */}
        <div className="w-[20%]">
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
  {[
    { name: "Engineering Plastics", link: "/engineering-plastics" },
    { name: "Hydraulic Seals", link: "/hydraulic-seals" },
    { name: "Compressor Replacement Parts", link: "/compressor-replacement" },
    { name: "Hydraulic Cylinders", link: "/hydraulic-cylinders" },
    { name: "FEP and PFA Lined Valves & Fittings", link: "/fep-pfa-valves" },
  ].map((item, index) => (
    <li key={index} className="flex items-center gap-2">
      › <a href={item.link} className="hover:text-white transition duration-300">{item.name}</a>
    </li>
  ))}
</ul>

        </div>

        {/* Newsletter */}
        <div className="w-[30%]">
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Subscribe to our newsletter to get your weekly dose<br></br>of news,
            updates, tips, and special offers.
          </p>
          <div className="mt-5">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-[320px] px-4 py-3 rounded-md bg-white text-black text-sm focus:outline-none"
            />
            <button className="mt-4 w-[200px] bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-full font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex justify-between items-center mt-10  pt-6 ">
        {/* Email Section */}
        {/* Email Section */}
        <div className="flex items-center text-gray-400 w-[522px] h-[36px] gap-[16px]">
          <div className="p-1 rounded-full flex items-center justify-center w-12 h-12">
            <img
              src={email}
              alt="email-icon"
              className="w-[56px] h-[56px] object-contain"
            />
          </div>
          <div className="text-sm leading-relaxed">
            <p>hiflon@hiflon.com</p>
            <p>sales@fluoroplastind.com</p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex items-center text-gray-400 w-[522px] h-[36px] gap-16px">
          <div className=" p-1 rounded-full flex items-center justify-center">
            <img src={call} alt="" className=" w-[46px] h-[46px] object-contain" />
          </div>
          <p className="text-sm w-[450px] h-[28px]">
            +91-79 29752921, +91-79 29758345, +91-79 29757182
          </p>
        </div>

        {/* Address Section */}
        <div className="flex items-center text-gray-400 w-[522px] h-[36px] gap-[16px]">
          <div className=" p-1 rounded-full flex items-center justify-center">
            <img src={location} alt="" className=" w-[56px] h-[56px] object-contain" />
          </div>
          <p className="text-sm">
            11/14 Subhash Estate, Ramol Road, CTM, Amraiwadi, Ahmedabad-380026
            Gujarat, INDIA
          </p>
        </div>

        {/* Chat Icon - Corrected Alignment */}
        <div>
          <div className="flex items-center justify-center cursor-pointer rounded-full ">
            {/* Uncomment & Use an SVG or Image for Chat Icon */}
            <img src={frame} alt="Chat" className="w-[88px] h-[75px]  gap-[10px]" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className=" mt-4 text-gray-400 text-sm text-center border-t border-gray-700 pt-4 flex justify-between">
        <p className="w-[811px] h-[45px]">Copyright © 2024 Fluoroplast Engineers | All Rights Reserved</p>
        <div className="w-[578px]">
        <p className="space-x-2 ">
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </p>
        </div>
        
      </div>
    </footer>
  );
}
