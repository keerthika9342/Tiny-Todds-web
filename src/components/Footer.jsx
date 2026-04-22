import "../styles/footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">

          {/* 🔥 TEXT LOGO (REPLACED IMAGE) */}
          <h2 className="footer-title">
            Tiny Todds <span>Therapy Care</span>
          </h2>

          <p>
            The society today has to face lots of health challenges. Some of the
            physical and mental disorders which were very rare in the olden
            times have started occurring and spreading fast as an epidemic.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* MIDDLE */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Autism</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Login</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📧 tinytoddstherapycare@gmail.com</p>
          <p>📞 +91 99413 50646</p>
          <p>📞 +91 72995 35600</p>
        </div>

      </div>

      {/* 🔥 BOTTOM */}
      <div className="footer-bottom">
        © 2026 Tiny Todds Therapy Care. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;