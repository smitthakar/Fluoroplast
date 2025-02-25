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
import { useState } from "react";
import chatLogo from "../../assets/chatLogo.png";
import close from "../../assets/close.png";
import agent from "../../assets/agent.png";
import emoji from "../../assets/emoji.png";
import imgIcon from "../../assets/imgIcon.png";
import Arrowrigth from "../../assets/Arrow rigth.png";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "user", text: "Hello, how are you doing?", time: "08:15 AM" },
    {
      sender: "assistant",
      text: "I'm doing well, thank you! How can I help you today?",
      time: "08:16 AM",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping] = useState(false);

  // Function to send a new message
  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([
        ...messages,
        { sender: "user", text: input, time: "08:17 AM" },
      ]);
      setInput(""); // Clear input after sending
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white px-20 pt-[90px] pb-[-40px]">
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
                ›{" "}
                <Link to={item.path} className="hover:text-white transition">
                  {item.name}
                </Link>
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
              {
                name: "Compressor Replacement Parts",
                link: "/compressor-replacement",
              },
              { name: "Hydraulic Cylinders", link: "/hydraulic-cylinders" },
              {
                name: "FEP and PFA Lined Valves & Fittings",
                link: "/fep-pfa-valves",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                ›{" "}
                <a
                  href={item.link}
                  className="hover:text-white transition duration-300"
                >
                  {item.name}
                </a>
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
            <div className="flex mt-3">
            <button className="w-[200px] h-[50px] rounded-full border-transparent bg-gradient-to-r from-[#9D0A0E] to-[#F15922] text-white font-semibold
                 transform flex items-center justify-center gap-2 group 
              hover:scale-105 hover:bg-white hover:bg-none hover:text-[#9D0A0E] hover:border-2 hover:border-[#9D0A0E]">
              
              Subscribe
            
              {/* Right Arrow - Appears and Moves Right on Hover */}
              <span className="opacity-0 transform translate-x-0 transition-all duration-300 ease-in-out text-[#9D0A0E] 
                  group-hover:opacity-100 group-hover:translate-x-2">
                <FaArrowRight />
              </span>
            
            </button>
            </div>
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
            <img
              src={call}
              alt=""
              className=" w-[46px] h-[46px] object-contain"
            />
          </div>
          <p className="text-sm w-[450px] h-[28px]">
            +91-79 29752921, +91-79 29758345, +91-79 29757182
          </p>
        </div>

        {/* Address Section */}
        <div className="flex items-center text-gray-400 w-[522px] h-[36px] gap-[16px]">
          <div className=" p-1 rounded-full flex items-center justify-center">
            <img
              src={location}
              alt=""
              className=" w-[56px] h-[56px] object-contain"
            />
          </div>
          <p className="text-sm">
            11/14 Subhash Estate, Ramol Road, CTM, Amraiwadi, Ahmedabad-380026
            Gujarat, INDIA
          </p>
        </div>

        {/* Chat Icon - Corrected Alignment */}
        {/* Chat Icon */}
        <div>
        {isChatOpen && <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-red-700 -mt-2 ml-7"></div>}
          <div
            className="flex items-center justify-center cursor-pointer rounded-full "
            onClick={() => {
              setIsChatOpen(!isChatOpen);
            }}
          >
            <img src={frame} alt="Chat" className="w-[88px] h-[75px]" />
          </div>
        </div>

      {/* Chatbox */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-20 w-80 top-[90px] shadow-xl rounded-2xl overflow-hidden z-50 ">
          {/* Header */}
          <div className="bg-gradient-to-r w-[450px] h-[140px] from-[#9D0A0E] to-[#F15922] text-white flex items-center justify-between px-4 ">
            <div className="flex flex-col items-center gap-1">
              <img src={chatLogo} alt="Fluoroplast Engineers" className="w-[60px] h-[80px] mr-28" />
              <h2 className="text-lg font-semibold text-center ml-2">Fluoroplast Engineers</h2>
            </div>

            {/* Close Button */}
            <button
                onClick={() => setIsChatOpen(false)}
                className="w-10 h-10 flex items-center justify-center focus:outline-none"
              >
                <img
                  src={close}
                  alt="Close"
                  className="w-6 h-6 mr-[250px] mb-6"
                />
              </button>
          </div>

          {/* Messages Section */}
          <div className="p-3 h-80 overflow-y-auto space-y-4 bg-gray-100">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                {msg.sender === "assistant" && (
                  <div className="flex items-start gap-2">
                    <img src={agent} alt="Assistant" className="w-8 h-8 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-black">Assistant</span>
                      <div className="bg-red-200 text-black p-2 rounded-lg max-w-xs rounded-bl-none">{msg.text}</div>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                  </div>
                )}
                {msg.sender === "user" && (
                  <div className="flex flex-col items-end">
                    <div className="bg-red-600 text-white p-2 rounded-lg max-w-xs rounded-br-none">{msg.text}</div>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                )}
              </div>
            ))}

            {/* Assistant Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start gap-2">
                <img src={agent} alt="Assistant" className="w-8 h-8 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-black">Assistant</span>
                  <div className="bg-red-200 p-2 rounded-lg max-w-xs flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="bg-[#9D0A0E] p-3 flex items-center rounded-b-lg">
            <button className="text-white text-xl mx-2"><img src={emoji} alt="" className="w-[40px]" /></button>
            <input type="text" className="w-full bg-transparent text-white placeholder-gray-300 px-2 focus:outline-none" placeholder="Reply ..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} />
            <button className="text-white text-xl mx-2"><img src={imgIcon} alt="" className="w-[40px]" /></button>
            <button className="text-white text-xl mx-2" onClick={sendMessage}><img src={Arrowrigth} alt="" className="w-[40px]" /></button>
          </div>
        </div>
      )}
      </div>

      {/* Copyright Section */}
      <div className=" mt-4 text-gray-400 text-sm text-center border-t border-gray-700 pt-4 flex justify-between">
        <p className="w-[811px] h-[45px]">
          Copyright © 2024 Fluoroplast Engineers | All Rights Reserved
        </p>
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
