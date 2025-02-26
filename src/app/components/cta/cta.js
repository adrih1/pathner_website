// CTAButton.js
import React from "react";
import styles from "./cta.module.css";

const CTAButton = ({ label, onClick, variant, type = "button" }) => {
  return (
    <button
      className={`${styles.ctaButton} ${styles[variant]}`}
      onClick={onClick}
      type={type} 
    >
      {label}
    </button>
  );
};

export default CTAButton;
