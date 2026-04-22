import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* overlay */}
      <div className="hero-overlay"></div>

      {/* content */}
      <div className="hero-content">
        <p className="hero-sub">AUTISM IS CURABLE</p>

        <h1>
          If it is <span>identified</span> <br />
          at the right time.
        </h1>

        <p className="hero-desc">
          Early intervention and proper therapy can help children lead
          better and independent lives. We provide care with compassion.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Read More</button>
          <button className="secondary-btn">Contact Us</button>
        </div>
      </div>

    </section>
  );
}

export default Hero;