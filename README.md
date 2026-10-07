# PRAMAAN — Blockchain-Based Certificate Verification System

PRAMAAN is a decentralized certificate issuance and verification platform that uses **Ethereum blockchain technology** to create tamper-resistant and independently verifiable academic certificate records.

The system allows an authorized issuer to issue a certificate by storing its essential information on the blockchain. A certificate can then be verified using its unique Certificate ID, allowing the stored blockchain record to be retrieved and displayed.

---

## 📌 Project Overview

Traditional academic certificates are generally verified through manual processes or centralized databases. These approaches can be time-consuming and may be vulnerable to document tampering, duplication, or unauthorized modification.

PRAMAAN addresses this problem by using a **smart contract deployed on the Ethereum Sepolia Test Network**.

The application provides two primary blockchain operations:

- **Certificate Issuance** — Records certificate information on the blockchain.
- **Certificate Verification** — Retrieves and verifies certificate information using the Certificate ID.

Because the certificate record is stored on the blockchain, the information can be independently checked without relying solely on a centralized verification system.

---

## ✨ Features

### 🔐 Blockchain-Based Certificate Issuance

Authorized issuers can enter:

- Student Name
- Program
- Institution
- Certificate ID

The information is submitted to the deployed smart contract through MetaMask.

### 🔎 Certificate Verification

Users can enter a Certificate ID to retrieve the corresponding certificate information from the blockchain.

The verification result displays:

- Certificate ID
- Student Name
- Program
- Institution
- Issuer Wallet Address
- Issue Date
- Blockchain verification status

### 🦊 MetaMask Integration

PRAMAAN connects to the user's MetaMask wallet for blockchain transactions.

The application uses the connected wallet as the certificate issuer.

### ⛓️ Ethereum Sepolia Test Network

The smart contract is deployed on the Ethereum Sepolia Test Network for development and demonstration purposes.

### 🎓 Academic Certificate Support

The application is designed for academic credentials such as:

- B.Tech certificates
- Academic achievements
- Course completion certificates
- Institutional credentials

---

# 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    │   Web Application   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       PRAMAAN       │
                    │    React + Vite     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      MetaMask       │
                    │    Wallet Provider  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Ethereum Sepolia   │
                    │    Test Network     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │  PRAMAAN Smart      │
                    │      Contract       │
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    ▼                     ▼
             Issue Certificate      Verify Certificate