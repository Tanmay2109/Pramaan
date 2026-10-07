function Home({ setPage }) {
  return (
    <section className="home-page">
      <div className="hero">
        <div className="hero-badge">
          <span>●</span>
          Blockchain-Powered Verification
        </div>

        <h1>
          Verify.
          <br />
          <span>Trust.</span>
          <br />
          Forever.
        </h1>

        <p className="hero-description">
          PRAMAAN provides secure and transparent academic certificate
          verification using blockchain technology.
        </p>

        <div className="hero-actions">
          <button className="primary-button" onClick={() => setPage("verify")}>
            Verify Certificate
            <span>→</span>
          </button>

          <button className="secondary-button" onClick={() => setPage("issue")}>
            Issue Certificate
          </button>
        </div>

        <div className="trust-row">
          <div className="trust-item">
            <span>✓</span>
            Blockchain Secured
          </div>

          <div className="trust-item">
            <span>✓</span>
            Tamper Resistant
          </div>

          <div className="trust-item">
            <span>✓</span>
            Instant Verification
          </div>
        </div>
      </div>

      <div className="hero-card">
        <div className="floating-card">
          <div className="certificate-top">
            <div>
              <span className="mini-label">PRAMAAN</span>
              <h3>Certificate</h3>
            </div>

            <div className="verified-icon">✓</div>
          </div>

          <div className="certificate-line"></div>

          <p className="mini-label">CERTIFICATE HOLDER</p>

          <h2>Verified Credential</h2>

          <div className="certificate-details">
            <div>
              <span>STATUS</span>
              <strong>Verified</strong>
            </div>

            <div>
              <span>NETWORK</span>
              <strong>Blockchain</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
