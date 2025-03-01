// Packages
import React, { useState, useEffect } from "react";


// Styles
import styles from "./aboutussection.module.css";
import text from "../../../styles/text.module.css";

const AboutUs = () => {

  return (
    <section className={styles.aboutus_section}>
        <div className={styles.aboutus_container}>
            <h2 className={styles.title}>
                Nexplor is a dynamic platform designed for curious travelers and passionate locals to connect through authentic, themed city tours. As a local creator, you’ll have the tools and support needed to share your favorite spots and hidden gems with a global audience, earning while inspiring others.
                <br></br><br></br>
                We create seamless bridge between discovery and connection, making every journey unforgettable.
            </h2>
        </div>
    </section>
  );
};

export default AboutUs;
