import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css"; // Or the correct path to your global CSS
import "@fontsource/red-hat-display"; // Defaults to 400 weight
import "@fontsource/red-hat-display/700.css"; // Bold variant
import {Home} from "../src/Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AutomotivePage from "./Pages/AutomotivePage/AutomotivePage";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/automotive" element={<AutomotivePage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
