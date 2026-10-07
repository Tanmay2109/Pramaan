import { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
import {
  CONTRACT_ADDRESS,
  CONTRACT_ABI,
  SEPOLIA_CHAIN_ID,
} from "../blockchain/contractConfig";

function Issue({ wallet }) {
  const [form, setForm] = useState({
    studentName: "",
    program: "",
    institution: "",
    certificateId: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [programSearch, setProgramSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [error, setError] = useState("");

  const programRef = useRef(null);

  const programs = [
    "B.Tech Internet of Things",
    "B.Tech Computer Science",
    "B.Tech Artificial Intelligence",
    "B.Tech Electronics and Telecommunication",
    "B.Tech Information Technology",
    "B.Tech Mechanical Engineering",
    "B.Tech Civil Engineering",
    "Other",
  ];

  const filteredPrograms = programs.filter((program) =>
    program.toLowerCase().includes(programSearch.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (programRef.current && !programRef.current.contains(event.target)) {
        setProgramOpen(false);
        setProgramSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleProgramSelect = (program) => {
    setForm((previous) => ({
      ...previous,
      program,
    }));

    setProgramOpen(false);
    setProgramSearch("");
    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSubmitted(false);
    setTransactionHash("");

    if (!form.program) {
      setProgramOpen(true);
      return;
    }

    if (!wallet) {
      alert("Please connect MetaMask first.");
      return;
    }

    if (!window.ethereum) {
      setError("MetaMask is not installed.");
      return;
    }

    try {
      setLoading(true);

      const provider = new ethers.BrowserProvider(window.ethereum);

      const network = await provider.getNetwork();

      if (network.chainId !== BigInt(11155111)) {
        setError("Please switch MetaMask to the Sepolia Test Network.");
        setLoading(false);
        return;
      }

      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer,
      );

      const transaction = await contract.issueCertificate(
        form.certificateId,
        form.studentName,
        form.program,
        form.institution,
      );

      setTransactionHash(transaction.hash);

      await transaction.wait();

      setSubmitted(true);
    } catch (err) {
      console.error(err);

      if (err.code === "ACTION_REJECTED") {
        setError("Transaction was rejected in MetaMask.");
      } else if (err.reason) {
        setError(err.reason);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError("Certificate issuance failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-section issue-page">
      <div className="page-heading">
        <div className="hero-badge">
          <span>◆</span>
          Certificate Issuance
        </div>

        <h1>
          Issue a <span>Certificate</span>
        </h1>

        <p>
          Create a secure, verifiable certificate record backed by blockchain
          technology.
        </p>
      </div>

      <form className="issue-card" onSubmit={handleSubmit}>
        <div className="issue-card-header">
          <div>
            <span className="card-eyebrow">NEW CREDENTIAL</span>

            <h2>Certificate Details</h2>
          </div>

          <div className="secure-badge">
            <span>✓</span>
            Secure
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>

            <input
              id="studentName"
              name="studentName"
              type="text"
              placeholder="Enter student name"
              value={form.studentName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Program</label>

            <div className="custom-select" ref={programRef}>
              <button
                type="button"
                className={`select-trigger ${programOpen ? "open" : ""}`}
                onClick={() => setProgramOpen((previous) => !previous)}
              >
                <span
                  className={
                    form.program ? "selected-value" : "placeholder-value"
                  }
                >
                  {form.program || "Select program"}
                </span>

                <span className={`select-arrow ${programOpen ? "rotate" : ""}`}>
                  ↓
                </span>
              </button>

              {programOpen && (
                <div className="select-menu">
                  <div className="select-search">
                    <span>⌕</span>

                    <input
                      type="text"
                      placeholder="Search program..."
                      value={programSearch}
                      onChange={(event) => setProgramSearch(event.target.value)}
                      onClick={(event) => event.stopPropagation()}
                      autoFocus
                    />
                  </div>

                  <div className="program-options">
                    {filteredPrograms.length > 0 ? (
                      filteredPrograms.map((program) => (
                        <button
                          type="button"
                          key={program}
                          className={`program-option ${
                            form.program === program ? "selected" : ""
                          }`}
                          onClick={() => handleProgramSelect(program)}
                        >
                          <span>{program}</span>

                          {form.program === program && (
                            <span className="option-check">✓</span>
                          )}
                        </button>
                      ))
                    ) : (
                      <div className="no-program">No program found</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="form-group full">
            <label htmlFor="institution">Institution</label>

            <input
              id="institution"
              name="institution"
              type="text"
              placeholder="Enter institution name"
              value={form.institution}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group full">
            <label htmlFor="certificateId">Certificate ID</label>

            <input
              id="certificateId"
              name="certificateId"
              type="text"
              placeholder="PRAMAAN-2026-001"
              value={form.certificateId}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="issuer-info">
          <div className="issuer-icon">◈</div>

          <div className="issuer-content">
            <span>ISSUER WALLET</span>

            <strong>{wallet || "Connect MetaMask to continue"}</strong>
          </div>

          {wallet && <div className="wallet-connected">Connected</div>}
        </div>

        <button
          className="primary-button full-width"
          type="submit"
          disabled={loading}
        >
          <span>
            {loading ? "Issuing Certificate..." : "Issue Certificate"}
          </span>

          <span className="button-arrow">{loading ? "..." : "→"}</span>
        </button>

        {error && (
          <div className="error-message">
            <span>!</span>

            <div>
              <strong>Transaction failed</strong>
              <p>{error}</p>
            </div>
          </div>
        )}

        {submitted && (
          <div className="success-message">
            <span>✓</span>

            <div>
              <strong>Certificate issued successfully</strong>

              <p>
                The certificate has been recorded on the Sepolia blockchain.
              </p>

              {transactionHash && (
                <a
                  href={`https://sepolia.etherscan.io/tx/${transactionHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View transaction on Etherscan
                </a>
              )}
            </div>
          </div>
        )}
      </form>
    </section>
  );
}

export default Issue;
