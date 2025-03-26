import { useState } from "react";
import aerospaceImg from "../../assets/Aerospace.png";
import industrialImg from "../../assets/Industrial.png";
import oilGasImg from "../../assets/Oil.png";
import chemicalImg from "../../assets/Chemical.png";
import arr from "../../assets/Arrow rigth.png";
import arrLeft from "../../assets/Arrow left.png";
import "./IndustriesServed.css";

const industries = [
  { name: "Automotive", src: chemicalImg },
  { name: "Aerospace", src: aerospaceImg },
  { name: "Industrial Machinery", src: industrialImg },
  { name: "Oil & Gas", src: oilGasImg },
  { name: "Chemical Processing", src: chemicalImg },
  { name: "Automotive", src: aerospaceImg },
  { name: "Automotive", src: chemicalImg },
  { name: "Aerospace", src: aerospaceImg },
  { name: "Industrial Machinery", src: industrialImg },
  { name: "Oil & Gas", src: oilGasImg },
  { name: "Chemical Processing", src: chemicalImg },
  { name: "Automotive", src: aerospaceImg },
];

const IndustriesCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = (e) => {
    e?.stopPropagation();
    setIndex((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = (e) => {
    e?.stopPropagation();
    setIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <div className="industries-section">
      <h3 className="industries-subtitle">INDUSTRIES SERVED</h3>
      <h2 className="industries-title">Our Best Industries</h2>

      <div className="industries-carousel">
        {/* Left Button */}
        <button
          className="nav-button nav-button-left"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            prevSlide();
          }}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <img src={arrLeft} alt="Previous" />
        </button>

        <div
          className="slide-track"
          style={{
            transform: `translateX(-${index * (100 / 6)}%)`,
            width: `${(industries.length * 100) / 6}%`,
          }}
        >
          {industries.map((industry, idx) => (
            <div key={idx} className="industry-slide">
              <img
                src={industry.src}
                alt={industry.name}
                className="industry-image"
              />
              <p className="industry-name">{industry.name}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          className="nav-button nav-button-right"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            nextSlide();
          }}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <img src={arr} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default IndustriesCarousel;
