import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/document" element={<Document />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/industryserved" element={<AutomotivePage />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />
        <Route path="/news&events" element={<Event />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
