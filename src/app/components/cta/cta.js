// CTAButton.js
import React from "react";
import styles from "./cta.module.css";

const CTAButton = ({ label, onClick, variant }) => {
  return (
    <button
      className={`${styles.ctaButton} ${styles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CTAButton;
