import "./App.css";
import "./index.css"; // Or the correct path to your global CSS
import "@fontsource/red-hat-display"; // Defaults to 400 weight
import "@fontsource/red-hat-display/700.css"; // Bold variant
// import { Home } from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      {/* <Home /> */}
      <AboutUs />
    </>
  );
}

export default App;
