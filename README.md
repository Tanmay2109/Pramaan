# PRAMAAN — Blockchain-Based Certificate Verification System

PRAMAAN is a blockchain-based certificate issuance and verification platform that uses **Ethereum blockchain technology** to create tamper-resistant and independently verifiable academic certificate records.

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

The verification result contains:

- Certificate ID
- Student Name
- Program
- Institution
- Issuer Wallet Address
- Issue Date
- Blockchain verification status

### 🦊 MetaMask Integration

PRAMAAN connects to the user's MetaMask wallet for blockchain transactions.

The connected wallet is used as the certificate issuer when issuing a certificate.

### ⛓️ Ethereum Sepolia Test Network

The smart contract is deployed on the Ethereum Sepolia Test Network for development, testing, and demonstration purposes.

### 🎓 Academic Certificate Support

The application is designed to support academic credentials such as:

- B.Tech certificates
- Academic achievements
- Course completion certificates
- Institutional credentials

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │        User         │
                    │   Web Application   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       PRAMAAN       │
                    │     React + Vite    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      MetaMask       │
                    │   Wallet Provider   │
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
                    │                     │
                    ▼                     ▼
             Store Certificate      Retrieve Certificate
                    │                     │
                    └──────────┬──────────┘
                               ▼
                    ┌─────────────────────┐
                    │ Blockchain-Based    │
                    │ Verification Result │
                    └─────────────────────┘
```

---

## 🧩 Technology Stack

| Technology | Purpose |
|---|---|
| **React.js** | Frontend application |
| **Vite** | Development and build tool |
| **JavaScript** | Application logic |
| **CSS3** | User interface styling |
| **Ethers.js** | Blockchain interaction |
| **Solidity** | Smart contract development |
| **Ethereum** | Blockchain network |
| **Sepolia** | Ethereum test network |
| **MetaMask** | Wallet and transaction provider |
| **Remix IDE** | Smart contract deployment |
| **Git & GitHub** | Version control |

---

## 📜 Smart Contract

The PRAMAAN smart contract manages certificate issuance and verification on the **Ethereum Sepolia Test Network**.

### Contract Address

```text
0x0dA728eaf42C00A6238b77D3203f2DDbAB566ee5
```

### Network

```text
Ethereum Sepolia Test Network
```

### Chain ID

```text
11155111
```

### Smart Contract Functions

#### `issueCertificate()`

Used by the issuer to create a certificate record on the blockchain.

```solidity
issueCertificate(
    string certificateId,
    string studentName,
    string program,
    string institution
)
```

The certificate record contains:

- Certificate ID
- Student Name
- Program
- Institution
- Issuer Wallet Address
- Issue Timestamp

The smart contract also emits a `CertificateIssued` event when a certificate is successfully issued.

#### `verifyCertificate()`

Used to retrieve a certificate record using its Certificate ID.

```solidity
verifyCertificate(
    string certificateId
)
```

The function returns:

- Student Name
- Program
- Institution
- Issuer Wallet Address
- Issue Timestamp
- Certificate existence status

---

## 🔄 System Workflow

### Certificate Issuance

```text
Issuer
   │
   ▼
Open PRAMAAN
   │
   ▼
Connect MetaMask
   │
   ▼
Enter Certificate Details
   │
   ├── Student Name
   ├── Program
   ├── Institution
   └── Certificate ID
   │
   ▼
Submit Certificate
   │
   ▼
MetaMask Transaction
   │
   ▼
Ethereum Sepolia
   │
   ▼
PRAMAAN Smart Contract
   │
   ▼
Certificate Record Stored
```

### Certificate Verification

```text
User
   │
   ▼
Open Verify Page
   │
   ▼
Enter Certificate ID
   │
   ▼
verifyCertificate()
   │
   ▼
PRAMAAN Smart Contract
   │
   ▼
Retrieve Blockchain Record
   │
   ▼
Certificate Information
   │
   ▼
Verification Result
```

---

## 📂 Project Structure

```text
pramaan/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── pramaan.svg
│
├── src/
│   │
│   ├── blockchain/
│   │   ├── contractABI.js
│   │   └── contractConfig.js
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── VerificationResult.jsx
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   ├── Issue.jsx
│   │   └── Verify.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── LICENSE
└── vite.config.js
```

---

## ⚙️ Installation

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git
- MetaMask

### Clone the Repository

```bash
git clone https://github.com/Tanmay2109/Pramaan.git
```

### Navigate to the Project Directory

```bash
cd Pramaan
```

### Install Dependencies

```bash
npm install
```

---

## ▶️ Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173/
```

---

## 🦊 MetaMask Configuration

PRAMAAN uses MetaMask for interacting with the Ethereum blockchain.

Before using the blockchain functionality:

1. Install MetaMask.
2. Open MetaMask.
3. Select the **Ethereum Sepolia Test Network**.
4. Make sure the wallet contains Sepolia test ETH.
5. Open the PRAMAAN application.
6. Connect the MetaMask wallet.
7. Use the **Issue Certificate** functionality to submit a certificate.

---

## 🔍 Certificate Verification

A certificate can be verified by entering its unique **Certificate ID**.

The application sends the Certificate ID to the `verifyCertificate()` smart contract function.

If a valid record exists, the application retrieves and displays the certificate information along with its blockchain verification status.

If no record exists for the entered Certificate ID, the certificate should not be treated as valid.

---

## 🧪 Testing

The application can be tested using the following workflow.

### 1. Wallet Connection

Connect a MetaMask wallet to the PRAMAAN application.

### 2. Certificate Issuance

Enter valid certificate details and submit the transaction.

### 3. Transaction Confirmation

Confirm the blockchain transaction through MetaMask.

### 4. Blockchain Record

Verify the transaction and contract interaction on the Sepolia blockchain explorer.

### 5. Certificate Verification

Enter the same Certificate ID on the Verify page and retrieve the stored certificate information.

### 6. Invalid Certificate

Enter a Certificate ID that has not been issued and verify that no valid certificate record is returned.

---

## 🌐 Smart Contract Explorer

The deployed PRAMAAN smart contract can be viewed on Sepolia Etherscan.

**Contract:**  
https://sepolia.etherscan.io/address/0x0dA728eaf42C00A6238b77D3203f2DDbAB566ee5

---

## 🚀 Production Build

Create an optimized production build using:

```bash
npm run build
```

The generated production files will be available inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---


## 🎯 Project Objective

The main objective of PRAMAAN is to demonstrate the practical use of blockchain technology for secure academic certificate issuance and verification.

The system aims to reduce manual verification processes, improve the reliability of academic credentials, and provide a transparent method for independently verifying certificate records.

---

## 📄 License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for more information.
