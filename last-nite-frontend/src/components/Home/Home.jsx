import { useEffect, useState } from 'react';
import lastNiteLogo from '../../static/images/logo.png';
import './Home.css';

// Calcula la próxima medianoche de fin de año.
const buildTargetDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const thisYearTarget = new Date(`${year}-12-31T23:59:59`);
  return now > thisYearTarget
    ? new Date(`${year + 1}-12-31T23:59:59`)
    : thisYearTarget;
};

let targetDate = buildTargetDate();

const getTimeLeft = () => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  if (diff <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const pad = (n) => String(n).padStart(2, '0');
  return { days: pad(days), hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
};

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      // Si ya pasó el target, recalcular para el próximo año automáticamente.
      if (new Date() > targetDate) {
        targetDate = buildTargetDate();
      }
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePrimaryCTA = () => {
    // Placeholder para futura navegación / modal de compra de entradas
    alert('Próximamente venta de entradas 🎟️');
  };

  return (
    <div className="home-container">
      <header className="home-hero" role="banner">
        <div className="hero-overlay" aria-hidden="true" />
        <img src={lastNiteLogo} alt="Logo de Last Nite" className="home-logo" />
        <h1 className="home-title" aria-label="Last Nite fiesta de fin de año">LAST NITE</h1>
        <p className="home-subtitle">La fiesta de Año Nuevo más cercana, divertida y auténtica de Alcalá de Guadaíra</p>
        <div className="countdown" aria-label="Cuenta regresiva para Año Nuevo">
          {['days','hours','minutes','seconds'].map((unit) => (
            <div className="countdown-segment" key={unit}>
              <span className="countdown-value" aria-live="polite">{timeLeft[unit]}</span>
              <span className="countdown-label">
                {unit === 'days' ? 'Días' : unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Min' : 'Seg'}
              </span>
            </div>
          ))}
        </div>
        <button className="btn-primary pulse" onClick={handlePrimaryCTA}>
          Quiero mi entrada
        </button>
        <div className="home-cta-text">¡Vive la última noche del año con nosotros!</div>
      </header>

      <main className="home-main" role="main">
        <section className="features" aria-labelledby="features-title">
          <h2 id="features-title">¿Por qué elegir LAST NITE?</h2>
          <div className="feature-grid">
            <article className="feature-card" aria-label="Ambiente auténtico">
              <h3>Ambiente</h3>
              <p>Entre amigos, sin postureo y con energía positiva desde el primer minuto.</p>
            </article>
            <article className="feature-card" aria-label="Música y DJ">
              <h3>Música</h3>
              <p>DJ en directo mezclando hits y clásicos para no parar de bailar.</p>
            </article>
            <article className="feature-card" aria-label="Precios justos">
              <h3>Precios</h3>
              <p>Transparencia total: packs asequibles y nada de colas eternas.</p>
            </article>
            <article className="feature-card" aria-label="Ubicación conveniente">
              <h3>Ubicación</h3>
              <p>Local privado, seguro y cerca de casa en Alcalá de Guadaíra.</p>
            </article>
          </div>
        </section>

        <section className="details" aria-labelledby="details-title">
          <h2 id="details-title">Lo que te espera</h2>
          <ul className="details-list">
            <li>Welcome pack y brindis de medianoche 🥂</li>
            <li>Zona chill + zona principal de baile</li>
            <li>Photowall para tus recuerdos 📸</li>
            <li>Sorpresas y animación durante la noche</li>
          </ul>
        </section>

        <section className="cta-banner" aria-label="Compra de entradas">
          <div className="cta-banner-inner">
            <h2>Entradas limitadas</h2>
            <p>Apúntate para ser el primero en enterarte cuando se abran.</p>
            <button className="btn-secondary" onClick={handlePrimaryCTA}>Avisadme</button>
          </div>
        </section>
      </main>

      <footer className="home-footer" role="contentinfo">
        <small>© {new Date().getFullYear()} LAST NITE · Evento privado · Síguenos en redes (próximamente)</small>
      </footer>
    </div>
  );
};

export default Home;
