import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderD = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  // Track window resize to toggle between mobile and desktop menus
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header role="banner">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <div className="site-logo mr-auto w-25">
            <Link to="/">School Of Coding!</Link>
          </div>

          {isMobile ? (
            <>
              <button
                className="menu-toggle btn btn-primary"
                onClick={handleMenuToggle}
              >
                Menu
              </button>
              <div
                className={`vertical-menu ${isMenuOpen ? "menu-open" : ""}`}
                onClick={() => setIsMenuOpen(false)} // Close menu on background click
              >
                <nav
                  className="site-navigation position-relative"
                  role="navigation"
                  onClick={(e) => e.stopPropagation()} // Prevent click propagation to the background
                >
                  <ul className="site-menu main-menu">
                    <li>
                      <Link to="/course" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    
                    <li>
                      <Link to="/" className="btn btn-primary">
                        Login
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </>
          ) : (
            <nav
              className="site-navigation position-relative horizontal-menu"
              role="navigation"
            >
              <ul className="site-menu main-menu d-flex m-0 p-0">
                <li>
                  <Link to="/course" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                

                <li>
                  <Link to="/" className="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderD;
