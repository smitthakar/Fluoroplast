import "./App.css";
import "./index.css"; // Or the correct path to your global CSS
import "@fontsource/red-hat-display"; // Defaults to 400 weight
import "@fontsource/red-hat-display/700.css"; // Bold variant
<<<<<<< HEAD
import Document from "./Pages/Documents/Documents";
import Certificates from "./Pages/Certificates/Certificates";
import { Home } from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Gallery from "./Pages/Gallery/Gallery";
import ContactUs from "./Pages/ContactUs/ContactUs";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/document" element={<Document/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    
=======
// import { Home } from "./Pages/Home/Home";
// import AboutUs from "./Pages/AboutUs/AboutUs";
import AutomotivePage from "./Pages/AutomotivePage/AutomotivePage";
// import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <>
      {/* <ContactUs /> */}
      {/* <Home /> */}
      {/* <AboutUs /> */}
      <AutomotivePage />
    </>
>>>>>>> a3f089400f2a4242f75b409f41488f07567b3e04
  );
}

export default App;
