import {  Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css"; // Or the correct path to your global CSS
import "@fontsource/red-hat-display"; // Defaults to 400 weight
import "@fontsource/red-hat-display/700.css"; // Bold variant
import Document from "./Pages/Documents/Documents";
import Certificates from "./Pages/Certificates/Certificates";
import { Home } from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Gallery from "./Pages/Gallery/Gallery";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AutomotivePage from "./Pages/AutomotivePage/AutomotivePage";
import QualityAssurance from "./Pages/QualityAssurance/QualityAssurance";
import Event from "./Pages/New&Event/Event";
import BlogPost from "./Pages/BlogDetails/BlogPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/document" element={<Document />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path = "/industryserved" element={<AutomotivePage />} />
      <Route path = "/quality-assurance" element={<QualityAssurance />} />
      <Route path = "/news&events" element={<Event />} />
      <Route path = "/blog-details" element={<BlogPost />} />
    </Routes>
    // <Event />
  );
}

export default App;
