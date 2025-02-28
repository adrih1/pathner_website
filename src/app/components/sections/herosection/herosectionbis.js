"use client";

// Packages
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import EarlyAccessForm from "../../earlyaccessform/EarlyAccessForm";

// Styles
import colors from "../../../styles/colors.module.css";
import styles from "./herosectionbis.module.css";
import text from "../../../styles/text.module.css";

const HeroSectionBis = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Suivi de l'état de chargement

  return (
    <section className={styles.hero}>
      {/* Afficher la colonne gauche seulement si l'image est chargée */}
      {isImageLoaded && (
        <div className={styles.hero_left_column}>
          <div className={styles.hero_left_column_text}>
            {/* Animation du titre */}
            <motion.h1
              className={`${styles.title} ${colors.onPrimary}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Reinvent the way you explore
            </motion.h1>

            {/* Animation de la description avec un léger délai */}
            {/* <motion.p
              className={`${styles.text} ${colors.onPrimary}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Turn your knowledge into guided experiences. Join a thriving community of Tour creators and explorers.
            </motion.p> */}

            <motion.div
              className={styles.hero_buttons}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <EarlyAccessForm />
            </motion.div>
          </div>
        </div>
      )}

      {/* Animation de l'image avec un effet de translation et d'opacité */}
      <div className={styles.hero_right_column}>
        {/* Loader visible tant que l'image n'est pas chargée */}
        {!isImageLoaded && (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7}}
          style={{ position: "relative" }}
        >
          <Image
            src="/herobis.png"
            alt="App's homepage"
            layout="responsive"
            width={500}
            height={700}
            className={styles.hero_image}
            onLoad={() => setIsImageLoaded(true)} // Définir l'état de chargement à "true" une fois l'image chargée
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionBis ;
