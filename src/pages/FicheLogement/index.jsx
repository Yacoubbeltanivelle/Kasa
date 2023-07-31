import '../../styles/FicheLogement.scss';
import { Navigate } from 'react-router-dom';
import { logementList } from '../../datas/logements';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Gallery from '../../components/Gallery';

function FicheLogement() {
  const { id } = useParams();
  const logement = logementList.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/erreur" />;
  }

  const { pictures } = logement;

  const Note = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < logement.rating) {
        stars.push(<i key={i} className="fa-solid fa-star"></i>);
      } else {
        stars.push(
          <i
            key={i}
            className="fa-solid fa-star biographie__note__etoile--vide"
          ></i>
        );
      }
    }

    return stars;
  };

  const EquipmentsList = () => {
    const equipementsList = [];

    for (let i = 0; i < logement.equipments.length; i++) {
      equipementsList.push(<li key={i}>{logement.equipments[i]}</li>);
    }

    return <ul className="equipementsList">{equipementsList}</ul>;
  };

  return (
    <main>
      <Gallery images={pictures} />

      <div className="bio-infos">
        <div className="infos">
          <div className="infos__titre">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>

          <div className="infos__tags">
            {logement.tags.map((tag) => (
              <span className="infos__tags__tag">{tag}</span>
            ))}
            ;
          </div>
        </div>

        <div className="biographie">
          <div className="biographie__host">
            <h2>
              {logement.host.name.split(' ')[0]} <br />
              {logement.host.name.split(' ')[1]}
            </h2>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          <div className="biographie__note">
            <Note />
          </div>
        </div>
      </div>

      <div className="infos-tech">
        <div className="infos-tech__collapse">
          <Collapse titre={'Description'} contenu={logement.description} />
        </div>
        <div className="infos-tech__collapse">
          <Collapse titre={'Équipements'} contenu={<EquipmentsList />} />
        </div>
      </div>
    </main>
  );
}

export default FicheLogement;
