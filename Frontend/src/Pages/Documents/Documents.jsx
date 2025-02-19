import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import HydraulicSeal from "../../assets/DocOne.png";
import RotarySeal from "../../assets/DocTwo.png";
import ORings from "../../assets/DocThree.png";
import Corporate from "../../assets/DocFour.png";
import Chemical from "../../assets/DocFive.png";
import Download from "../../assets/pdfIcon.png";

const documents = [
  { image: HydraulicSeal, title: "Hydraulic Seal Catalogue" },
  { image: RotarySeal, title: "Rotary Seal Catalogue" },
  { image: ORings, title: "O-Rings Catalogue" },
  { image: Corporate, title: "Corporate Catalogue" },
  { image: Chemical, title: "Chemical" },
];

const Document = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[1232px] px-[144px] py-[112px] gap-[24px]">
        <div className="w-full h-[924px]">
        <h2 className="text-3xl font-bold font-['Red Hat Display'] w-full h-[84px]">Technical Documents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] mt-1 w-full h-[632px] group">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg w-[295px] h-[450px] flex flex-col p-0 justify-between hover:bg-[#9D0A0E] hover:text-white transition-all duration-300 ease-in-out ">
              <img src={doc.image} alt={doc.title} className=" w-[295px] object-cover" />
              <div className="flex flex-col flex-grow px-[32px] w-[265px]  ">
                <h3 className="text-lg font-semibold pb-1  h-[50px] flex items-center mt-[80px]">{doc.title}</h3>
              </div>
              <div className="flex items-center gap-2 h-[40px] border-t pt-2 mb-[15px] px-[32px] w-full ">
               <img src={Download} alt="Download-PDf-Icon" className="w-[35px] h-[35px] group-hover:brightness-0 cursor-pointer" />
                <span>Download Now</span>
              </div>
            </div>
            ))}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Document;
