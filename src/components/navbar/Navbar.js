import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  d-flex justify-content-center">
         <div className="w-25">
        <a className="navbar-brand" href="#">
          My Store
        </a>
        </div>

        <div id="navbarNav" className="w-25">
          <ul className="navbar-nav  d-flex justify-content-around">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                  Home
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/cart" className="nav-link">
                  Cart
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                  Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
