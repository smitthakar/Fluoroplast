import BG from "../../assets/BG.png";
import help from "../../assets/help.png";
import parts from "../../assets/parts.png";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";

const QualityAssurance = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto p-6 mt-20">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <span className="text-[#9D0A0E]">Home</span> /
        <span className="mx-1 text-[#9D0A0E]">Innovation & Quality /</span> 
        <span className="font-semibold">Quality Assurance</span>
      </nav>

      {/* Header Section: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-4 font-redhat">Quality Within The <br /> Organization</h1>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
            type and scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-700 mt-4">
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-1">
          <img
            src={BG}
            alt="Quality Assurance"
            className="rounded-lg shadow-md w-[666px] h-[300px]"
          />
        </div>
      </div>

      {/* Additional Text Below the Image */}
      <div className="mt-6">
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
          and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
          with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
          publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br />
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
          alteration in some form, by injected humour, or randomised words which don’t look even slightly 
          believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t 
          anything embarrassing hidden in the middle of text.
        </p>
        <p className="text-gray-700 mt-4">
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making 
          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined 
          with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-start mt-10">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-extrabold mb-2 font-redhat">Certifications</h2>
          <p className="text-gray-700 font-manrope">
            The Quality of our Processes is the foundation of our business success. We are dedicated to the ongoing 
            optimization of our products and services, meeting the requirements of international standards as well 
            as industry-specific requirements.
          </p>
        </div>

        {/* Right Certification List Box */}
        <div className="md:w-1/2 p-4 bg-[#FFDCDD] rounded-lg shadow-md ml-10">
          <ul className="list-disc list-inside text-[#9D0A0E] font-manrope">
            <li>EN 9100:2018 (English)</li>
            <li>EN 9100:2018 (German)</li>
            <li>IATF 16949:2016</li>
            <li>ISO 13485:2016</li>
            <li>ISO 50001:2018 (English)</li>
            <li>ISO 50001:2018 (German)</li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 my-10">
        {/* Achieving Quality */}
        <div>
          <h3 className="text-xl font-bold mb-2 font-redhat">Achieving Quality</h3>
          <p className="text-gray-700">
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
          </p>
          <p className="text-gray-700 mt-6">
          The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.          </p>
        </div>

        {/* Raising Quality Awareness */}
        <div className="ml-5 w-full">
          <h3 className="text-xl font-semibold mb-2 font-redhat">Raising Quality Awareness</h3>
          <p className="text-gray-700">
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
          </p>
          <p className="text-gray-700 mt-6">
          The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <img src={help} alt="Ensuring Quality" className="rounded-lg  w-[804px] h-[444px]" />
        <img src={parts} alt="Supplier Relationships" className="rounded-lg  w-[804px] h-[444px]" />
      </div>

      {/* Quality Stages & Supplier Relationships */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 font-redhat">Ensuring Quality during the Early Stages</h3>
          <p className="text-gray-700">
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making 
            this the first true generator on the Internet.
          </p>
        </div>

        <div className="ml-5 w-full">
          <h3 className="text-xl font-semibold mb-2 font-redhat">Maintaining Supplier Relationships</h3>
          <p className="text-gray-700">
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic 
            words etc.
          </p>
        </div>
      </div>
      {/* Ensuring Qualitative and Quantitative Quality - Final Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 font-redhat">
          Ensuring Qualitative and Quantitative Quality in the Series
        </h3>
        <p className="text-gray-700">
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making 
          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined 
          with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
        </p>
        <p className="text-gray-700 mt-4">
          The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic 
          words etc.
        </p>
      </div>
    </div>
    <NeedHelp />
    <Footer />
    </>
  );
};

export default QualityAssurance;
