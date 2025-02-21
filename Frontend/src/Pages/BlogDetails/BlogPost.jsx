import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import blogMain from "../../assets/blogMain.png"; 
import Ellipse from "../../assets/Ellipse.png";
import calendar from "../../assets/calendar.png";
import category from "../../assets/category.png";
import correct from "../../assets/correct.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";

const BlogPost = () => {
  return (
    <>
      <Navbar />
      <div className=" px-[144px] py-[112px] w-full h-[2089px] gap-[24px]">
        {/* Breadcrumb */}
        <div className="w-[944px] h-[2097px] gap-[32px] ">
          <div className=" w-[944px] h-[66px] py-[16px] gap-[8px] text-sm">
            <Link
              to="/"
              className="text-red-600 text-[18px] font-bold leading-[33.6px] tracking-[0%] text-center font-['Red_Hat_Display']"
            >
              Home
            </Link>
            <span className="text-red-600 text-[18px] font-bold leading-[33.6px] tracking-[0%] text-center font-['Red_Hat_Display'] mx-2">
              /
            </span>

            <Link
              to="/blog"
              className="text-red-600 text-[18px] font-bold leading-[33.6px] tracking-[0%] text-center font-['Red_Hat_Display'] "
            >
              Blog
            </Link>
            <span className="text-red-600 text-[18px] font-bold leading-[33.6px] tracking-[0%] text-center font-['Red_Hat_Display'] mx-2">
              /
            </span>
            <span className="text-[#0A0A0A] text-[18px] font-bold leading-[33.6px] tracking-[0%] text-center font-['Red_Hat_Display']">
              Importers achieve cost savings through the First Sale rule!
            </span>
          </div>
          <div className="w-[944px] h-[1999px] gap-[32px] ml-[405px] ">
            <div className="w-[554px] h-[1999px] gap-[24px]">
              {/* Blog Title */}
              <h1 className="text-[40px] font-bold leading-[54px] tracking-[0%] font-['Red_Hat_Display']">
                Importers Achieve Cost Savings Through The First Sale Rule!
              </h1>

              {/* Blog Image */}
              <div className=" gap-[10px]">
                <img
                  src={blogMain}
                  alt="Blog Cover"
                  className="w-[554px] object-contain h-37  my-2 "
                />
              </div>

              {/* Author Info */}
              <div className="flex w-full h-[48px] gap-[16px] justify-between items-center text-gray-900">
                {/* Profile Image & Author */}
                <div className="flex items-center space-x-1">
                  <img
                    src={Ellipse}
                    alt="PersonImage"
                    className="w-[40px] h-[40px] top-[4px] rounded-full mr-2"
                  />
                  <span className=" font-semibold  tracking-[0%] leading-[28px] gap-[16px]  text-[18px]">
                    By Engineer
                  </span>
                </div>

                {/* Date with Calendar Icon */}
                <div className="flex flex-shrink  items-center space-x-1">
                  <img src={calendar} alt="Calendar" className="w-5 h-5" />
                  <span className="font-semibold  tracking-[0%] leading-[28px] gap-[16px]  text-[18px]">
                    Jan 21, 2024
                  </span>
                </div>

                {/* Category with Icon */}
                <div className="flex items-center space-x-1 -ml-[79px]">
                  <img src={category} alt="Category" className="w-5 h-5" />
                  <span className="font-semibold  tracking-[0%] leading-[28px] gap-[16px]  text-[18px] text-red-600">
                    Oil & Gas Insights
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="mt-6 text-gray-800 w-full text-justify ">
                <p className="mt-4 text-[16px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="mt-4 text-[16px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <p className="mt-4 text-[16px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.{" "}
                </p>
                <p className="mt-4 text-[16px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.{" "}
                </p>
                <p className="mt-4 text-[16px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
                {/* Subheading */}

                <h2 className="text-[36px] font-extrabold leading-[20.4px] tracking-[0%] font-['Red_Hat_Display'] mt-9 mb-9">
                  Giving You the Power
                </h2>
                <p className="mt-4 text-[16px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.{" "}
                </p>
                <p className="mt-4 text-[16px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
                {/* Bullet Points */}
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center mt-4 text-[15px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                    <img
                      src={correct}
                      alt=""
                      className="w-[19px]  h-[19px]  rounded-full mr-2"
                    />
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li className="flex items-center mt-4 text-[15px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                    <img
                      src={correct}
                      alt=""
                      className="w-[19px]  h-[19px] rounded-full mr-2"
                    />
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li className="flex items-center mt-4 text-[15px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                    <img
                      src={correct}
                      alt=""
                      className="w-[19px]  h-[19px] rounded-full mr-2"
                    />
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li className="flex items-center mt-4 text-[15px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                    <img
                      src={correct}
                      alt=""
                      className="w-[19px]  h-[19px]  rounded-full mr-2"
                    />
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li className="flex items-center mt-4 text-[15px] font-normal leading-[28px] tracking-[0%] font-['Manrope']">
                    <img
                      src={correct}
                      alt=""
                      className="w-[19px]  h-[19px]  rounded-full mr-2"
                    />
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                </ul>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 flex justify-end items-center h-[64px] w-full gap-4">
                {/* Share Text */}
                <span className="text-black-700 font-extrabold font-['Manrope'] leading-[30px] tracking-[0%]">
                  Share :
                </span>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-full flex items-center justify-center"
                  >
                    <img
                      src={LinkedIn}
                      alt="LinkedIn"
                      className=" h-[46px] w-[46px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="rounded-full flex items-center justify-center"
                  >
                    <img
                      src={Facebook}
                      alt="Facebook"
                      className=" h-[46px] w-[46px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="rounded-fullflex items-center justify-center  "
                  >
                    <img
                      src={Instagram}
                      alt="Instagram"
                      className=" h-[46px] w-[46px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="rounded-full flex items-center justify-center "
                  >
                    <img
                      src={Youtube}
                      alt="Youtube"
                      className="h-[46px] w-[46px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="rounded-full  flex items-center justify-center "
                  >
                    <img
                      src={Twitter}
                      alt="Twitter"
                      className="h-[46px] w-[46px]"
                    />
                  </a>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-between mt-12 text-black-700 w-full h-[98px] gap-[24px]">
                <Link to="/previous-post" className="flex flex-col">
                  <span className="font-[18px] w-[76px] h-[26px]  text-black-700  font-['Manrope'] leading-[10px] tracking-[0%] ">
                    Previous
                  </span>
                  <span className="font-[20px] text-balck-600 font-['Manrope'] leading-[28pxpx]">
                    Importers achieve cost savings through...
                  </span>
                </Link>
                <Link to="/next-post" className="flex flex-col text-right">
                  <span className="font-[18px] text-black-700 font-['Manrope'] leading-[10px] tracking-[0%] mb-4">
                    Next
                  </span>
                  <span className=" font-[20px] text-balck-600 font-['Manrope'] leading-[28pxpx] ">
                    Importers achieve cost savings through...
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
