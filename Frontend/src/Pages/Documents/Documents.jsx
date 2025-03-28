import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import HydraulicSeal from "../../assets/DocOne.png";
import RotarySeal from "../../assets/DocTwo.png";
import ORings from "../../assets/DocThree.png";
import Corporate from "../../assets/DocFour.png";
import Chemical from "../../assets/DocFive.png";
import Download from "../../assets/pdfIcon.svg";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";  
import "./Documents.css";
const documents = [
  { image: HydraulicSeal, title: "Hydraulic Seal Catalogue", pdf: "/pdfs/hydraulic-seal.pdf" },
  { image: RotarySeal, title: "Rotary Seal Catalogue", pdf: "/pdfs/rotary-seal.pdf" },
  { image: ORings, title: "O-Rings Catalogue", pdf: "/pdfs/o-rings.pdf" },
  { image: Corporate, title: "Corporate Catalogue", pdf: "/pdfs/corporate.pdf" },
  { image: Chemical, title: "Chemical", pdf: "/pdfs/chemical.pdf" },
];


const Document = () => {
  return (
    <>
      <Navbar />
      <div className="tech-docs-wrapper">
        <div className="tech-docs-container">
          <h2 className="tech-docs-title">Technical Documents</h2>
          <div className="tech-docs-grid">
            {documents.map((doc, index) => (
              <div key={index} className="tech-docs-card group">
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="tech-docs-img"
                />
                <div className="tech-docs-content">
                  <h3 className="tech-docs-card-title">{doc.title}</h3>
                </div>
                <span className="divider-line"></span>
                <a href={doc.pdf} download className="tech-docs-footer">
                  <img
                    src={Download}
                    alt="Download-PDf-Icon"
                    className="tech-docs-download-icon"
                  />
                  <span>Download Now</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NeedHelp />
      <Footer />
    </>
  );
};

export default Document;
