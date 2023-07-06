import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ index, title, icon }) => {
  <title className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    ></motion.div>
  </title>;
};

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
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default About;
