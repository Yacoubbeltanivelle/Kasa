import '../../styles/Header.scss';
import Logo from '../../assets/LOGO.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="menu">
      <img src={Logo} alt="logo Kasa" />
      <nav>
        <ul>
          <li className="menu-item">
            <Link to="/">Accueil</Link>
          </li>
          <li className="menu-item">
            <Link to="/propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
