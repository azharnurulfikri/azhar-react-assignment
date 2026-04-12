import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-4 my-5 border-top">
      <ul className="nav justify-content-center pb-3 mb-3">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link px-3 text-body-secondary hover-primary"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/books"
            className="nav-link px-3 text-body-secondary hover-primary"
          >
            Book
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/team"
            className="nav-link px-3 text-body-secondary hover-primary"
          >
            Team
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className="nav-link px-3 text-body-secondary hover-primary"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Tambahin Social Media Icons dikit biar gak sepi */}
      <div className="d-flex justify-content-center gap-3 mb-3">
        <a
          href="https://github.com/azharnurulfikri"
          className="text-secondary fs-5"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://instagram.com/azharnf" className="text-secondary fs-5">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://facebook.com" className="text-secondary fs-5">
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>

      <p className="text-center text-body-secondary border-top pt-3">
        © 2026 <strong>BookSales</strong> Company, Inc. All rights reserved.
      </p>
    </footer>
  );
}
