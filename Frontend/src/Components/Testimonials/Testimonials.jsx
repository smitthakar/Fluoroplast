import { useState } from "react";
import quoteOpen from "../../assets/quoteOpen.png";
import quoteClose from "../../assets/quoteClose.png";
import person from "../../assets/personOne.png";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 bg-white text-black">
      <h3 className="text-red-600 font-semibold uppercase text-center">Testimonials</h3>
      <h2 className="text-3xl font-bold text-center mt-2">
        What Happy People Are Saying About
      </h2>
      <h2 className="text-3xl font-bold text-red-600 text-center">Fluoroplast Engineers</h2>
      
      <div className="flex flex-col md:flex-row items-center mt-8 max-w-4xl mx-auto relative">
        {/* Quote Open on Left */}
        <img src={quoteOpen} alt="Quote Open" width={50} height={50} className="absolute left-[-10px] top-[-100px]" />
        
        <div className="flex items-left">
          {/* Navigation Numbers on Left */}
          <div className="flex flex-col items-start mr-6 space-y-4">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`flex items-center space-x-2 cursor-pointer ${activeIndex === num ? 'text-red-500' : 'text-gray-600'}`}
                onClick={() => setActiveIndex(num)}
              >
                <div className={`w-1 h-10 ${activeIndex === num ? 'bg-red-500' : 'bg-gray-500'}`}></div>
                <span className="font-semibold text-lg">{`0${num}`}</span>
              </div>
            ))}
          </div>
          
          {/* Testimonial img */}
          <div className="relative flex-shrink-0 p-4 bg-gray-200 rounded-lg">
            <img
              src={person}
              alt="Testimonial"
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        
        {/* Testimonial Content */}
        <div className="ml-8 text-left flex flex-col items-start max-w-lg">
          <p className="text-gray-600">
            We have been partnering with Fluoroplast Engineers Pvt. Ltd. for over a decade, and their commitment to precision and quality never ceases to amaze us. In our industry, even the smallest margin of error can result in costly setbacks. Fluoroplast Engineers Pvt. Ltd. consistently delivers components that exceed our stringent requirements, with no compromise on precision, durability, or safety. Their state-of-the-art machinery and experienced workforce enable them to produce parts that meet our specifications down to the finest detail.
          </p>
          <h4 className="font-semibold mt-4 text-black">Heema Sheth</h4>
          <p className="text-gray-500">Co-owner</p>
        </div>
        
        {/* Quote Close on Right */}
        <img src={quoteClose} alt="Quote Close" width={50} height={50} className="absolute right-[-40px] bottom-[-20px]" />
      </div>
      
      <button className="mt-8 bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition shadow-lg shadow-red-500/50">
        View All
      </button>
    </div>
  );
};

export default Testimonial;
