import { useState,useRef,useEffect} from "react";
import { FaArrowRight } from "react-icons/fa"; 
import valves1 from "../../assets/Valves & Fittings.png";
import plastic1 from "../../assets/EngineeringPlastic.png";
// import seals1 from "../../assets/Valves&Fittings.png";
import plastic2 from "../../assets/EngineeringPlastic.png";
import valves2 from "../../assets/Valves & Fittings.png";
import parts from "../../assets/parts.png";
import Navbar from "../../Components/Navbar/Navbar";
import IndustrialMachinery from "../../assets/IndustrialMachinery.png";
// import Seals from "../../assets/Seals.png";
import plastic from "../../assets/EngineeringPlastic.png";
import valves from "../../assets/Valves&Fittings.png";
import machinery from "../../assets/IndustrialMachinery.png";
import cylinder from "../../assets/cylinder.png";
import arrRight from "../../assets/Arrow rigth.png";
import arrLeft from "../../assets/Arrow left.png";
import CaseStudyCarousel from "../../Components/CaseStudyCarousel/CaseStudyCarousel";
import Footer from "../../Components/Footer/Footer";

const categories = [
  "Automotive",
  "Aerospace",
  "Industrial Machinery",
  "Oil & Gas",
  "Chemical Processing",
];

const relatedProducts = [
    { id: 1, label: "Hydraulic Cylinders", description: "Engineering plastics are high-performance materials.", image: cylinder },
    // { id: 2, label: "Hydraulic Seals", description: "High-durability seals for hydraulic applications.", image: Seals },
    { id: 3, label: "Engineering Plastic", description: "Strong and lightweight industrial plastic.", image: plastic },
    { id: 4, label: "Valves & Fittings", description: "Precision-engineered valves for fluid control.", image: valves },
    { id: 5, label: "Industrial Machinery", description: "Advanced machinery for manufacturing needs.", image: machinery },
    { id: 6, label: "Industrial Machinery", description: "High-performance industrial tools.", image: IndustrialMachinery },
    { id: 7, label: "Valves & Fittings", description: "Reliable fittings for fluid regulation.", image: valves1 },
    { id: 8, label: "Engineering Plastic", description: "Durable and flexible plastic materials.", image: plastic1 },
    // { id: 9, label: "Hydraulic Seals", description: "Sealing solutions for high-pressure systems.", image: seals1 },
    { id: 10, label: "Hydraulic Cylinders", description: "Powerful hydraulic force components.", image: cylinder },
    { id: 11, label: "Hydraulic Cylinders", description: "Reliable cylinders for industrial use.", image: plastic2 },
    { id: 12, label: "Valves & Fittings", description: "Quality valves for various industries.", image: valves2 },
  ];

export default function AutomotivePage() {
  const [activeCategory, setActiveCategory] = useState("Automotive");
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 6; // Only 6 images should be displayed

  useEffect(() => {
    if (currentIndex > relatedProducts.length - visibleItems) {
      setCurrentIndex(relatedProducts.length - visibleItems);
    }
  }, [currentIndex]);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const nextChild = carouselRef.current.children[currentIndex - 1];
      nextChild?.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  const scrollRight = () => {
    if (currentIndex < relatedProducts.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
      const nextChild = carouselRef.current.children[currentIndex + 1];
      nextChild?.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen p-6 mt-20 ml-10">
        {/* Sidebar */}
        <div className="w-1/4">
          <h1 className="text-4xl font-bold mb-6 font-redhat">
            {activeCategory}
          </h1>
          <div>
            {categories.map((category) => (
              <div
                key={category}
                className={`p-4 flex font-manrope justify-between rounded-lg items-center text-lg font-semibold cursor-pointer border-b last:border-b-0 ${
                  activeCategory === category
                    ? "bg-red-700 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                <span className="text-xl">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-8 rounded-lg">
          <h2 className="text-3xl font-extrabold mb-4 font-redhat">Overview</h2>
          <p className="mb-4 font-manrope text-gray-700 text-[16px] leading-[28px] tracking-[0%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="mb-4 font-manrope text-gray-700 text-[16px] leading-[28px] tracking-[0%]">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p className="mb-4 font-manrope text-gray-700 text-[16px] leading-[28px] tracking-[0%]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <p className="mb-4 font-manrope text-gray-700 text-[16px] leading-[28px] tracking-[0%]">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable.
          </p>
          <p className="mb-4 font-manrope text-gray-700 text-[16px] leading-[28px] tracking-[0%]">
            The generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </p>

          <div className="w-full flex top-1 gap-7">
            <div className="w-1/2">
              <h2 className="text-3xl font-extrabold mb-10 mt-5 font-redhat text-[#070912]">
                How it Works?
              </h2>
              <p className="mb-4 font-manrope text-gray-700 text-[16px] leading-[28px] tracking-[0%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="mb-4 font-manrope text-gray-700 text-[16px] leading-[28px] tracking-[0%]">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src={parts}
                alt="Automotive Process"
                className="w-[528px] h-[490px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="w-full  p-8 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-black mb-4 text-center mr-[1200px] font-redhat">
          Related Products
        </h2>
        <div className="relative w-full flex justify-center">
          {/* Left Arrow */}
          <button
            className={`p-3 bg-red-200 rounded-full absolute left-10 top-1/2 transform -translate-y-1/2 z-10`}
            onClick={scrollLeft}
          >
            <img src={arrLeft} alt="" />
          </button>

          {/* Scrollable Product List */}
          <div
            ref={carouselRef}
            className="flex gap-4 w-full justify-center overflow-hidden"
          >
            {relatedProducts.map((item, index) => (
              <div
                key={item.id}
                className={`relative  rounded-lg flex flex-col items-center w-[220px] h-[320px] overflow-hidden group transition-all duration-300`}
                style={{
                  display:
                    index >= currentIndex && index < currentIndex + visibleItems
                      ? "block"
                      : "none",
                }}
              >
                {/* Image - Fade Out on Hover */}
                <div className="flex-grow flex justify-center items-center w-full h-[250px] transition-all duration-500 group-hover:opacity-0">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Hover Overlay - Red Background with Content */}
                <div className="absolute inset-0 bg-[#9D0A0E] flex flex-col items-start justify-between p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-white font-manrope font-semibold text-[16px] leading-[24px]">
                      {item.label}
                    </p>
                    <p className="text-white text-sm mt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Read More Button - Animated */}
                  <div className="w-full">
                    <div className="w-full h-[1px] bg-white my-2"></div>
                    <button className="flex items-center justify-between text-white font-manrope font-semibold text-[16px] leading-[24px] w-full transition-all duration-500 hover:translate-x-2">
                      <span>Read More</span> <FaArrowRight />
                    </button>
                  </div>
                </div>

                {/* Bottom Product Title */}
                <p className="text-center text-gray-700 font-manrope font-semibold text-[16px] leading-[24px] w-full pb-4">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className={`p-3 bg-red-700 text-white rounded-full absolute right-14 top-1/2 transform -translate-y-1/2 z-10`}
            onClick={scrollRight}
          >
            <img src={arrRight} alt="" className="" />
          </button>
        </div>
      </div>
      {/* <CaseStudyCarousel /> */}
      <Footer />
    </div>
  );
}
