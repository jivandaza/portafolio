import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
              src={icon}
              alt='web-development'
              className='w-16 h-16 object-contain'
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
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introducción</p>
          <h2 className={styles.sectionHeadText}>Descripción general.</h2>
        </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
            Soy un desarrollador de software capacitado con experiencia en Php, TypeScript y
            JavaScript. Experiencia en marcos como Laravel, React, Node.js,
            Express.js, MongoDB, MySQL y PostgreSQL. Aprendo rápido y colaboro estrechamente con los clientes para
            crear soluciones eficientes, escalables y fáciles de usar que resuelvan
            problemas del mundo real. ¡Trabajemos juntos para hacer realidad tus ideas!
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
  );
};

export default SectionWrapper(About, "sobre-mi");