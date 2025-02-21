import { useState, useEffect } from "react";
import quoteOpen from "../../assets/quoteOpen.png";
import quoteClose from "../../assets/quoteClose.png";
import personOne from "../../assets/personOne.png";
import personTwo from "../../assets/personTwo.png";
import personThree from "../../assets/personThree.png";
import personFour from "../../assets/personFour.png";

const testimonials = [
  {
    image: personOne,
    text: "We have been partnering with Fluoroplast Engineers Pvt. Ltd. for over a decade, and their commitment to precision and quality never ceases to amaze us. In our industry, even the smallest margin of error can result in costly setbacks. Fluoroplast Engineers Pvt. Ltd. consistently delivers components that exceed our stringent requirements, with no compromise on precision, durability, or safety.",
    name: "Heema Sheth",
    role: "Co-owner",
  },
  {
    image: personTwo,
    text: "As a rapidly growing startup in the tech space, we needed a manufacturing partner that could not only keep up with our fast pace but also bring innovative solutions to the table. Fluoroplast Engineers Pvt. Ltd. has been that partner for us.",
    name: "Janki Verma",
    role: "CEO",
  },
  {
    image: personThree,
    text: "We’ve worked with Fluoroplast Engineers Pvt. Ltd. for over 15 years and they have always been a reliable and consistent partner. On several occasions, they’ve gone above and beyond, accommodating last-minute changes and ramping up production to help us meet our project goals.",
    name: "Rohan Dave",
    role: "Engineer",
  },
  {
    image: personFour,
    text: "As sustainability consultants, we are always on the lookout for manufacturing partners that share our vision of reducing environmental impact without sacrificing product quality. Fluoroplast Engineers Pvt. Ltd. has proven to be a leader in this area.",
    name: "Karan Patel",
    role: "Sr. Engineer",
  },
  
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white text-black w-full h-[704px] gap-[20px] px-[144px] py-[112px] ">
      {/* Header */}
      <div className="h-[202px] w-full flex flex-col items-center justify-center text-center">
        <h3 className="text-red-600 font-semibold text-[24px] leading-[33.6px] uppercase w-[197px] h-[34px] font-['Red Hat Display']">
          Testimonials
        </h3>
        <h2 className="font-['Red_Hat_Display'] font-extrabold text-[60px] leading-[84px]">
          What Happy People Are Saying About
        </h2>
        <h2 className="font-['Red_Hat_Display'] font-extrabold text-[60px] leading-[84px] text-red-600">
          Fluoroplast Engineers
        </h2>
      </div>

      {/* Testimonial Content */}
      <div className="flex flex-col md:flex-row items-center mt-8 w-full h-[356px] relative">
        {/* Quote & Image Section */}
        <div className="relative flex items-center">
          <div className="flex flex-col items-start mr-10 mt-10 w-[23px] h-[340px] gap-[40px] space-y-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 cursor-pointer transition-all w-[70px] ${
                  activeIndex === index ? "text-red-500" : "text-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className={`w-1 h-[40px] transition-all ${
                    activeIndex === index ? "bg-red-500" : "bg-gray-500"
                  }`}
                ></div>
                <span className="font-semibold h-[23px] text-lg">
                  {`0${index + 1}`}
                </span>
              </div>
            ))}
          </div>
          <img
            src={quoteOpen}
            alt="Quote Open"
            className="absolute left-12 top-0 w-[100px] h-[100px]"
          />

          {/* Image Container */}
          <div className="relative w-[300px] h-[400px] ml-[100px]">
            {/* Background Shape */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[300px] bg-[#FFCFCF] rounded-lg"></div>

            {/* Image */}
            <img
              src={testimonials[activeIndex].image}
              alt="Person"
              className="w-[300px] h-[400px] object-cover relative z-10"
            />
          </div>
        </div>

        {/* Testimonial Text */}
        <div
          className={`ml-10 text-left flex flex-col items-start transition-opacity duration-500 text-justify ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-gray-600 mt-[-70px]" style={{ fontFamily: 'Manrope', fontWeight: 400, fontSize: '18px', lineHeight: '25.2px', letterSpacing: '0%' }}>{testimonials[activeIndex].text}</p>
          <h4 className="font-semibold mt-[90px] text-black"style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: '18px', lineHeight: '25.2px', letterSpacing: '0%' }}>
            {testimonials[activeIndex].name}
          </h4>
          <p className="text-gray-500" style={{ fontFamily: 'Manrope', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0%' }}>{testimonials[activeIndex].role}</p>

        </div>
        <img
              src={quoteClose}
              alt="Quote Close"
              width={60}
              height={60}
              className="absolute right-[630px] bottom-[-35px] w-[100px] h-[100px]"
            />
      </div>

      {/* View All Button */}
      <button className="mt-8 bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition shadow-lg shadow-red-500/50">
        View All
      </button>
    </div>
  );
};

export default Testimonial;
