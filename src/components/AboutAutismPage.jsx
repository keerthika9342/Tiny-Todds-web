import "../styles/aboutAutism.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutAutism() {

  // ✅ INIT AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section className="autism">

      {/* HERO */}
      <div className="autism-hero" data-aos="fade-in">
        <h1>About Autism</h1>
      </div>

      <div className="autism-container">

        {/* ================= TABLE ================= */}
        <div className="section" data-aos="fade-up">
          <h2>Our Understanding About Autism</h2>

          <div className="table-wrapper">
            <table>
              <tbody>
                <tr><td>1970</td><td></td><td><span className="rate-badge">1 in 10,000 children</span></td></tr>
                <tr><td>1971</td><td>Colour TV common in USA</td><td><span className="rate-badge">1 in 5000 children</span></td></tr>
                <tr><td>1985</td><td></td><td><span className="rate-badge">1 in 2500 children</span></td></tr>
                <tr><td>1995</td><td></td><td><span className="rate-badge">1 in 500 children</span></td></tr>
                <tr><td>1992</td><td>Cable TV common in USA</td><td><span className="rate-badge">1 in 500 children</span></td></tr>
                <tr><td>2001</td><td>Computer and Internet common among public</td><td><span className="rate-badge">1 in 250 children</span></td></tr>
                <tr><td>2004</td><td></td><td><span className="rate-badge">1 in 160 children</span></td></tr>
                <tr><td>2005</td><td>Mobile phones common among public</td><td><span className="rate-badge">1 in 160 children</span></td></tr>
                <tr><td>2007</td><td>Facebook common among public</td><td><span className="rate-badge">1 in 150 children</span></td></tr>
                <tr><td>2009</td><td></td><td><span className="rate-badge">1 in 110 children</span></td></tr>
                <tr><td>2012</td><td>Mobile internet</td><td><span className="rate-badge">1 in 80 children</span></td></tr>
                <tr><td>2016</td><td>Unlimited internet</td><td><span className="rate-badge">1 in 64 children</span></td></tr>
                <tr><td>2018</td><td></td><td><span className="rate-badge">1 in 44 children</span></td></tr>
                <tr><td>2020</td><td>Lockdown – online learning</td><td><span className="rate-badge">1 in 25 children</span></td></tr>
              </tbody>
            </table>
          </div>

          <div className="info-box" data-aos="fade-up">
            <p>
              When we look at these numbers, we observe a sharp increase in autism cases after 1980 along with rapid growth in communication technology.
            </p>
            <p>
              While technology improved long-distance communication, it reduced direct human interaction within families.
            </p>
          </div>
        </div>

        {/* ================= CAUSES ================= */}
        <div className="section">
          <h2 className="section-title">Causes What We Suspect</h2>

          <div className="causes-grid">

            <div className="cause-card" data-aos="fade-up">
              <h3>Migration</h3>
              <p>Language difference reduces speech stimulation.</p>
            </div>

            <div className="cause-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Nuclear Family</h3>
              <p>Less family interaction affects communication.</p>
            </div>

            <div className="cause-card highlight" data-aos="zoom-in" data-aos-delay="400">
              <h3>Excessive TV / Mobile Usage</h3>
              <p>Screen exposure reduces real-world communication.</p>
              <span className="warning">⚠ High Risk Below 2 Years</span>
            </div>

          </div>
        </div>

        {/* ================= SYMPTOMS ================= */}
        {/* ================= SYMPTOMS ================= */}
<div className="section">
  <h2 className="section-title">Symptoms</h2>

  <div className="symptoms-modern">

    {/* LEFT */}
    <div className="symptom-card" data-aos="fade-right">
      {[
        "Poor eye contact",
        "Poor response to name call",
        "Does not follow commands",
        "Likes only TV advertisements",
        "Delayed speech",
        "Unusual interest",
        "Does not express emotions",
        "Dislikes routine changes",
      ].map((item, index) => (
        <div className="symptom-item" key={index}>
          <span className="icon">✔</span>
          <p>{item}</p>
        </div>
      ))}
    </div>

    {/* RIGHT */}
    <div className="symptom-card" data-aos="fade-left">
      {[
        "Hand flapping",
        "Toe walking",
        "Rocking body",
        "Spinning objects",
        "Hyperactivity",
        "Self-biting",
        "Tactile sensitivity",
        "Closes ears for noise"
      ].map((item, index) => (
        <div className="symptom-item" key={index}>
          <span className="icon">✔</span>
          <p>{item}</p>
        </div>
      ))}
    </div>

  </div>
</div>
        {/* ================= TIMELINE MILESTONES ================= */}
        <div className="section">
          <h2 className="section-title">Developmental Milestones</h2>

          <div className="timeline">

            <div className="timeline-row">
              <div className="timeline-card left" data-aos="fade-right">
                <h3>2 Months</h3>
                <p><strong>Normal:</strong> Turns head, smiles</p>
                <p><strong>Warning:</strong> No response</p>
              </div>

              <div className="timeline-card right" data-aos="fade-left">
                <h3>4 Months</h3>
                <p><strong>Normal:</strong> Follows objects</p>
                <p><strong>Warning:</strong> No tracking</p>
              </div>
            </div>

            <div className="timeline-row">
              <div className="timeline-card left" data-aos="fade-right">
                <h3>6 Months</h3>
                <p><strong>Normal:</strong> Responds to name</p>
                <p><strong>Warning:</strong> No response</p>
              </div>

              <div className="timeline-card right" data-aos="fade-left">
                <h3>9 Months</h3>
                <p><strong>Normal:</strong> Understands “No”</p>
                <p><strong>Warning:</strong> No imitation</p>
              </div>
            </div>

            <div className="timeline-row">
              <div className="timeline-card left" data-aos="fade-right">
                <h3>1 Year</h3>
                <p><strong>Normal:</strong> Speaks simple words</p>
                <p><strong>Warning:</strong> No speech</p>
              </div>

              <div className="timeline-card right" data-aos="fade-left">
                <h3>18 Months</h3>
                <p><strong>Normal:</strong> Uses words</p>
                <p><strong>Warning:</strong> Speech delay</p>
              </div>
            </div>

            <div className="timeline-row">
              <div className="timeline-card left" data-aos="fade-right">
                <h3>2 Years</h3>
                <p><strong>Normal:</strong> 2-word sentences</p>
                <p><strong>Warning:</strong> No sentence</p>
              </div>
            </div>

          </div>
        </div>

      </div> {/* ✅ FIXED */}

    </section>
  );
}

export default AboutAutism;