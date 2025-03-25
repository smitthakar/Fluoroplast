import BG from "../../assets/BG.png";
import help from "../../assets/help.png";
import parts from "../../assets/parts.png";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";
import "./quality-assurance.css";

const QualityAssurance = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 mt-20">
        {/* Breadcrumb */}

        <nav className="breadcrumb">
          <span className="highlight">Home</span> /
          <span className="highlight mx-1">Innovation & Quality /</span>
          <span className="current">Quality Assurance</span>
        </nav>

        <div className="quality-header">
          {/* Text Section */}
          <div className="quality-text">
            <h1 className="quality-title">
              Quality Within The <br /> Organization
            </h1>
            <p className="quality-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="quality-paragraph">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          {/* Image Section */}
          <div className="quality-image">
            <img src={BG} alt="Quality Assurance" />
          </div>
        </div>

        {/* Additional Text Below the Image */}
        <div className="text-block">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. <br />
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text.
          </p>
          <p>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable.
          </p>
        </div>

        <div className="certification-container">
          {/* Left Text */}
          <div className="certification-text">
            <h2 className="certifivate-heading">Certifications</h2>
            <p>
              The Quality of our Processes is the foundation of our business
              success. We are dedicated to the ongoing optimization of our
              products and services, meeting the requirements of international
              standards as well as industry-specific requirements.
            </p>
          </div>

          {/* Right Certificate List */}
          <div className="certificate-box">
            <ul className="certificate-list">
              <li>EN 9100:2018 (English)</li>
              <li>EN 9100:2018 (German)</li>
              <li>IATF 16949:2016</li>
              <li>ISO 13485:2016</li>
              <li>ISO 50001:2018 (English)</li>
              <li>ISO 50001:2018 (German)</li>
            </ul>
          </div>
        </div>

        <div className="quality-grid-container">
          {/* Achieving Quality */}
          <div className="quality-section left">
            <h3 className="quality-heading">Achieving Quality</h3>
            <p className="quality-paragraph">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable.
            </p>
            <p className="quality-paragraph">
              The generated Lorem Ipsum is therefore always free from
              repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>

          {/* Raising Quality Awareness */}
          <div className="quality-section right">
            <h3 className="quality-heading">Raising Quality Awareness</h3>
            <p className="quality-paragraph">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable.
            </p>
            <p className="quality-paragraph">
              The generated Lorem Ipsum is therefore always free from
              repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={help}
            alt="Ensuring Quality"
            className="rounded-lg  w-[804px] h-[444px]"
          />
          <img
            src={parts}
            alt="Supplier Relationships"
            className="rounded-lg  w-[804px] h-[444px]"
          />
        </div>

        {/* Quality Stages & Supplier Relationships */}
        <div className="quality-grid">
          <div className="quality-item">
            <h3 className="section-title">
              Ensuring Quality during the Early Stages
            </h3>
            <p className="section-text">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
          </div>

          <div className="quality-item">
            <h3 className="section-title">
              Maintaining Supplier Relationships
            </h3>
            <p className="section-text">
              The generated Lorem Ipsum is therefore always free from
              repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>

        {/* Ensuring Qualitative and Quantitative Quality - Final Section */}
        <div className="section-container">
          <h3 className="quality-heading-final">
            Ensuring Qualitative and Quantitative Quality in the Series
          </h3>
          <p className="quality-text-final">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable.
          </p>
          <p className="additional-paragraph">
            The generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </p>
        </div>
      </div>
      <NeedHelp />
      <Footer />
    </>
  );
};

export default QualityAssurance;
