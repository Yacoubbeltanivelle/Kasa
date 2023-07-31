import { Link } from 'react-router-dom';
import '../../styles/Erreur.scss';

function Erreur() {
  return (
    <main className="main-erreur">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="ligne" to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Erreur;
