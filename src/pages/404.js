import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

function NotFoundPage() {
  return (
    <motion.main
      className="nf"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="nf__code">404</h1>
      <p className="nf__msg">Sorry, the page you requested was not found.</p>
      <Link to="/" className="nf__btn">Back to Home</Link>
    </motion.main>
  );
}

export default NotFoundPage;
