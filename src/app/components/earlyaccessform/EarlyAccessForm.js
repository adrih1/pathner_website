import React, { useState } from "react";
import CTAButton from "../cta/cta";
import styles from "./EarlyAccess.module.css";
import { toast } from "react-hot-toast";

const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email!"); // Notification d'erreur
      return;
    }

    // Vide l'input immédiatement
    const currentEmail = email;
    setEmail("");

    // Création d'un toast d'attente
    const toastId = toast.loading("Sending your request...");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: currentEmail }),
      });

      if (res.ok) {
        toast.success("Thank you for signing up!", { id: toastId }); // Mise à jour du toast d'attente en succès
      } else {
        toast.error("Failed to send email. Please try again later.", { id: toastId }); // Mise à jour du toast en erreur
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.", { id: toastId }); // Mise à jour du toast en erreur
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.cta_container}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={styles.hero_input}
        required
      />
      <CTAButton label="Get Early Access" type="submit" />
    </form>
  );
};

export default EarlyAccessForm;
