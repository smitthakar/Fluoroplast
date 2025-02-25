import certificateImage from "../../assets/certificate.png"; 
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Certificates = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full h-[784px] gap-[24px] pt-[112px] pr-[144px] pb-[180px] pl-[144px]">
      <h2 className="w-full h-[84px] font-['Red Hat Display'] font-bold text-[60px] leading-[54px] tracking-normal">
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="bg-white  rounded-lg p-1">
            <img
              src={certificateImage}
              alt="Certificate"
              className="w-full rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Certificates;
