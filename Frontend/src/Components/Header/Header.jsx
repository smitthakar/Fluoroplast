import  { useEffect, useState } from "react";
import slider1 from "../../assets/HeroOne.png";
import slider2 from "../../assets/HeroTwo.png";
import slider3 from "../../assets/HeroThree.png";
import slider4 from "../../assets/HeroFour.png";

const images = [slider1, slider2, slider3, slider4];

const HeroSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full   mx-auto  relative h-[700px]">
        <div className="absolute  w[1632px] h-[667px] gap-[40px] inset-0 flex flex-col items-center justify-center text-white px-6 z-10">
          <h1 className="text-[65px] w-[1232px] font-medium justify-center text-center text-6xl  font-redhat ">
            Global Leaders in Engineering Plastics, <br /> Hydraulic Seals, &
            <br />
            Advanced Industrial Solutions.
          </h1>
          <p className="text-2xl">
            Innovating for Over 30 Years | Expanding for the Future.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full text-lg transition duration-300 ease-in-out border border-red-500 flex items-center space-x-2 group shadow-md hover:bg-white hover:text-red-500">
          <span className="transition-all duration-300 ease-in-out">Explore Our Products</span>
          <span className="transition-all duration-300 ease-in-out">→</span>
        </button>
        </div>
        <div
          className="absolute inset-0 transition-opacity duration-1000 w-full h-full"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="w-full bg-white  mt-0 mb-20 flex justify-center border-b border-gray-300">
        <div className="grid grid-cols-5   text-center pl-[144px] pr-[144px] text-red-700 font-bold text-3xl w-full border-b border-gray-300">
          <div className="border-r rounded-[8px] border-gray-300 py-4 flex flex-col items-center  pt-[56px] pr-[48px] pb-[56px] pl-[48px] ">
            <p className="text-4xl font-redhat">25,000</p>
            <span className="text-gray-600 text-sm  ">
              Sq Feet Area of Manufacturing
            </span>
          </div>
          <div className="border-r rounded-[8px] border-gray-300 py-4 flex flex-col items-center pt-[56px] pr-[48px] pb-[56px] pl-[48px]">
            <p className="text-4xl font-redhat ">25,000</p>
            <span className="text-gray-600 text-sm">SKU Products</span>
          </div>
          <div className="border-r rounded-[8px] border-gray-300 py-4 flex flex-col items-center pt-[56px] pr-[48px] pb-[56px] pl-[48px]">
            <p className="text-4xl font-redhat ">500+</p>
            <span className="text-gray-600 text-sm ">
              Products in Portfolio
            </span>
          </div>
          <div className="border-r rounded-[8px] border-gray-300 py-4 flex flex-col items-center pt-[56px] pr-[48px] pb-[56px] pl-[48px]">
            <p className="text-4xl font-redhat">500+</p>
            <span className="text-gray-600 text-sm">Customers Network</span>
          </div>
          <div className="py-4 flex flex-col rounded-[8px] items-center pt-[56px] pr-[48px] pb-[56px] pl-[48px]">
            <p className="text-4xl font-redhat">7+</p>
            <span className="text-gray-600 text-sm">Countries Served</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
