import { logementList } from '../../datas/logements';
import { useParams } from 'react-router-dom';

function FicheLogement() {
  const { id } = useParams();

  const logement = logementList.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      {/* Afficher les autres informations du logement */}
    </div>
  );
}

export default FicheLogement;
