import React, { useState } from 'react';
import '../../styles/Gallery.scss';
import flecheGauche from '../../assets/flecheGauche.svg';
import flecheDroite from '../../assets/flecheDroite.svg';

function Gallery({ images }) {
  const [indexActuel, setIndexActuel] = useState(0);

  const handleLeftArrowClick = () => {
    setIndexActuel((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setIndexActuel((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div id="banner">
      <img
        src={flecheGauche}
        alt="Fleche de Gauche"
        id="fleche-left"
        className="arrow arrow_left"
        onClick={handleLeftArrowClick}
      />
      <img
        src={flecheDroite}
        alt="Fleche de Droite"
        id="fleche-right"
        className="arrow arrow_right"
        onClick={handleRightArrowClick}
      />
      <img
        id="banner-img"
        className="banner-img"
        src={images[indexActuel]}
        alt="Banner Print-it"
      />
      <div className="numeros">
        <span>
          {indexActuel + 1}/{images.length}
        </span>
      </div>
    </div>
  );
}

export default Gallery;
