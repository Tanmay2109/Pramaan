import { useState } from "react";
import { ethers } from "ethers";
import VerificationResult from "../components/VerificationResult";

const CONTRACT_ADDRESS = "0x0dA728eaf42C00A6238b77D3203f2DDbAB566ee5";

const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "certificateId",
        type: "string",
      },
    ],
    name: "verifyCertificate",
    outputs: [
      {
        internalType: "string",
        name: "studentName",
        type: "string",
      },
      {
        internalType: "string",
        name: "program",
        type: "string",
      },
      {
        internalType: "string",
        name: "institution",
        type: "string",
      },
      {
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "issuedAt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

function Verify() {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async (event) => {
    event.preventDefault();

    const id = certificateId.trim();

    if (!id) {
      setError("Please enter a certificate ID.");
      setResult(null);
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed.");
      }

      const provider = new ethers.BrowserProvider(window.ethereum);

      const network = await provider.getNetwork();

      if (network.chainId !== 11155111n) {
        throw new Error("Please switch MetaMask to the Sepolia Test Network.");
      }

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        provider,
      );

      const data = await contract.verifyCertificate(id);

      const certificate = {
        certificateId: id,
        studentName: data[0],
        program: data[1],
        institution: data[2],
        issuer: data[3],
        issuedAt: data[4].toString(),
        exists: data[5],
      };

      if (!certificate.exists) {
        setError("Certificate not found on the blockchain.");
        return;
      }

      setResult(certificate);
    } catch (err) {
      console.error("Verification error:", err);

      if (
        err.message?.includes("Sepolia") ||
        err.message?.includes("network")
      ) {
        setError("Please switch MetaMask to the Sepolia Test Network.");
      } else {
        setError(
          err.reason ||
            err.shortMessage ||
            err.message ||
            "Unable to verify certificate.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-section">
      <div className="page-heading">
        <div className="hero-badge">
          <span>●</span>
          Certificate Verification
        </div>

        <h1>
          Verify a <span>Certificate</span>
        </h1>

        <p>
          Enter a certificate ID to verify its authenticity on the blockchain.
        </p>
      </div>

      <div className="verify-container">
        <form className="verify-card" onSubmit={handleVerify}>
          <label htmlFor="certificateId">Certificate ID</label>

          <div className="input-wrapper">
            <input
              id="certificateId"
              type="text"
              placeholder="PRAMAAN-2026-001"
              value={certificateId}
              onChange={(event) => {
                setCertificateId(event.target.value);
                setError("");
                setResult(null);
              }}
            />
          </div>

          <button
            className="primary-button full-width"
            type="submit"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify Certificate"}
            {!loading && <span>→</span>}
          </button>

          <p className="form-note">
            Verification is performed against blockchain records.
          </p>

          {error && (
            <div className="verification-error">
              <span>!</span>
              <div>
                <strong>Verification failed</strong>
                <p>{error}</p>
              </div>
            </div>
          )}
        </form>

        {result && <VerificationResult certificate={result} />}
      </div>
    </section>
  );
}

export default Verify;
