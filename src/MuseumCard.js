import React, { useState } from "react";
import "./MuseumCard.css";
import ToggleSwitch from "./ToggleSwitch"; // Importando o ToggleSwitch

const MuseumCard = ({ museum }) => {
  const [isLiked, setIsLiked] = useState(false); // Estado para like/dislike

  const handleToggle = () => {
    setIsLiked((prev) => !prev); 
  };

  return (
    <div className="museum-card" id={`museum-${museum.id}`}>
      <h2>{museum.name}</h2>
      <h3>{museum.location}</h3>
      <p>{museum.description}</p>
      <div className="media-container">
        <img
          src={museum.image}
          alt={`Imagem de ${museum.name}`}
          className="museum-image"
        />
        <video
          controls
          className="museum-video"
          src={museum.video}
          alt={`Vídeo do ${museum.name}`}
        />
      </div>
      <div className="feedback-section">
        <label>
          {isLiked
            ? "Você gostou deste vídeo!"
            : "Você não gostou deste vídeo."}
        </label>
        <ToggleSwitch isOn={isLiked} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default MuseumCard;
