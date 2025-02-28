"use client";

// Packages
import React from "react";
import { motion } from "framer-motion";

// Global Style
// Local Style
import styles from "./herocard.module.css";

const HeroCard = ({ image, title, city, rating, top, left, right, rotate}) => {
  return (
    <motion.div
      className={styles.tour_card}
      style={{ top: top, left: left, right: right, rotate: rotate }}
      initial={{ y: 0 }}
      animate={{ y: [-2, 2, -2] }}
      transition={{
        duration: 2, // Durée d'une boucle complète
        repeat: Infinity, // Répéter à l'infini
        repeatType: "loop", // Type de répétition : "loop", "reverse", ou "mirror"
        ease: "easeInOut", // Courbe d'accélération
        delay: 0.2,
      }}
    >
      <div className={styles.card_content}>
        <div className={styles.rating_container}>
          <p>{rating}</p>
        </div>
        <img src={image} alt="App's homepage" className={styles.image} />
        {/* Dégradé pour améliorer la lisibilité du texte */}
        <div className={styles.gradient_overlay}></div>
        <p className={styles.card_title}>{title}</p>
        <p className={styles.card_city}>{city}</p>
      </div>
    </motion.div>
  );
};

export default HeroCard;
