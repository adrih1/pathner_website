"use client";

// Packages
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import EarlyAccessForm from "../../earlyaccessform/EarlyAccessForm";
import HeroCard from "../../heroelements/herocard/herocard";

// Styles
import styles from "./herosection.module.css";
import text from "../../../styles/text.module.css";

const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Suivi de l'état de chargement
  const [isAnimating, setIsAnimating] = useState(true); // Contrôle de l'animation
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Arrête l'animation lorsque le scroll dépasse 400px
      setIsAnimating(scrollY < 350);

      if (scrollY < 450) {
        setCurrentStep(0);
      } else if (scrollY >= 500 && scrollY < 800) {
        console.log('coucou')
        setCurrentStep(1);
      } else if (scrollY >= 810 && scrollY < 10000) 
        setCurrentStep(2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const steps = [
    {
      title: "Explore & Enjoy",
      image: "/herobis.png",
      description: "Dive into the wonderful itinerary of a unique tour created by a local!",
    },
    {
      title: "Adventure Awaits",
      image: "/dual.png",
      description: "Cycle through the picturesque scenery of Île de Ré.",
    },
    {
      title: "Discover Hidden Gems",
      image: "/getstarted.png",
      description: "Uncover secrets and stories behind street art in Berlin.",
    },
  
  ];

  return (
    <section id="home" className={styles.hero}>
      {/* Elements to be placed via calculation */}
      <HeroCard 
        title="Secrets of Street Art" 
        city = "Berlin"
        image="/tour_cards_cover/street-art.webp"
        rating="4.3"
        top="5%"
        left="40px"
        rotate="-5deg"
      />
      <HeroCard 
        title="A Day in the Pouilles" 
        city = "Bari"
        image="/tour_cards_cover/pouilles.jpg"
        rating="4.5"
        top="8%"
        right="40px"
        rotate="2deg"
      />
      <HeroCard 
        title="Nimes and its history" 
        city = "Nîmes"
        image="/tour_cards_cover/nimes.jpg"
        rating="4.9"
        top="30%"
        right="15%"
        rotate="-1deg"
        disappear={400}
      />
      <HeroCard 
        title="Biking in Île de Ré" 
        city = "La Couarde"
        image="/tour_cards_cover/velo.webp"
        rating="4.1"
        top="35%"
        left="15%"
        rotate="-1deg"
        disappear={400}
      />

      {isImageLoaded && (
        <div className={styles.hero_left_column}>        
          <div className={styles.hero_left_column_text}>
            {/* Animation du titre */}
            <motion.h1
              className={`${text.title}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span style={{color: '#48704F'}}>Reinvent</span> the way you  <span style={{color: '#48704F'}}>explore</span>
            </motion.h1>

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
          style={{
            margin: "0px auto",
            paddingTop: "10px",
            paddingBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            position: "sticky",
            top: "100px",
            zIndex: 10,
          }}
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 2,
            repeat: isAnimating ? Infinity : 0, // Arrête la répétition si `isAnimating` est faux
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <div className={styles.feature_container}>
            <h2 className={`${text.secondary_title} ${styles.title}`}>
              {steps[currentStep].title}
            </h2>
          </div>
          <Image
            src={steps[currentStep].image}
            alt={steps[currentStep].title}
            layout="responsive"
            width={400}
            height={700}
            className={styles.hero_image}
            onLoad={() => setIsImageLoaded(true)}
          />
          <p className={`${text.text} ${styles.description}`}>
            {steps[currentStep].description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
