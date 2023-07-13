import { motion } from "framer-motion";

import { styles } from "../style";
import "./Hero.css";

// import { ComputersCanvas } from "./canvas";
// import profilePhoto from "./desktop_pc/profile.jpg";
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

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Mahmudul</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            MERN developer | UI/UX | Web apps
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div className="ImgContainer absolute inset-0 top-[280px] mx-auto">
        <img
          className="relative max-w-[150px] md:max-w-[300px] mx-auto"
          src="https://drive.google.com/uc?export=view&id=19Cqm9Yxwao6ot-HtMgAacwEsHq0EVXoj"
          alt="Profile Picture"
        />
        <img
          src="https://drive.google.com/uc?export=download&id=1bY2ixpxXPrnB4DWznWRZDDDpQjeIoTy1"
          alt="Circle"
          className="rotating-image max-w-[200px] md:max-w-[500px]"
        />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
