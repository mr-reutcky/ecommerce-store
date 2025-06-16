import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We’re a demo eCommerce store powered by the Fake Store API, showcasing the potential of modern web development with React.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@fakestore.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Mon – Fri: 9:00 AM – 5:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FakeStore Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;