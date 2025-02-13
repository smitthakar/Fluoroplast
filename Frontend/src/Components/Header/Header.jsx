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
    <div className="w-full max-w-5xl mx-auto mt-6 relative h-96 overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Global Leaders in Engineering Plastics, Hydraulic Seals, & Advanced Industrial Solutions.
        </h1>
        <p className="mt-2 text-lg">Innovating for Over 30 Years | Expanding for the Future.</p>
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-lg">
          Explore Our Products
        </button>
      </div>
      <div className="absolute inset-0 transition-opacity duration-1000 w-full h-full" style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}></div>
    </div>
  );
};

export default HeroSlider;
