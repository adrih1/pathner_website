"use client";

// Packages
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import CTAButton from "../../cta/cta";
import EarlyAccessForm from "../../earlyaccessform/EarlyAccessForm";

// Styles
import colors from "../../../styles/colors.module.css";
import styles from "./herosection.module.css";
import text from "../../../styles/text.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Animation du côté gauche avec titre et description */}
      <div className={styles.hero_left_column}>
        <div className={styles.hero_left_column_text}>
          {/* Animation du titre */}
          <motion.h1
            className={`${text.title} ${colors.onPrimary}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Reinvent the way you explore
          </motion.h1>

          {/* Animation de la description avec un léger délai */}
          <motion.p
            className={`${text.text} ${colors.onPrimary}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Turn your knowledge into guided experiences. Join a thriving community of Tour creators and explorers.
          </motion.p>
        </div>

        <motion.div
          className={styles.hero_buttons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <EarlyAccessForm />
          {/* <input
            type="email"
            placeholder="Your email"
            className={styles.hero_input}
          />
          <CTAButton label="Request Early Access" /> */}
        </motion.div>
      </div>

      {/* Animation de l'image avec un effet de translation et d'opacité */}
      <div className={styles.hero_right_column}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Image
            src="/hero_image.png"
            alt="App's homepage"
            layout="responsive"
            width={500} // Obligatoire mais pas utilisé dans les faits
            height={700} // Obligatoire mais pas utilisé dans les faits
            className={styles.hero_image}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
