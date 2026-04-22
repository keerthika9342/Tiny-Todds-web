import "../styles/stats.css";
import { useEffect, useState, useRef } from "react";
import { FaUserGraduate, FaClock, FaChild, FaBuilding } from "react-icons/fa";

function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const started = useRef(false);

  const finalValues = [160, 20, 565, 22];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    const ref = sectionRef.current;
    observer.observe(ref);
    return () => observer.unobserve(ref);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startCounting = () => {
    finalValues.forEach((value, index) => {
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 20);

      const timer = setInterval(() => {
        start += increment;

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] =
            start >= value ? value : Math.floor(start);
          return updated;
        });

        if (start >= value) clearInterval(timer);
      }, 20);
    });
  };

  return (
    <section className="stats" ref={sectionRef}>
      <h2 className="stats-title">Stats</h2>

      <div className="stats-container">

        <div className="stat-card">
          <FaUserGraduate className="icon" />
          <h1>{counts[0]}+</h1>
          <p>Qualified Teachers</p>
        </div>

        <div className="stat-card">
          <FaClock className="icon" />
          <h1>{counts[1]}+</h1>
          <p>Years Of Experience</p>
        </div>

        <div className="stat-card highlight">
          <FaChild className="icon" />
          <h1>{counts[2]}+</h1>
          <p>Students Enrolled</p>
        </div>

        <div className="stat-card">
          <FaBuilding className="icon" />
          <h1>{counts[3]}+</h1>
          <p>Total Branches</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;