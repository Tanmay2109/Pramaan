function About() {
  return (
    <section className="page-section about-page">
      <div className="page-heading">
        <div className="hero-badge">
          <span>●</span>
          About PRAMAAN
        </div>

        <h1>
          Trust through <span>technology.</span>
        </h1>

        <p>
          PRAMAAN is a decentralized certificate verification platform designed
          to make academic credentials transparent, secure and easy to verify.
        </p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">⛓</div>

          <h3>Blockchain Secured</h3>

          <p>Certificate records are maintained using blockchain technology.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">✓</div>

          <h3>Tamper Resistant</h3>

          <p>Blockchain records make unauthorized modification difficult.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⌁</div>

          <h3>Transparent</h3>

          <p>Certificate information can be independently verified.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
