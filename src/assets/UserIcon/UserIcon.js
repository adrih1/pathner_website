import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import userAnimation from "./user-white.json";

const UserIcon = ({ className }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Active le rendu uniquement côté client
  }, []);

  if (!isClient) return null; // Ne rien rendre côté serveur

  return (
    <div className={className}>
      <Lottie
        animationData={userAnimation}
        loop={true}
        style={{ height: "100%", width: "100%" }} // Permet aux styles parents de contrôler la taille
      />
    </div>
  );
};

export default UserIcon;
