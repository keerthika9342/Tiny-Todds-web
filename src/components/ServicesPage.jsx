import "../styles/servicesPage.css";
import { FaUserMd, FaComments, FaRunning, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";

function ServicesPage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stagger = {
    show: {
      transition: { staggerChildren: 0.2 }
    }
  };

  // 🔥 3D CARD COMPONENT
  const Card = ({ icon, title, desc }) => {
    const ref = useRef();

    const handleMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = -(y - rect.height / 2) / 12;
      const rotateY = (x - rect.width / 2) / 12;

      ref.current.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const reset = () => {
      ref.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return (
      <motion.div
        className="service-card"
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        variants={fadeUp}
      >
        <div className="glow"></div>

        <div className="icon-wrap">{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </motion.div>
    );
  };

  return (
    <div className="services-page">

      {/* HERO */}
      <div className="services-banner">
        <div className="banner-overlay">
          <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }}>
            Our Services
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            Helping children grow with care & therapy
          </motion.p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="services-container">
        <h2 className="section-heading">Our Core Services</h2>

        <motion.div
          className="services-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <Card icon={<FaUserMd />} title="Occupational Therapy" desc="Improves daily living and motor skills." />
          <Card icon={<FaComments />} title="Speech Therapy" desc="Enhances communication and language." />
          <Card icon={<FaRunning />} title="Physiotherapy" desc="Supports movement and strength." />
          <Card icon={<FaBook />} title="Special Education" desc="Personalized learning for every child." />

        </motion.div>
      </div>

      {/* SPLIT */}
      <div className="split-section">

        <motion.div
          className="split-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="split-text"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2>Expert Therapy Care</h2>
          <p>
            We focus on personalized treatment plans that support each child’s development journey.
          </p>
          <button className="primary-btn">Learn More</button>
        </motion.div>

      </div>

      {/* DETAILS */}
      <motion.div
        className="services-details"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <motion.div className="detail-card" variants={fadeUp}>
          <h3>Neurodevelopment Therapy</h3>
          <ul>
            <li>Poor head control</li>
            <li>Balance issues</li>
            <li>Walking difficulties</li>
          </ul>
        </motion.div>

        <motion.div className="detail-card" variants={fadeUp}>
          <h3>Handwriting Improvement</h3>
          <ul>
            <li>Poor legibility</li>
            <li>Spacing issues</li>
            <li>Slow writing</li>
          </ul>
        </motion.div>

        <motion.div className="detail-card" variants={fadeUp}>
          <h3>Sensory Integration</h3>
          <ul>
            <li>Fear of height</li>
            <li>Hyperactivity</li>
            <li>Social issues</li>
          </ul>
        </motion.div>

        <motion.div className="detail-card" variants={fadeUp}>
          <h3>Cognitive Function</h3>
          <ul>
            <li>Memory issues</li>
            <li>Attention problems</li>
            <li>Judgement issues</li>
          </ul>
        </motion.div>

      </motion.div>

      {/* TRUST */}
      <motion.div
        className="services-trust"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <motion.div className="trust-box" variants={fadeUp}>
          <h3>Experienced Therapists</h3>
          <p>Certified professionals with years of experience.</p>
        </motion.div>

        <motion.div className="trust-box" variants={fadeUp}>
          <h3>Personalized Care</h3>
          <p>Each child gets a tailored therapy plan.</p>
        </motion.div>

        <motion.div className="trust-box" variants={fadeUp}>
          <h3>Safe Environment</h3>
          <p>Comfortable and child-friendly therapy space.</p>
        </motion.div>

      </motion.div>

    </div>
  );
}

export default ServicesPage;