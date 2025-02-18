import Navbar from "../../Components/Navbar/Navbar";
import HeroSlider from "../../Components/Header/Header";
import Services from "../../Components/Services/Services";
import GlobalPresence from "../../Components/GlobalPresence/GlobalPresence ";
import IndustriesCarousel from "../../Components/IndustriesServed/IndustriesServed";
import AboutUsSection from "../../Components/AboutUsSection/AboutUsSection";
import WhyChooseUsSection from "../../Components/WhyChooseUsSection/WhyChooseUsSection";
import BlogSection from "../../Components/BlogSection/BlogSection";
import NewProduct from "../../Components/NewProduct/NewProduct";
import Testimonials from "../../Components/Testimonials/Testimonials";
import CallToAction from "../../Components/NeedHelp/NeedHelp";
import Footer from "../../Components/Footer/Footer";

export const Home = () => {
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
  )
}
