import "./App.css";
import "./index.css"; // Or the correct path to your global CSS
import "@fontsource/red-hat-display"; // Defaults to 400 weight
import "@fontsource/red-hat-display/700.css"; // Bold variant
import { Home } from "./Pages/Home/Home";

import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  return (
    <>

      {/* <Home /> */}
      <ContactUs />
    </>
  );
}

export default App;
