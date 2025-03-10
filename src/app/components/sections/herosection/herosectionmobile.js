"use client";

// Packages
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import EarlyAccessForm from "../../earlyaccessform/EarlyAccessForm";
import HeroCard from "../../heroelements/herocard/herocard";

// Styles
import styles from "./herosectionmobile.module.css";
import text from "../../../styles/text.module.css";

const HeroSectionMobile = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Suivi de l'état de chargement

  return (
    <section className={styles.hero}>
      {/* Elements to be placed via calculation */}
      <div style={{position: 'relative', display: 'flex', height: '200px', width: '100%'}}>
        <HeroCard 
          title="Les Secrets du Street Art" 
          city = "Berlin"
          image="/tour_cards_cover/street-art.webp"
          rating="4.3"
          top="0%"
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
      </div>
      
      <HeroCard 
        title="Nimes et son histoire" 
        city = "Nîmes"
        image="/tour_cards_cover/nimes.jpg"
        rating="4.8"
        top="55%"
        right="2%"
        rotate="3deg"
      />
      <HeroCard 
        title="Nimes et son histoire" 
        city = "Nîmes"
        image="/tour_cards_cover/nimes.jpg"
        rating="4.8"
        top="60%"
        left="5%"
        rotate="-2deg"
      />
     

      {isImageLoaded && (
        <div className={styles.hero_left_column}>        
          <div className={styles.hero_left_column_text}>
            <h1 className={`${text.title}`}>
              <span style={{color: '#48704F'}}>Reinvent</span> the way you  <span style={{color: '#48704F'}}>explore</span>
            </h1>

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
          style={{paddingTop: "10px", paddingBottom: "10px"}}
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

export default HeroSectionMobile ;
