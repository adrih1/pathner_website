"use client";

// Packages
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Icons
import { CiUser } from "react-icons/ci";
import { PiPaintBrush, PiRecycleThin } from "react-icons/pi";

// Styles
import text from "../../../styles/text.module.css";
import styles from "./howitworkssection.module.css";

const HowItWorksSection = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true });

  return (
    <section className={styles.how_it_works_container}>
        <motion.h2 
            className={`${text.secondary_title} ${styles.how_it_works_title}`}
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
        >
            Few easy steps and you're good to<br></br>{" "}

            <motion.span
                style={{ color: "var(--primary)", display: "inline-block" }}
                animate={{
                    rotate: [10, -10, 10, 0, 0, 0], // Tremble (rotate) puis s'arrête
                }}
                transition={{
                    duration: 1.5, // Durée totale (inclut tremblements et pause)
                    repeat: Infinity, // Boucle infinie
                    ease: "easeInOut", // Courbe d'animation fluide
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1], // Contrôle précis du timing
                }}
            >GO</motion.span>{" "}
            !
        </motion.h2>

       
        <div className={styles.steps_container}>
            {/* Step One */}
            <motion.div
                ref={ref}
                className={styles.step}
                style={{ backgroundColor: '#5F9569' }}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <div className={styles.step_number_container}>
                    <p className={styles.step_number} style={{color: 'var(--primary)'}}>1</p>
                </div>
                <h3 className={text.third_title}>Sign Up & Browse</h3>
                <p className={text.body}>Create your profile and explore a <strong>wide selection</strong> of tours designed by <strong>fellow travelers</strong>. Filter by destination, theme, or interest to find your perfect match.</p>
            </motion.div>
            {/* Step Two */}
            <motion.div
                ref={ref}
                className={styles.step}
                style={{ backgroundColor: 'var(--primary)' }}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <div className={styles.step_number_container}>
                    <p className={styles.step_number} style={{color: '#38573D'}}>2</p>
                </div>
                <h3 className={text.third_title}>Build Your Own Tour</h3>
                <p className={text.body}>Got a special route or <strong>hidden gem</strong> to share? Use our intuitive interface to craft a <strong>detailed itinerary</strong>, add photos, and set a price.</p>
            </motion.div>
            {/* Step Three */}
            <motion.div
                ref={ref}
                className={styles.step}
                style={{ backgroundColor: '#38573D' }}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                <div className={styles.step_number_container}>
                    <p className={styles.step_number} style={{color: '#304B34'}}>3</p>
                </div>
                <h3 className={text.third_title}>Earn & Experience</h3>
                <p className={text.body}>Each time someone purchases your tour, you <strong>earn money</strong>. Meanwhile, enjoy unlimited access to tours from other creators and <strong>keep discovering new places</strong>.</p>
            </motion.div>
        </div>
    </section>
  );
};

export default HowItWorksSection;
