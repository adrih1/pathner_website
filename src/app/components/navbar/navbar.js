// Packages
import React, { useState, useEffect } from "react";

// Components
import CTAButton from "../cta/cta";

// Styles
import styles from "./navbar.module.css";
import { scrollToSection } from "@/app/utils/scrollToSection";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <a href="#home">nexplor</a>
      </div>
      <div className={styles.nav_links}>
        <a onClick={() => scrollToSection("about-us")} className={styles.nav_link}>About Us</a>
        <a onClick={() => scrollToSection("features")} className={styles.nav_link}>Features</a>
        <a onClick={() => scrollToSection("tours")} className={styles.nav_link}>Tours</a>
        <a onClick={() => scrollToSection("how-it-works")} className={styles.nav_link}>How it works</a>
        <a onClick={() => scrollToSection("faq")} className={styles.nav_link}>FAQ</a>
      </div>
      <CTAButton label="Get Early Access" />
    </nav>
  );
};

export default Navbar;
