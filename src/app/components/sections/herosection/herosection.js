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

      if (scrollY < 550) {
        setCurrentStep(0);
      } else if (scrollY >= 650 && scrollY < 750) {
        setCurrentStep(1);
      } else if (scrollY >= 800 && scrollY < 900) 
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
      title: "Earn & Connect",
      image: "/getstarted_unique.png",
      description: "Monetize your expertise and join a global community of explorers. Every time someone embarks on your tour, you reap the rewards.",
    },
  
    {
      title: "Create & Share",
      image: "/herobis.png",
      description: "Bring your insider knowledge to life with interactive stops and vivid photos. Craft unique tours and let travelers experience the world through your eyes.",
    },
  ];

  return (
    <section id="home" className={styles.hero}>
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
        top="24%"
        right="15%"
        rotate="-1deg"
        disappear={400}
      />
      <HeroCard 
        title="Biking in Île de Ré" 
        city = "La Couarde"
        image="/tour_cards_cover/velo.webp"
        rating="4.1"
        top="20%"
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
          id="regardecettediv"
          initial={{ y: 0 }}
          animate={isAnimating ? { y: [-10, 10, -10] } : { y: 0 }}
          transition={{
            duration: 2,
            repeat: isAnimating ? Infinity : 0, 
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            position: "sticky",
            top: "100px", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "0px auto",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <div className={styles.feature_container}>
          <motion.h2
            key={steps[currentStep].title} // Change le contenu en fonction de l'étape
            className={`${styles.title} ${text.secondary_title}`}
            initial={{ opacity: 0, y: -10}}
            animate={{ opacity: 1, y : 0 }}
            exit={{ opacity: 0, y : 0 }}
            transition={{ duration: 1 }} // Durée de la transition
          >
            {steps[currentStep].title}
          </motion.h2>
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
         <motion.p
            key={steps[currentStep].description} // Change le contenu en fonction de l'étape
            className={`${text.text} ${styles.description}`}
            initial={{ opacity: 0, y: -10}}
            animate={{ opacity: 1, y : 0 }}
            exit={{ opacity: 0, y : 0 }}
            transition={{ duration: 1 }}
          >
            {steps[currentStep].description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
