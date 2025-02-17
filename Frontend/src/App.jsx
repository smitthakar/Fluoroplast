import "./App.css";
import "./index.css"; // Or the correct path to your global CSS
import Navbar from "../src/Components/Navbar/Navbar";
import HeroSlider from "./Components/Header/Header";
import "@fontsource/red-hat-display"; // Defaults to 400 weight
import "@fontsource/red-hat-display/700.css"; // Bold variant
import Services from "./Components/Services/Services";
import GlobalPresence from "./Components/GlobalPresence/GlobalPresence ";
import NewProduct from "./Components/NewProduct/NewProduct";
import BlogSection from "./Components/BlogSection/BlogSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Services />
      <GlobalPresence />
      <NewProduct />
      <BlogSection />
    </>
  );
}

export default App;
