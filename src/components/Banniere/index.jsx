import '../../styles/Banniere.scss';
import Chargement from '../../components/Chargement';
import { useEffect, useState } from 'react';

function Banniere({ image, titre, className }) {
  const [charger, setCharger] = useState(true);

  useEffect(() => {
    if (image) {
      setCharger(false);
    }
  }, [image]);

  return (
    <div className={`imgCouverture ${className}`}>
      <h1>{titre}</h1>

      {charger ? <Chargement /> : <img src={image} alt={titre} />}
    </div>
  );
}

export default Banniere;
