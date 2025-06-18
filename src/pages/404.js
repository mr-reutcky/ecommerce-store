import { Link } from 'react-router-dom';
import '../css/NotFound.css';

export default function NotFoundPage() {
    return (
      <main className="nf">
        <h1 className="nf__code">404</h1>
        <p className="nf__msg">Sorry, the page you requested was not found.</p>
        <Link to="/" className="nf__btn">Back&nbsp;to&nbsp;Home</Link>
      </main>
    );
  }