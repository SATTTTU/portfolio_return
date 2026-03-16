import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='w-full'
    tiltMaxAngleX={12}
    tiltMaxAngleY={12}
    scale={1.02}
    transitionSpeed={900}
    glareEnable
    glareMaxOpacity={0.15}
    glareColor='#ffffff'
    glarePosition='all'
  >
    <motion.div
      variants={fadeIn("up", "tween", index * 0.12, 0.5)}
      whileHover={{ y: -6 }}
      transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] px-6 py-7 sm:px-10 min-h-[220px] sm:min-h-[260px] flex justify-center items-center flex-col gap-4'>
        <img
          src={icon}
          alt='web-development'
          className='w-14 h-14 sm:w-16 sm:h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.6 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "tween", 0.08, 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.6 }}
        className='mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]'
      >
        I build seamless digital experiences by bridging user-friendly design with powerful backend functionality. My toolkit includes React, Node.js, and .NET Core, and I specialize in creating smarter applications by integrating AI models with TensorFlow and PyTorch.
      </motion.p>

      <motion.div
        variants={staggerContainer(0.12, 0.15)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
