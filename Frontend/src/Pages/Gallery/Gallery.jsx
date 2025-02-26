import GalleryOne from "../../assets/GalleryOne.png";
import GalleryTwo from "../../assets/GalleryTwo.png";
import GalleryThree from "../../assets/GalleryThree.png";
import GalleryFour from "../../assets/GalleryFour.png";
import GalleryFive from "../../assets/GalleryFive.png";
import GallerySix from "../../assets/GallerySix.png";
import GallerySeven from "../../assets/GallerySeven.png";
import GalleryEight from "../../assets/GalleryEight.png";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Certificates = () => {
  const images = [
    GalleryOne,
    GalleryTwo,
    GalleryThree,
    GalleryFour,
    GalleryFive,
    GallerySix,
    GallerySeven,
    GalleryEight,
  ];

  return (
    <>
      <Navbar />
      <div className="w-full h-[884px] gap-[24px] pt-[112px] pr-[144px] pb-[112px] pl-[144px]">
        <h2 className="w-full h-[84px] font-redhat font-bold text-[60px] leading-[54px] tracking-normal">
          Gallery
        </h2>

        <div className="h-[534px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[24px]">
          {images.map((image, index) => (
            <div key={index} className="bg-white w-[202px] p-1">
              <img src={image} alt={`Certificate ${index + 1}`} className="w-[252px] h-[305px]  rounded-[8px]" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Certificates;
