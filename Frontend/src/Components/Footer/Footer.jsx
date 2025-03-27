
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import chatLogo from "../../assets/chatLogo.png";
import close from "../../assets/close.png";
import agent from "../../assets/agent.png";
import emoji from "../../assets/emoji.png";
import imgIcon from "../../assets/imgIcon.png";
import Arrowrigth from "../../assets/Arrow rigth.png";
import { FaArrowRight } from "react-icons/fa";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import LinkedIn from "../../assets/LinkedIn.svg";
import Twitter from "../../assets/Twitter.svg";
import Youtube from "../../assets/YouTube.svg";
import Logo from "../../assets/logo_all 1.png";
import call from "../../assets/call.png";
import email from "../../assets/mail.png";
import location from "../../assets/location.png";
import frame from "../../assets/Frame.png";
import "./Footer.css";

export default function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobile ,setIsMobile] = useState(false);
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


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    handleResize(); // Set on load
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
    <footer className="footer">
      <div className="footer-grid">
        {/* Left Section - Logo & About */}
        <div className="footer-left">
          <img src={Logo} alt="Fluoroplast Engineers" />
          <p>
            The active and knowledgeable entrepreneur is now the promoter of the
            company and displays sharpness, enthusiasm, and professionalism.
          </p>
          {/* Social Icons */}
          <div className="footer-social">
            {[Instagram, Facebook, Twitter, Youtube, LinkedIn].map(
              (icon, index) => (
                <div key={index}>
                  <img src={icon} alt="social-icon" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Our Company */}
        <div className="footer-company">
          <h3 className="footer-heading">Our Company</h3>
          <ul className="footer-links">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/aboutus" },
              { name: "Downloads", path: "/downloads" },
              { name: "Technical Documents", path: "/document" },
              { name: "Gallery", path: "/gallery" },
              { name: "Case Studies", path: "/coming-soon" },
              { name: "Contact Us", path: "/contact-us" },
            ].map((item, index) => (
              <li key={index}>
                › <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="footer-products">
          <h3 className="footer-heading">Products</h3>
          <ul className="footer-links">
            {[
              { name: "Engineering Plastics", link: "/coming-soon" },
              { name: "Hydraulic Seals", link: "/coming-soon" },
              {
                name: "Compressor Replacement Parts",
                link: "/coming-soon",
              },
              { name: "Hydraulic Cylinders", link: "/coming-soon" },
              {
                name: "FEP and PFA Lined Valves & Fittings",
                link: "/coming-soon",
              },
            ].map((item, index) => (
              <li key={index}>
                › <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3 className="footer-heading">Newsletter</h3>
          <p>
            Subscribe to our newsletter to get your weekly dose
            <br />
            of news, updates, tips, and special offers.
          </p>
          <div className="mt-5">
            <input type="email" placeholder="Enter your email address" />
            <div className="flex mt-3">
              <button className="subscribe-btn group">
                <span className="ml-2">Subscribe</span>
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-contact">
        {/* Email Section */}
        <div className="contact-item">
          <div>
            <img src={email} alt="email-icon" className="footer-icon" />
          </div>
          <div className="contact-text">
            <p>hiflon@hiflon.com</p>
            <p>sales@fluoroplastind.com</p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="contact-item">
          <div>
            <img src={call} alt="call-icon" className="footer-icon" />
          </div>
          <p className="contact-text contact-phone">
            +91-79 29752921, +91-79 29758345, +91-79 29757182
          </p>
        </div>

        {/* Address Section */}
        <div className="contact-item">
          <div>
            <img src={location} alt="location-icon" className="footer-icon1" />
          </div>

          <p className="contact-text">
            11/14 Subhash Estate, Ramol Road, CTM, Amraiwadi, Ahmedabad-380026
            Gujarat, INDIA
          </p>
        </div>
        {!isMobile && (
          <>
            <div>
              {isChatOpen && <div className="chat-bubble"></div>}
              <div
                className="chat-trigger"
                onClick={() => setIsChatOpen(!isChatOpen)}
              >
                <img src={frame} alt="Chat" />
              </div>
            </div>

            {/* Chatbox */}
            {isChatOpen && (
              <div className="chatbox">
                {/* Header */}
                <div className="chat-header">
                  <div className="flex flex-col items-center gap-1">
                    <img src={chatLogo} alt="Fluoroplast Engineers" />
                    <h2>Fluoroplast Engineers</h2>
                  </div>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="chat-close-btn"
                  >
                    <img src={close} alt="Close" />
                  </button>
                </div>

                {/* Messages */}
                <div className="chat-messages">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`chat-message ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.sender === "assistant" && (
                        <div className="chat-assistant">
                          <img
                            src={agent}
                            alt="Assistant"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-black">
                              Assistant
                            </span>
                            <div className="chat-assistant-msg">{msg.text}</div>
                            <span className="text-xs text-gray-500">
                              {msg.time}
                            </span>
                          </div>
                        </div>
                      )}
                      {msg.sender === "user" && (
                        <div className="chat-user">
                          <div className="chat-user-msg">{msg.text}</div>
                          <span className="text-xs text-gray-500">
                            {msg.time}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="chat-footer">
                  <button>
                    <img src={emoji} alt="" className="w-[40px]" />
                  </button>
                  <input
                    type="text"
                    placeholder="Reply ..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  />
                  <button>
                    <img src={imgIcon} alt="" className="w-[40px]" />
                  </button>
                  <button onClick={sendMessage}>
                    <img src={Arrowrigth} alt="" className="w-[40px]" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Copyright © 2025 Fluoroplast Engineers | All Rights Reserved
        </p>
        <div className="footer-bottom-right">
          <a href="#" className="footer-link">
            Terms and Conditions
          </a>
          <span className="divider"> | </span>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
