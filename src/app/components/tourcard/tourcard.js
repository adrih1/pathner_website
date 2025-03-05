"use client";

// Packages
import React, { useRef } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// Global Style
import colors from "../../styles/colors.module.css";
import text from "../../styles/text.module.css";

// Local Style
import styles from "./tourcard.module.css";

const TourCard = ({ image, title, city, country, stops, duration, price, rating }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        const rotateX = (y / height) * -10; // Ajustez les valeurs pour modifier l'angle
        const rotateY = (x / width) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (card) {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        }
    };

    return (
        <div
            className={styles.tour_card}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
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
