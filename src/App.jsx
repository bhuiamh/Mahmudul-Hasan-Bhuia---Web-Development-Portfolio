import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Works,
  StarsCanvas,
  Navbar,
  Tech,
} from "./components";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
        <About></About>
        <Experience></Experience>
        <Tech></Tech>
        <Works></Works>
        <Feedbacks></Feedbacks>
        <div className="relative z-0">
          <Contact></Contact>
          {/* <StarsCanvas></StarsCanvas> */}
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
