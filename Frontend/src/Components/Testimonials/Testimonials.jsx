import { useEffect, useState } from "react";
import test1 from "../../assets/test1.png";
import test2 from "../../assets/test7.png";
import test3 from "../../assets/test3.png";
import test4 from "../../assets/test4.png";
import test5 from "../../assets/test5.png";
import test6 from "../../assets/test6.png";
import test7 from "../../assets/test2.png";
import quoteOpen from "../../assets/quoteOpen.png";
import arr from "../../assets/Arrow rigth.png";
import arrLeft from "../../assets/Arrow left.png";
import { FaArrowRight } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    text: "Fluoroplast Engineers consistently delivers high-quality fluoropolymer products. Their precision and durability have significantly improved our manufacturing process.",
    name: "Heema Sheth",
    role: "Co-owner",
    image: test1,
  },
  {
    text: "The team at Fluoroplast Engineers is highly responsive and knowledgeable.",
    name: "Rohan Dave",
    role: "CEO",
    image: test2,
  },
  {
    text: "Fluoroplast Engineers' expertise in fluoropolymer technology helped us develop a superior product. Their engineering support was invaluable.",
    name: "Karan Patel",
    role: "Engineer",
    image: test3,
  },
  {
    text: "We needed a custom PTFE solution, and Fluoroplast Engineers exceeded our expectations with their precision and attention to detail.",
    name: "Janki Verma",
    role: "Sr. Engineer",
    image: test4,
  },
  {
    text: "Fluoroplast Engineers has been a reliable partner for over a decade. Their products meet stringent industry standards, ensuring safety and efficiency.",
    name: "Rina Sheth",
    role: "Sr. Engineer",
    image: test5,
  },
  {
    text: "The components we sourced from Fluoroplast Engineers have lasted much longer than competitors' products, reducing our maintenance costs.",
    name: "Neel Verma",
    role: "Engineer",
    image: test6,
  },
  {
    text: "Fluoroplast Engineers delivers top-tier quality with unmatched expertise. Their commitment to innovation sets them apart in the industry.",
    name: "Nita Singh",
    role: "Sr. Engineer",
    image: test7,
  },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (testimonials.length - 3)) % (testimonials.length - 3)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="justify-center overflow-hidden ml-[100px] mr-[100px]">
      <div className="testimonial-header">
  <h3 className="testimonial-subtitle">Testimonials</h3>
  <h2 className="testimonial-title">
    What Our <span>Clients</span> Say
  </h2>
  <div className="testimonial-controls">
    <button onClick={prevSlide}>
      <img src={arrLeft} alt="Previous" />
    </button>
    <button onClick={nextSlide}>
      <img src={arr} alt="Next" />
    </button>
  </div>
</div>

<div
  className="testimonial-slider-track"
  style={{ transform: `translateX(-${currentIndex * 25}%)` }}
>
  {testimonials.map((testimonial, index) => (
    <div key={index} className="testimonial-card">
      <div>
        <div className="testimonial-user">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-avatar"
          />
        </div>
        <img src={quoteOpen} alt="Quote" className="testimonial-quote" />
        <p className="testimonial-text">{testimonial.text}</p>
      </div>
      <div className="testimonial-footer">
        <div className="testimonial-line"></div>
        <div>
          <h4 className="testimonial-name">{testimonial.name}</h4>
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="testimonial-viewall">
  <button>
    <span>View All</span>
    <span>
      <FaArrowRight />
    </span>
  </button>
</div>

    </div>
  );
};

export default TestimonialCard;
