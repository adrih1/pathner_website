"use client";

// Packages
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


// Global Style
import colors from "../../styles/colors.module.css";
import text from "../../styles/text.module.css";

// Local Style
import styles from "./tourcard.module.css";

const TourCard = ({ image, title, city, country, stops, duration,  price, rating }) => {
  return (
    <div className={styles.tour_card}>
        <div className={styles.image_container}>
            <Image
                src={image}
                alt="App's homepage"
                width={500} // Obligatoire mais pas utilisé dans les faits
                height={700} // Obligatoire mais pas utilisé dans les faits
                className={styles.image}
            />
        </div>
        <div className={styles.content}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <div className={styles.rating_container}>
                    <p className={styles.rating}>{rating}</p>
                    <FaStar />
                </div>
            </div>
            <p className={styles.tour_info}>{city}, {country}</p>
            <p className={styles.tour_info}>{stops} stops, {duration}h</p>
            <div className={styles.price_container}>
                <p>{price} €</p>
            </div>
        </div>
    </div>
  );
};


export default TourCard;
