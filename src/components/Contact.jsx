import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-section">

      {/* 🔥 MAIN CARD */}
      <div className="contact-card">

        <p className="tag">Join Our New Session</p>

        <h2>
          Call To Enroll <br />
          <span>Your Child Today</span>
        </h2>

        <p className="desc">
          Early support makes a lifetime difference. Reach out now and give your child the best care.
        </p>

        <div className="numbers">
          <a href="tel:+919941350646" className="call-btn">
            📞 +91 99413 50646
          </a>

          <a href="tel:+917299535600" className="call-btn outline">
            📞 +91 72995 35600
          </a>
        </div>

      </div>

      {/* 🔥 DECOR */}
      <div className="circle one"></div>
      <div className="circle two"></div>

    </section>
  );
}

export default Contact;