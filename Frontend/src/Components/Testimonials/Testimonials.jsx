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
      <div className="h-[202px] flex flex-col items-center justify-center text-center">
        <h3 className="text-[#9D0A0E] font-semibold text-[24px] leading-[33.6px] uppercase w-[197px] h-[34px] font-['Red Hat Display']">
          Testimonials
        </h3>
        <h2 className="font-['Red_Hat_Display'] font-extrabold text-[60px] leading-[84px]">
          What Our <span className="text-[#9D0A0E]">Clients</span> Say
        </h2>
        <div className="flex justify-end items-center gap-4 mb-2 mt-[-90px] pr-8 ml-[1000px]">
          <button
            onClick={prevSlide}
            className="w-[56px] h-[56px] flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
          >
            <img src={arrLeft} alt="" />
          </button>
          <button
            onClick={nextSlide}
            className="w-[56px] h-[56px] flex items-center justify-center bg-red-700 text-white rounded-full hover:bg-red-800 transition"
          >
            <img src={arr} alt="" />
          </button>
        </div>
      </div>
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 min-w-[25%] box-border flex flex-col justify-between"
            style={{
              width: 326,
              height: 439,
              borderRadius: 8,
              borderWidth: 1,
              marginRight: 56,
              fontFamily: "Red Hat Display",
              fontWeight: 600,
              fontSize: 20,
              lineHeight: "33.6px",
              letterSpacing: "0%",
            }}
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <img src={quoteOpen} alt="Quote" className="w-8 h-8 mb-4 ml-3" />
              <p className="mb-6 line-clamp-6 ml-4">{testimonial.text}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1 h-full bg-[#4F4F4F]"></div>
              <div>
                <h4
                  className="text-black mb-1"
                  style={{
                    fontFamily: "Manrope",
                    fontWeight: 800,
                    fontSize: 20,
                    lineHeight: "28px",
                    letterSpacing: "0%",
                  }}
                >
                  {testimonial.name}
                </h4>
                <p
                  className="text-gray-500 text-sm"
                  style={{
                    fontFamily: "Manrope",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "22.4px",
                    letterSpacing: "0%",
                  }}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="w-[200px] h-[50px] rounded-full border-transparent bg-gradient-to-r from-[#9D0A0E] to-[#F15922] text-white font-semibold
   ease-in-out transform flex items-center justify-center relative group 
  hover:bg-white hover:bg-none hover:text-[#9D0A0E] hover:border-2 hover:border-[#9D0A0E]"
        >
          <span className="absolute left-1/2 -translate-x-1/2">View All</span>
          <span
            className="opacity-0 transform translate-x-0 transition-all duration-300 ease-in-out text-[#9D0A0E] 
      group-hover:opacity-100 group-hover:translate-x-2"
          >
            <FaArrowRight className="ml-20" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
