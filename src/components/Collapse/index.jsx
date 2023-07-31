import React, { useState } from 'react';
import '../../styles/Collapse.scss';

function Collapse({ titre, contenu }) {
  const [affichage, setAffichage] = useState(false);

  const afficher = () => {
    setAffichage(!affichage);
  };

  return (
    <div className={`collapse ${affichage ? 'extension' : ''}`}>
      <h3>
        {titre}
        <i
          className={`fa-solid fa-chevron-up ${affichage ? 'rotation' : ''}`}
          onClick={afficher}
        ></i>
      </h3>
      <p>{contenu}</p>
    </div>
  );
}

export default Collapse;
