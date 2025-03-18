import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import blogMain from "../../assets/blogMain.png"; 
import Ellipse from "../../assets/Ellipse.png";
import calendar from "../../assets/calendar.png";
import category from "../../assets/category.png";
import correct from "../../assets/correct.png";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";
import "./BlogPost.css";

const BlogPost = () => {
  return (
    <>
      <Navbar />
      <div className="blog-wrapper">
        {/* Breadcrumb */}
        <div className="blog-breadcrumb">
          <div className="breadcrumb-container">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span className="breadcrumb-separator">/</span>

            <Link to="/blogs" className="breadcrumb-link">
              Blog
            </Link>
            <span className="breadcrumb-separator">/</span>

            <span className="breadcrumb-current">
              Importers achieve cost savings through the First Sale rule!
            </span>
          </div>

          <div className="blog-body ">
            <div className="blog-article">
              {/* Blog Title */}
              <h1 className="blog-title1">
                Importers Achieve Cost <br /> Savings Through The First <br />{" "}
                Sale Rule!
              </h1>

              {/* Blog Image */}
              <div className="blog-image-wrapper">
                <img src={blogMain} alt="Blog Cover" className="blog-image" />
              </div>

              {/* Author Info */}
              <div className="blog-meta">
                {/* Author */}
                <div className="meta-item">
                  <img
                    src={Ellipse}
                    alt="PersonImage"
                    className="meta-avatar"
                  />
                  <span className="meta-text">By Engineer</span>
                </div>

                {/* Date */}
                <div className="meta-item">
                  <img src={calendar} alt="Calendar" className="meta-icon" />
                  <span className="meta-text">Jan 21, 2024</span>
                </div>

                {/* Category */}
                <div className="meta-item meta-category">
                  <img src={category} alt="Category" className="meta-icon" />
                  <span className="meta-text category-text">
                    Oil & Gas Insights
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="blog-content">
                <p className="blog-paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className="blog-paragraph">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <p className="blog-paragraph">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text
                </p>
                <p className="blog-paragraph">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                </p>
                <p className="blog-paragraph">
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.{" "}
                </p>
                {/* Subheading */}

                <h2 className="blog-subheading">Giving You the Power</h2>

                <p className="blog-paragraph">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                </p>
                <p className="blog-paragraph">
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>

                {/* Bullet Points */}
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <img src={correct} alt="" className="bullet-icon" />
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li className="bullet-list-item">
                    <img src={correct} alt="" className="bullet-icon" />
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li className="bullet-list-item">
                    <img src={correct} alt="" className="bullet-icon" />
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li className="bullet-list-item">
                    <img src={correct} alt="" className="bullet-icon" />
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li className="bullet-list-item">
                    <img src={correct} alt="" className="bullet-icon" />
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                </ul>
              </div>

              {/* Share Buttons */}
              <div className="blog-share">
                <span className="share-text">Share :</span>

                <div className="share-icons">
                  <a href="#">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                  <a href="#">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                  <a href="#">
                    <img src={Twitter} alt="Twitter" />
                  </a>
                  <a href="#">
                    <img src={Youtube} alt="YouTube" />
                  </a>
                  <a href="#">
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                </div>
              </div>

              {/* Pagination */}
              <div className="blog-pagination">
                <Link to="/previous-post" className="pagination-item">
                  <span className="pagination-label">Previous</span>
                  <span className="pagination-title">
                    Importers achieve cost savings through...
                  </span>
                </Link>
                <Link to="/next-post" className="pagination-item text-right">
                  <span className="pagination-label">Next</span>
                  <span className="pagination-title">
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
