function VerificationResult({ certificate }) {
  const issueDate = new Date(
    Number(certificate.issuedAt) * 1000,
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="result-card">
      <div className="result-header">
        <div className="result-check">✓</div>

        <div>
          <span className="result-status">Certificate Verified</span>

          <p>{certificate.certificateId}</p>
        </div>
      </div>

      <div className="result-grid">
        <div>
          <span>STUDENT NAME</span>
          <strong>{certificate.studentName}</strong>
        </div>

        <div>
          <span>PROGRAM</span>
          <strong>{certificate.program}</strong>
        </div>

        <div>
          <span>INSTITUTION</span>
          <strong>{certificate.institution}</strong>
        </div>

        <div>
          <span>ISSUE DATE</span>
          <strong>{issueDate}</strong>
        </div>
      </div>

      <div className="blockchain-status">
        <span>✓</span>

        <div>
          <strong>Blockchain Verified</strong>

          <p>This certificate record is stored on the blockchain.</p>
        </div>
      </div>

      <div className="issuer-details">
        <span>ISSUER WALLET</span>

        <p>{certificate.issuer}</p>
      </div>
    </div>
  );
}

export default VerificationResult;
