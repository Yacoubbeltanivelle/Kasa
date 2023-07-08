import '../../styles/Footer.scss';
import Logo from '../../assets/LOGO2.svg';

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
