import Logo from '../static/images/logo.png';
import './appNavBar.css';

const AppNavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo" />
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
        <li>
          <a href="/">Inicio</a>
        </li>
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