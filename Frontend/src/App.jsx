import "./App.css";
import "./index.css"; // Or the correct path to your global CSS
import Navbar from "../src/Components/Navbar/Navbar";
import HeroSlider from "./Components/Header/Header";
import "@fontsource/red-hat-display"; // Defaults to 400 weight
import "@fontsource/red-hat-display/700.css"; // Bold variant
import Services from "./Components/Services/Services";
import GlobalPresence from "./Components/GlobalPresence/GlobalPresence ";
import IndustriesCarousel from "./Components/IndustriesServed/IndustriesServed";
import AboutUsSection from "./Components/AboutUsSection/AboutUsSection";
import WhyChooseUsSection from "./Components/WhyChooseUsSection/WhyChooseUsSection";
import BlogSection from "./Components/BlogSection/BlogSection";
import NewProduct from "./Components/NewProduct/NewProduct";
import Testimonials from "./Components/Testimonials/Testimonials";
import CallToAction from "./Components/NeedHelp/NeedHelp";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Services />
      <GlobalPresence />
      <IndustriesCarousel />
      <AboutUsSection />
      <WhyChooseUsSection />
      <NewProduct />
      <Testimonials />
      <BlogSection />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
