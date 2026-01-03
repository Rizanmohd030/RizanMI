function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-pill">
        {/* Left */}
        <div className="navbar-left">
          <span className="navbar-time">IST · 7:42 PM · BLR</span>
        </div>

        {/* Center (reserved) */}
        <div className="navbar-center" />

        {/* Right */}
        <button
          className="navbar-hamburger"
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
