import Logo from '../../static/images/logo.png';
import './appNavBar.css';

const AppNavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
          <a href="/">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
      </div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      <ul className="navbar-links">
  {/* Inicio removed, logo now links to HOME */}
        <li>
          <a href="/eventos">Eventos</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default AppNavBar;
