import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        I'm a skilled MERN full-stack web developer with expertise in
        TypeScript, JavaScript, and frameworks like React and Node.js. I excel
        at collaborating closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems. Let's bring your
        ideas to life together!
      </motion.p>
    </>
  );
};

export default About;
