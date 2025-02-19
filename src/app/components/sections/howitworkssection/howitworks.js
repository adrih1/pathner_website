"use client";
// Packages
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CiUser } from "react-icons/ci";
import { PiPaintBrush, PiRecycleThin } from "react-icons/pi";
// Styles
import text from "../../../styles/text.module.css";
import styles from "./howitworkssection.module.css";

const HowItWorksSection = ({ title, description, image, flexFlow }) => {
  const ref = useRef(null); // Référence à la section
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className={styles.how_it_works_container}>
        <h2 className={text.secondary_title}>How it works</h2>
        <div className={styles.steps_container}>
            {/* Step One */}
            <div className={styles.step}>
                    <div className={styles.step_icon}>
                        <CiUser className={styles.icon}  />
                    </div>
                <h3 className={text.third_title}>Sign Up & Browse</h3>
                <p className={text.body}>Create your profile and explore a wide selection of tours designed by fellow travelers. Filter by destination, theme, or interest to find your perfect match.</p>
            </div>
            {/* Step Two */}
            <div className={styles.step}>
                    <div className={styles.step_icon}>
                        <PiPaintBrush className={styles.icon}  />
                    </div>
                <h3 className={text.third_title}>Build Your Own Tour</h3>
                <p className={text.body}>Got a special route or hidden gem to share? Use our intuitive interface to craft a detailed itinerary, add photos, and set a price.</p>
            </div>
            {/* Step Three */}
            <div className={styles.step}>
                    <div className={styles.step_icon}>
                        <PiRecycleThin className={styles.icon}  />
                    </div>
                <h3 className={text.third_title}>Earn & Experience</h3>
                <p className={text.body}>Each time someone purchases your tour, you earn money. Meanwhile, enjoy unlimited access to tours from other creators and keep discovering new places.</p>
            </div>
        </div>
    </section>
  );
};

export default HowItWorksSection;
