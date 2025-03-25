import GalleryOne from "../../assets/GalleryOne.svg";
import GalleryTwo from "../../assets/GalleryTwo.svg";
import GalleryThree from "../../assets/GalleryThree.svg";
import GalleryFour from "../../assets/GalleryFour.svg";
import GalleryFive from "../../assets/GalleryFive.svg";
import GallerySix from "../../assets/GallerySix.svg";
import GallerySeven from "../../assets/GallerySeven.svg";
import GalleryEight from "../../assets/GalleryEight.svg";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import './gallery.css';

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
      <div className="gallery-section">
        <h2 className="gallery-title">Gallery</h2>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-card">
              <img src={image} alt={`Certificate ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Certificates;
