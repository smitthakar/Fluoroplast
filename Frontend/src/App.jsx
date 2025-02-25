import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence for animations
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
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import BlogDetails from "./Pages/BlogDetails/BlogPost";
import AnimatedPage from "./Components/AnimatedPage/AnimatedPage"; // Import AnimatedPage wrapper

function AnimatedRoutes() {
  const location = useLocation(); // Get current location for animation key

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/aboutus" element={<AnimatedPage><AboutUs /></AnimatedPage>} />
        <Route path="/contact-us" element={<AnimatedPage><ContactUs /></AnimatedPage>} />
        <Route path="/document" element={<AnimatedPage><Document /></AnimatedPage>} />
        <Route path="/gallery" element={<AnimatedPage><Gallery /></AnimatedPage>} />
        <Route path="/certificates" element={<AnimatedPage><Certificates /></AnimatedPage>} />
        <Route path="/industryserved" element={<AnimatedPage><AutomotivePage /></AnimatedPage>} />
        <Route path="/quality-assurance" element={<AnimatedPage><QualityAssurance /></AnimatedPage>} />
        <Route path="/news&events" element={<AnimatedPage><Event /></AnimatedPage>} />
        <Route path="/blogs" element={<AnimatedPage><Blogs /></AnimatedPage>} />
        <Route path="/blog-details" element={<AnimatedPage><BlogDetails /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  );
}

export default App;
