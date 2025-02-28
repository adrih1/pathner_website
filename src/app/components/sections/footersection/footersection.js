"use client";

// Packages
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import EarlyAccessForm from "../../earlyaccessform/EarlyAccessForm";

// Styles
import colors from "../../../styles/colors.module.css";
import styles from "./footersection.module.css";
import text from "../../../styles/text.module.css";

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_cta_container}>
        <h2 className={styles.footer_title}>Ready to change the<br></br><span style={{color: 'var(--primary)'}}>Way You Explore ? 🌍</span></h2>
        <div className={styles.cta_container}>
          <EarlyAccessForm />
        </div>
      </div>
      <div className={styles.footer_links_container}>
        <div className={styles.footer_links_left}>
          <p className={styles.footer_link}>Terms and Conditions</p>
          <p className={styles.footer_link}>Privacy Policy</p>
          <p className={styles.footer_link}>Help & Support</p>
        </div>
        <div className={styles.footer_links_right}>
          <p className={styles.footer_link}>All rights reserved, © nexplor</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
