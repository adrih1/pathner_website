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
      <div className={styles.subfooter}>
        <h2 className={`${text.secondary_title} ${colors.onPrimary}`}>Get early access</h2>
        <p className={`${text.text} ${colors.onPrimary}`}>Enter your email below and you’ll be the first to know when nexplor launches.</p>
        <div className={styles.ctas_container}>
          <EarlyAccessForm />
        </div>
      </div>
      <div className={styles.footer_links}>
        <p>© 2025 nexplor</p>
        <div className={styles.footer_links_right}>
          <p className={styles.link_text}>Terms of Service</p>
          <p className={styles.link_text}>Privacy policy</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
