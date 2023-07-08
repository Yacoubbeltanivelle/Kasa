import '../../styles/Home.scss';
import imgCouverture from '../../assets/Couverture1.png';
import { logementList } from '../../datas/logements';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <div className="imgCouverture">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={imgCouverture} alt="image de couverture" />
      </div>

      <div className="galerie">
        {logementList.map((logements) => (
          <Link to={`/logement/${logements.id}`} key={logements.id}>
            <figure>
              <figcaption>{logements.title}</figcaption>
              <img src={logements.cover} alt={logements.title} />
            </figure>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
