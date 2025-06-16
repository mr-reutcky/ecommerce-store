import { Link } from 'react-router-dom';
function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to My Site</h1>
        <p>Your journey to better web apps starts here.</p>
        <Link to="/about" className="hero-button">About Us</Link>
      </div>
    </section>
  );
}

export default HeroBanner;
