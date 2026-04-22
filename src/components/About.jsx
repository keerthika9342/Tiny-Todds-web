import "../styles/about.css";
import { useState, useEffect } from "react";

const images = [
  "https://images.openai.com/static-rsc-4/KWf4KjSt5qdCc8X4zzdoNP2f-MixlSY5j8dQ1pjxB5Zg31hUoNrF7YVbzuU46mOvzgwiRZTnbNJa7vkBF2tJCcdrhVICI4nGYnNKYFhIS_X68xMf-Z-5cvuNCRKsPodOf-gsVgeaSRPyL9eXsn2eG_FYFg77c1Yo9uMyOFwNbe5Sh-so6v1kEaLLCrPlv1bj",
  
  "https://images.openai.com/static-rsc-4/CN54vf4QiQLlhAZGpF-K7sN0cDjyWv80lX5yW8S4WVblJ3NHnNP0fFYk05TTkTGFMGDEj5O6wkhEZGiv_Xr0SOV4stLmvkvy1bfkTGa5mc4FeLBGEqEpPEmxJF77aV4714I-_mqlLYLdB8mjX0dKAOqU72VB8B7Q0RS2y9PcKiAmPzm0pVoYUHVpj-b6I4q2",
  
  "https://images.openai.com/static-rsc-4/UFSSeI2xXxfzUNHd1-8x0Xntc1nLYkO7jKwCJnJVAf_ZImPYH7wpPcomNdFkt5tAjt4ltTt0yKTBfExyDGXB9Zn-UzVoqQJMLPq0kiI55R-NCDIY7fi06iyUUEjEjf7MdBklApVQjU5ZWT3tq-vwDlj6g9uC3a1zWVlzsefbolaujcgTa8K_chUDPmsA-N9P",
  
  "https://images.openai.com/static-rsc-4/IgKByQwPYGWXgq3tAOO45HNIarA2bVHgaQv2I49wwTgdAL76gauasMIT-JOCZK-0lhnNxYNGIy9gzJPtnC06YONn5a0D0bb6_LCRzA3TJrGj9nD-oS31CdhqW9QyarTzVMQb3WvGKfN8ZnZ3VumjsyfgqqQ8XI7cSoJqyeHCP5o9XRVRM84HkI6naZiGOD3Z",
  
  "https://images.openai.com/static-rsc-4/x93MBTwAxTdtmXvtdopozHxdtu_JWb202XBM4AhBDDYKnKN3ym5-5b2k_LfwK5qPCyB28Gwl1-RNTmR_cKyBMbF8WDPktVcip9K0TiLvdCe5y88lShjoSh4whnN2w_AdxeTEexZwZ-V8ICHrw1qwq5gw3fJIhK0ty9tPl2mZvkys2C1xmHpD9d-uOwxpEcDE"
];

function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT TEXT */}
        <div className="about-text">
          <p className="about-sub">About Us</p>

          <h1>
            Empowering Every Child <br />
            With <span>Care & Confidence</span>
          </h1>

          <p>
            At Tiny Todds Therapy Care, we believe every child is unique and deserves
            the right support to grow, learn, and succeed.
          </p>

          <p>
            We help children with autism, ADHD, and developmental challenges
            build confidence and life skills.
          </p>

          <ul className="about-points">
            <li>✔ Certified & Experienced Therapists</li>
            <li>✔ Personalized Therapy Plans</li>
            <li>✔ Safe & Child-Friendly Environment</li>
          </ul>

          <button className="about-btn">Explore More</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img src={images[index]} alt="kids" />

          <button className="arrow left" onClick={prevSlide}>‹</button>
          <button className="arrow right" onClick={nextSlide}>›</button>
        </div>

      </div>
    </section>
  );
}

export default About;