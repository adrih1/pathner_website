"use client";

// Packages
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from './phonesection.module.css';  // Assurez-vous de mettre le bon chemin vers votre fichier CSS

const PhoneSection = () => {
  const [scrollY, setScrollY] = useState(0); // Valeur du scrollY global
  const sectionRef = useRef(null); // Référence à la section

  // Fonction qui met à jour la position du scroll global
  const handleScroll = () => {
    setScrollY(window.scrollY); // Utilise window.scrollY pour récupérer la position globale du scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour gérer l'opacité des images en fonction du scrollY
  const getImageOpacity = (threshold) => {
    return scrollY >= threshold ? "none" : "block"; // Si scrollY dépasse le seuil, l'image devient visible
  };

  return (
    <div className={styles.scrollSection} ref={sectionRef}>
      <div className={styles.phone_container}>
        <motion.img
          className={styles.image}
          src="https://img.freepik.com/photos-gratuite/paysage-naturel-lever-soleil-arbres_23-2149134286.jpg"
          alt="Phone"
          initial={{ display: "block" }}
          animate={{ display: getImageOpacity(5000) }}  // Image 1 visible lorsque scrollY >= 0
          transition={{ duration: 0.5 }}
        />
        <motion.img
          className={styles.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRI37eMfuR5NU-BNun7a7ZUFZYnYOaSNfBzw&s"
          alt="Phone"
          initial={{ display: "none" }}
          animate={{ display: getImageOpacity(6000) }} // Image 2 visible lorsque scrollY >= 100
          transition={{ duration: 0.5 }}
        />
        <motion.img
          className={styles.image}
          src="https://img.freepik.com/photos-gratuite/paysage-vertical-lac-montagnes_1398-3850.jpg"
          alt="Phone"
          initial={{ display: "none" }}
          animate={{ display: getImageOpacity(7000) }} // Image 3 visible lorsque scrollY >= 200
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default PhoneSection;
