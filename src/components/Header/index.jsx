import '../../styles/Header.scss';
import Logo from '../../assets/LOGO.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const pageActuel = location.pathname;

  return (
    <header className="menu">
      <img src={Logo} alt="logo Kasa" />
      <nav>
        <ul>
          <li className={`menu-item ${pageActuel === '/' ? 'ligne' : ''}`}>
            <Link to="/">Accueil</Link>
          </li>
          <li
            className={`menu-item ${pageActuel === '/a-propos' ? 'ligne' : ''}`}
          >
            <Link to="/a-propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
