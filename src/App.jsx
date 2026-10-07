import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Verify from "./pages/Verify";
import Issue from "./pages/Issue";
import About from "./pages/About";

function App() {
  const [page, setPage] = useState("home");
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    const checkWallet = async () => {
      if (!window.ethereum) {
        return;
      }

      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length > 0) {
          setWallet(accounts[0]);
        }
      } catch (error) {
        console.error("Failed to check wallet:", error);
      }
    };

    checkWallet();

    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
          setWallet("");
        } else {
          setWallet(accounts[0]);
        }
      };

      window.ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged,
        );
      };
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        setWallet(accounts[0]);
      }
    } catch (error) {
      if (error.code === 4001) {
        console.log("MetaMask connection request rejected.");
      } else {
        console.error("Wallet connection failed:", error);
      }
    }
  };

  const renderPage = () => {
    switch (page) {
      case "verify":
        return <Verify />;

      case "issue":
        return <Issue wallet={wallet} />;

      case "about":
        return <About />;

      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar
        page={page}
        setPage={setPage}
        wallet={wallet}
        connectWallet={connectWallet}
      />

      <main>{renderPage()}</main>

      <Footer />
    </div>
  );
}

export default App;
