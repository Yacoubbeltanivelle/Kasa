import '../../styles/Home.scss';
import imgCouverture from '../../assets/Couverture1.png';
import { logementList } from '../../datas/logements';
import { Link } from 'react-router-dom';
import Banniere from '../../components/Banniere';
import Carte from '../../components/Carte';

function Home() {
  return (
    <main>
      <Banniere
        image={imgCouverture}
        titre={'Chez vous, partout et ailleurs'}
      />

      <div className="galerie">
        {logementList.map((logements) => (
          <Link to={`/logement/${logements.id}`} key={logements.id}>
            <Carte titre={logements.title} image={logements.cover} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
