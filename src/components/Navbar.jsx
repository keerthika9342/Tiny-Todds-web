import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
  <h2>
    <Link to="/" className="logo-link">
      Tiny Todds <span>Therapy Care</span>
    </Link>
  </h2>
  <p className="tagline">Care with Compassion</p>
</div>
      {/* NAV LINKS */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-autism">About Autism</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* BUTTON */}
      <Link to="/login">
        <button className="cta">Login</button>
      </Link>

    </nav>
  );
}

export default Navbar;