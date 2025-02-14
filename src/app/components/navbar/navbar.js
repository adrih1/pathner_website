import React from "react";
import CTAButton from "../cta/cta";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <nav className={styles.nav_container}>
            <div className={styles.logo}>pathner</div>
                <CTAButton label="Click Me" p/>
            </nav>
    </header>

  );
};

export default Navbar;
