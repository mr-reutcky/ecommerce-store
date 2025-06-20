import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

function About() {
  return (
    <motion.div
      className="about-us-page"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="about-us-page">
        <section className="about-hero">
          <div className="hero-text">
            <h1>About Us</h1>
            <p>Empowering your online shopping experience — one product at a time.</p>
          </div>
        </section>

              <section className="about-content">
          <div className="about-text-block">
            <h2>Who We Are</h2>
            <p>
              We're a modern online retailer built using the Fake Store API to demonstrate the power of web technology.
              Our mission is to provide a seamless eCommerce experience for all types of shoppers — whether you're
              browsing, comparing, or ready to checkout.
            </p>
            <p>
              What began as a simple developer demo evolved into a fully styled storefront experience that mirrors real-world
              shopping platforms. We’re passionate about great UI, solid performance, and showcasing the power of React.
            </p>
          </div>

          <div className="about-text-block">
            <h2>How We Work</h2>
            <p>
              While the products come from a mock API, our architecture simulates the full eCommerce stack — product listings,
              category filtering, cart functionality, and checkout flows.
            </p>
            <p>
              We aim to deliver a user-centric experience with responsive design, smooth navigation, and engaging content that helps users explore and shop with ease.
            </p>
          </div>

          <div className="about-text-block">
            <h2>Our Vision</h2>
            <p>
              Our vision is to inspire developers, startups, and clients by building beautiful, useful tools. This store isn't
              just a mockup — it’s a functional showcase of what's possible with open APIs, modern frameworks, and good design.
            </p>
            <p>
              Whether you're a customer or a developer, we want to show you that creating a compelling, functional digital experience
              doesn't have to be complicated — it just has to be thoughtful.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default About;
