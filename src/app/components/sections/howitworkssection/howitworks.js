"use client";

// Packages
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CiUser } from "react-icons/ci";
import { PiPaintBrush, PiRecycleThin } from "react-icons/pi";

// Icons
import UserIcon from "@/assets/UserIcon/UserIcon";
import TourIcon from "@/assets/TourIcon/TourIcon";
import InfinityIcon from "@/assets/InfinityIcon/InfinityIcon";

// Styles
import text from "../../../styles/text.module.css";
import styles from "./howitworkssection.module.css";

const HowItWorksSection = ({ title, description, image, flexFlow }) => {
  const ref = useRef(null); // Référence à la section
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className={styles.how_it_works_container}>
        <motion.h2 
            className={text.secondary_title}
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
        >
            How it works
        </motion.h2>
        <div className={styles.steps_container}>
            {/* Step One */}
            <motion.div
                ref={ref}
                className={styles.step}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <div className={styles.step_icon}>
                    <UserIcon className={styles.icon}  />
                </div>
                <h3 className={text.third_title}>Sign Up & Browse</h3>
                <p className={text.body}>Create your profile and explore a wide selection of tours designed by fellow travelers. Filter by destination, theme, or interest to find your perfect match.</p>
            </motion.div>
            {/* Step Two */}
            <motion.div
                ref={ref}
                className={styles.step}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                    <div className={styles.step_icon}>
                        <TourIcon className={styles.icon}/>
                    </div>
                <h3 className={text.third_title}>Build Your Own Tour</h3>
                <p className={text.body}>Got a special route or hidden gem to share? Use our intuitive interface to craft a detailed itinerary, add photos, and set a price.</p>
            </motion.div>
            {/* Step Three */}
            <motion.div
                ref={ref}
                className={styles.step}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                    <div className={styles.step_icon}>
                        <InfinityIcon className={styles.icon}/>
                    </div>
                <h3 className={text.third_title}>Earn & Experience</h3>
                <p className={text.body}>Each time someone purchases your tour, you earn money. Meanwhile, enjoy unlimited access to tours from other creators and keep discovering new places.</p>
            </motion.div>
        </div>
    </section>
  );
};

export default HowItWorksSection;
