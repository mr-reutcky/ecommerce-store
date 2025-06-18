import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to My Site</h1>
        <p>Your journey to better web apps starts here.</p>
        <Link to="/about" className="hero-button">About Us</Link>

        <ScrollLink
          to="products"
          smooth={true}
          duration={500}
          offset={-30}
          className="hero-button-secondary"
        >
          View Products
        </ScrollLink>
      </div>
    </section>
  );
}

export default HeroBanner;
