"use client";

// Packages
import React from "react";
import { motion } from "framer-motion";

// Local Style
import styles from "./heroimage.module.css";

const HeroImage = ({ image, top, left, right, rotate}) => {
  return (
    <motion.div
      className={styles.image_container}
      style={{ top: top, left: left, right: right, rotate: rotate }}
      initial={{ y: 0 }}
      animate={{ y: [-5, 5, -5] }}
      transition={{
        duration: 2, // Durée d'une boucle complète
        repeat: Infinity, // Répéter à l'infini
        repeatType: "loop", // Type de répétition : "loop", "reverse", ou "mirror"
        ease: "easeInOut", // Courbe d'accélération
        delay: 0.2,
      }}
    >
        <img src={image} className={styles.image}/>
    </motion.div>
  );
};

export default HeroImage;
