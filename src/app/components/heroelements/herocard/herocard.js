"use client";

// Packages
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Local Style
import { FaStar } from "react-icons/fa";
import styles from "./herocard.module.css";

const HeroCard = ({ image, title, city, rating, top, left, right, rotate, disappear }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (disappear) {
        const scrollY = window.scrollY;
        setIsVisible(scrollY < disappear);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [disappear]);

  return (
    <motion.div
      className={styles.tour_card}
      style={{
        top: top,
        left: left,
        right: right,
        rotate: rotate,
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0, y: [-3, 3, -3] }}
      transition={{
        opacity: { duration: 0.5, ease: "easeInOut" }, // Transition douce pour l'opacité
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }, // Animation de rebond
      }}
    >
      <div className={styles.card_content}>
        <div className={styles.rating_container}>
          <p className={styles.rating_text}>{rating}</p>
          <FaStar />
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
