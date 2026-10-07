function Navbar({ page, setPage, wallet, connectWallet }) {
  const shortenAddress = (address) => {
    if (!address) return "";

    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "verify", label: "Verify" },
    { id: "issue", label: "Issue" },
    { id: "about", label: "About" },
  ];

  return (
    <header className="floating-navbar">
      <div className="nav-glass">
        <button
          className="brand"
          onClick={() => setPage("home")}
          aria-label="Go to PRAMAAN home"
        >
          <span className="brand-symbol">◈</span>
          <span>PRAMAAN</span>
        </button>

        <nav className="nav-pill">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${page === item.id ? "active" : ""}`}
              onClick={() => setPage(item.id)}
            >
              {page === item.id && <span className="active-glow" />}

              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          className={`wallet-button ${wallet ? "connected" : ""}`}
          onClick={connectWallet}
        >
          <span className="wallet-dot" />

          {wallet ? (
            <>
              <span className="wallet-status">Connected</span>
              <span className="wallet-address">{shortenAddress(wallet)}</span>
            </>
          ) : (
            <span>Connect Wallet</span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
