import { Link } from "react-router-dom";
import "../scss/_navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">InvoiceGen</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup" className="signup-btn">Signup</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  );
}
