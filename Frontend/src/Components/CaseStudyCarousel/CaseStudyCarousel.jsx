import { useRef } from "react";
import arrRight from "../../assets/Arrow rigth.png";
import arrLeft from "../../assets/Arrow left.png";
import caseStudyImage from "../../assets/case-study.png";

const caseStudies = [
  {
    id: 1,
    category: "Oil & Gas Insights",
    title: "Importers achieve cost savings through the First Sale rule!",
    description:
      "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
    image: caseStudyImage,
  },
  {
    id: 2,
    category: "Oil & Gas Insights",
    title: "Importers achieve cost savings through the First Sale rule!",
    description:
      "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
    image: caseStudyImage,
  },
  {
    id: 3,
    category: "Oil & Gas Insights",
    title: "Importers achieve cost savings through the First Sale rule!",
    description:
      "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
    image: caseStudyImage,
  },
  {
    id: 4,
    category: "Oil & Gas Insights",
    title: "Importers achieve cost savings through the First Sale rule!",
    description:
      "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
    image: caseStudyImage,
  },
  {
    id: 5,
    category: "Oil & Gas Insights",
    title: "Importers achieve cost savings through the First Sale rule!",
    description:
      "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
    image: caseStudyImage,
  },
  {
    id: 6,
    category: "Oil & Gas Insights",
    title: "Importers achieve cost savings through the First Sale rule!",
    description:
      "Engineering plastics are high-performance materials with mechanical and thermal properties, used in automotive, aerospace, and electronics.",
    image: caseStudyImage,
  },
];

export default function CaseStudyCarousel() {
  const carouselRef = useRef(null);
  const cardWidth = 450; // Width of each card including margin

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" }); // Slide one card at a time
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" }); // Slide one card at a time
    }
  };

  return (
    <div className="w-full h-[550px] mb-96 p-6 flex flex-col items-center gap-12">
      <h2 className="text-3xl font-extrabold text-black mb-4 text-center font-redhat">
        Related Case Studies
      </h2>

      <div className="relative w-[1350px] h-[530px] flex justify-center items-center">
        {/* Left Arrow */}
        <button
          className="p-3 bg-red-200 rounded-full absolute -left-5 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollLeft}
        >
          <img src={arrLeft} alt="Left Arrow" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 w-[1350px] overflow-hidden flex-nowrap"
        >
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="relative bg-white shadow-lg rounded-lg w-[428px] h-[530px] overflow-hidden flex-shrink-0 group hover:#991b1b hover:text-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[428px] h-[272px] object-cover"
              />
              <div className="p-4 group-hover:bg-red-600 group-hover:text-white">
                <p className="text-red-600 font-bold text-sm group-hover:text-white">
                  {item.category}
                </p>
                <h3 className="text-lg font-semibold mt-2 border-l-4 border-red-600 pl-2 group-hover:text-white group-hover:border-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 group-hover:text-white">
                  {item.description}
                </p>
                <hr className="my-4 border-gray-300" />
                <button className="mt-2 text-red-600 font-semibold  group-hover:text-white">
                  Explore Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="p-3 bg-red-700 text-white rounded-full absolute -right-2 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollRight}
        >
          <img src={arrRight} alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
}
