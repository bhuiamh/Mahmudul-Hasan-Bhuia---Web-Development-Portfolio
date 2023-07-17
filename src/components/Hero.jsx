import { motion } from "framer-motion";

import { styles } from "../style";
import "./Hero.css";

// import { ComputersCanvas } from "./canvas";
import profilePicture from "/desktop_pc/profile.png";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className=" flex-none md:flex">
          <div>
            <h1 className={`md:${styles.heroHeadText} text-[22px] text-white`}>
              Hi, I'm{" "}
              <span className="text-[#915EFF] font-semibold font-serif">
                Mahmudul
              </span>
            </h1>
            <p
              className={`md:${styles.heroSubText} text-base mt-2 text-white-100 md:flex`}
            >
              <h1>
                Full Stack developer <span className="hidden md:inline">|</span>
                &nbsp;
              </h1>
              <h1>
                {" "}
                UI/UX <span className="hidden md:inline">|</span>&nbsp;
              </h1>
              <h1> Web apps</h1>
            </p>
          </div>
          <img className="max-w-[250px] md:max-w-xl" src={profilePicture} />
        </div>
      </div>

      <div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"></div>
      </div>
    </section>
  );
};

export default Hero;
