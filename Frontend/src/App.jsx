import { Route, Routes, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
import "./App.css";
import "./index.css";
import "@fontsource/red-hat-display";
import "@fontsource/red-hat-display/700.css";
import Document from "./Pages/Documents/Documents";
import Certificates from "./Pages/Certificates/Certificates";
import { Home } from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Gallery from "./Pages/Gallery/Gallery";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AutomotivePage from "./Pages/AutomotivePage/AutomotivePage";
import QualityAssurance from "./Pages/QualityAssurance/QualityAssurance";
import Event from "./Pages/New&Event/Event";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetails from "./Pages/BlogDetails/BlogPost";
import AnimatedPage from "./Components/AnimatedPage/AnimatedPage";
// import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"; // Import ScrollToTop

function AnimatedRoutes() {
  // const location = useLocation();

  return (
    <>
      {/* <ScrollToTop />  */}
      {/* <AnimatePresence mode="wait"> */}
        <Routes >
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/aboutus" element={<AnimatedPage><AboutUs /></AnimatedPage>} />
          <Route path="/contact-us" element={<AnimatedPage><ContactUs /></AnimatedPage>} />
          <Route path="/document" element={<AnimatedPage><Document /></AnimatedPage>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/industryserved" element={<AnimatedPage><AutomotivePage /></AnimatedPage>} />
          <Route path="/quality-assurance" element={<AnimatedPage><QualityAssurance /></AnimatedPage>} />
          <Route path="/news&events" element={<AnimatedPage><Event /></AnimatedPage>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blog-details" element={<AnimatedPage><BlogDetails /></AnimatedPage>} />
        </Routes>
      {/* </AnimatePresence> */}
    </>
  );
}

export default AnimatedRoutes;
