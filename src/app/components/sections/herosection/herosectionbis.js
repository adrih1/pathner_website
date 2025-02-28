"use client";

// Packages
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import EarlyAccessForm from "../../earlyaccessform/EarlyAccessForm";
import HeroCard from "../../heroelements/herocard/herocard";
import HeroImage from "../../heroelements/heroimage/heroimage";

// Styles
import colors from "../../../styles/colors.module.css";
import styles from "./herosectionbis.module.css";
import text from "../../../styles/text.module.css";

const HeroSectionBis = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Suivi de l'état de chargement

  return (
    <section className={styles.hero}>
      {/* Elements to be placed via calculation */}
      <HeroCard 
        title="Les Secrets du Street Art" 
        city = "Berlin"
        image="/tour_cards_cover/street-art.webp"
        rating="4.3"
        top="5%"
        left="40px"
        rotate="-5deg"
      />
      <HeroCard 
        title="Journée dans les Pouilles" 
        city = "Bari"
        image="/tour_cards_cover/pouilles.jpg"
        rating="4.8"
        top="8%"
        right="40px"
        rotate="2deg"
      />
      <HeroCard 
        title="Nimes et son histoire" 
        city = "Nîmes"
        image="/tour_cards_cover/nimes.jpg"
        rating="4.8"
        top="30%"
        right="15%"
        rotate="0deg"
      />
      <HeroImage 
        image="/tourism.png"
        top="30%"
        left="15%"
        rotate="-2deg"
      />

      {isImageLoaded && (
        <div className={styles.hero_left_column}>        
          <div className={styles.hero_left_column_text}>
            {/* Animation du titre */}
            <motion.h1
              className={`${styles.title}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span style={{color: 'var(--primary)'}}>Reinvent</span> the way you  <span style={{color: 'var(--primary)'}}>explore</span>
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
          style={{paddingTop: "10px"}}
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }} // Déplacement en boucle de -10px à 10px
          transition={{
            duration: 2, // Durée d'une boucle complète
            repeat: Infinity, // Répéter à l'infini
            repeatType: "loop", // Type de répétition : "loop", "reverse", ou "mirror"
            ease: "easeInOut", // Courbe d'accélération
          }}
        >
          <Image
            src="/herobis.png"
            alt="App's homepage"
            layout="responsive"
            width={400}
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
