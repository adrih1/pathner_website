"use client";

// Packages
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import TourCard from "../../tourcard/tourcard";

// Data
import tours from "../../tourcard/tourCardData.json"; // Importez le fichier JSON

// Styles
import colors from "../../../styles/colors.module.css";
import styles from "./localexperiencesection.module.css";
import text from "../../../styles/text.module.css";

const LocalExperienceSection = () => {
  return (
    <section id="tours" className={styles.local_experience}>
      <div className={styles.left_column}>
        <h2 className={`${text.secondary_title} ${colors.onPrimary}`}>Dive into our local experiences</h2>
        <p className={`${text.text} ${colors.onPrimary} ${text.max_width_700}`}>Every itinerary is crafted by locals who know their city best. Find hidden gems, unique spots, and unforgettable adventures.</p>
      </div>
      <div className={styles.right_column}>
        <motion.div
          className={styles.carousel}
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35, // Durée d'une boucle
            ease: "linear", // Défilement fluide
          }}
        >
          {/* Deux lots pour un effet infini */}
          {[...tours, ...tours].map((tour, index) => (
            <div className={styles.card_wrapper} key={index}>
              <TourCard
                image={tour.image}
                title={tour.title}
                city={tour.city}
                country={tour.country}
                stops={tour.stops}
                duration={tour.duration}
                price={tour.price}
                rating={tour.rating}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocalExperienceSection;
