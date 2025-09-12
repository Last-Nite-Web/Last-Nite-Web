import lastNiteLogo from '../../static/images/logo.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <img src={lastNiteLogo} alt="Last Nite Logo" className="home-logo" />
        <h1 className="home-title">LAST NITE</h1>
        <p className="home-subtitle">La fiesta de año nuevo más cercana, divertida y auténtica de Alcalá de Guadaira</p>
        <div className="home-cta">
          <span>¡Vive la última noche del año con nosotros!</span>
        </div>
      </div>
      <div className="home-info">
        <h2>¿Por qué elegir LAST NITE?</h2>
        <ul>
          <li>Ambiente de amigos y buen rollo</li>
          <li>DJ y música top toda la noche</li>
          <li>Precios asequibles y sin colas eternas</li>
          <li>Local privado, seguro y cerca de casa</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
