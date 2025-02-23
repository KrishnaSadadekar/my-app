import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { doLogout } from "../../services/auth";
import { useNavigate } from "react-router-dom";
const StudentHeader = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  const handleLogout = () => {
    alert("in handleAlert!");

    doLogout();
    navigate("/");
  };

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
            <Link to="/dashboard">School Of Coding!</Link>
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
                      <Link to="/dashboard" className="nav-link">
                        Home
                      </Link>
                    </li>

                    <li>
                      <button
                        className="btn btn-primary"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
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
                  <Link to="/dashboard" className="nav-link">
                    Home
                  </Link>
                </li>

                <li>
                  <button className="btn btn-primary" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default StudentHeader;
