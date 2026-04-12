import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky-top bg-white border-bottom shadow-sm">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
          
          {/* Logo Section */}
          <div className="col-md-3 mb-2 mb-md-0">
            <Link
              to="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl me-2"
                style={{ color: "rgb(177, 151, 252)" }}
              ></i>
              <span className="fs-4 fw-bold">BookSales</span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "nav-link px-3 fw-bold text-primary" : "nav-link px-3 text-secondary"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/books" 
                className={({ isActive }) => 
                  isActive ? "nav-link px-3 fw-bold text-primary" : "nav-link px-3 text-secondary"
                }
              >
                Book
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/team" 
                className={({ isActive }) => 
                  isActive ? "nav-link px-3 fw-bold text-primary" : "nav-link px-3 text-secondary"
                }
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "nav-link px-3 fw-bold text-primary" : "nav-link px-3 text-secondary"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="col-md-3 text-end">
            <Link to="/login" className="btn btn-outline-primary me-2 rounded-pill px-4">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary rounded-pill px-4" style={{ backgroundColor: "#b197fc", borderColor: "#b197fc" }}>
              Sign-up
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}