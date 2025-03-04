// Packages
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";


// Styles
import styles from "./aboutussection.module.css";
import text from "../../../styles/text.module.css";

const AboutUs = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true });

  return (
    <section className={styles.aboutus_section}>
      <motion.div
          className={styles.aboutus_container}
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className={styles.title}>
            Nexplor is a dynamic platform designed for curious travelers and passionate locals to connect through authentic, themed city tours. As a local creator, you’ll have the tools and support needed to share your favorite spots and hidden gems with a global audience, earning while inspiring others.
            <br></br><br></br>
            We create seamless bridge between discovery and connection, making every journey unforgettable.
          </h2>
        </motion.div>
    </section>
  );
};

export default AboutUs;
