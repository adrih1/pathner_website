import React, { useState } from "react";
import CTAButton from "../cta/cta";
import styles from "./EarlyAccess.module.css";
import { toast } from "react-hot-toast";

const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Indicateur de chargement

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email!"); // Notification d'erreur
      return;
    }

    // Vide le champ immédiatement
    const currentEmail = email;
    setEmail("");
    setLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: currentEmail }),
      });

      if (res.ok) {
        // Utilisation du toast.success avec une durée de 4 secondes
        toast.success("Thank you for signing up!", {
          duration: 3000, // Durée en millisecondes (4 secondes)
        });
      } else {
        toast.error("Failed to send email. Please try again later."); // Notification d'erreur
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again."); // Notification d'erreur
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={styles.hero_input}
          required
        />
        <CTAButton label={loading ? "Loading ..." : "Get Early Access"} type="submit" />
      </form>
    </div>
  );
};

export default EarlyAccessForm;
