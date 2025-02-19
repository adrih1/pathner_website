"use client";
// Packages
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Styles
import text from "../../../styles/text.module.css";
import styles from "./featuresection.module.css";

const FeatureSection = ({ title, description, image, flexFlow }) => {
  const ref = useRef(null); // Référence à la section
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.section
      ref={ref}
      className={`${styles.feature_container} ${flexFlow ? styles.flex_left : styles.flex_right}`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className={styles.feature_text_container}>
        <h2 className={text.secondary_title}>{title}</h2>
        <p className={text.text}>{description}</p>
      </div>
      <div className={styles.feature_image_container}>
        <img src={image} alt={title} className={styles.feature_image} />
      </div>
    </motion.section>
  );
};

export default FeatureSection;
