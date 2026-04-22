import "../styles/services.css";

function Services() {
  return (
    <section className="services">

      <p className="service-sub">Service We Provide</p>

      <h2 className="service-title">
        Providing Good Qualities <br /> For Your Loving Kids
      </h2>

      <div className="service-container">

        {/* CARD 1 */}
        <div className="service-card vision">
          <h3>Our Vision</h3>
          <p>Our vision to provide autism free children.</p>
        </div>

        {/* CARD 2 */}
        <div className="service-card mission">
          <h3>Our Mission</h3>
          <p>
            A program that meets the life skill needs of every child so that
            each child has equal opportunities to succeed.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="service-card care">
          <h3>We Care</h3>
          <p>
            We care with compassion on every child even they are autism,
            ADHD, learning disabilities and so on.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;