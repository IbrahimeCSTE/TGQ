import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolNav, setScrolNav] = useState(false);
  const Bg = () => {
    if (window.scrollY > 0) {
      setScrolNav(true);
    } else {
      setScrolNav(false);
    }
  };

  window.addEventListener("scroll", Bg);

  return (
    <div className="bg-example">
      <nav
        className={
          scrolNav
            ? "scrollnavbar navbar navbar-expand-md fixed-top"
            : "navbar navbar-expand-md fixed-top"
        }
      >
        <Link to="/" className="navbar-brand">
          TGQ
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <i className="fas text-white fa-ellipsis-v"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <li className="nav-item ml-auto">
              <Link
                to="/join"
                style={{ color: "white" }}
                className="nav-link text-center"
              >
                Join
              </Link>
            </li>
          </div>
          <div className="navbar-nav">
            <li className="nav-item ml-auto">
              <Link
                to="/notice"
                style={{ color: "white" }}
                className="nav-link text-center"
              >
                Notice
              </Link>
            </li>
          </div>
          <div className="navbar-nav">
            <li className="nav-item ml-auto">
              <Link
                to="/contact"
                style={{ color: "white" }}
                className="nav-link text-center"
              >
                Contact
              </Link>
            </li>
          </div>
          <div className="navbar-nav">
            <li className="nav-item ml-auto">
              <Link
                to="/user/login"
                style={{ color: "white" }}
                className="nav-link text-center"
              >
                Login
              </Link>
            </li>
          </div>
          <div className="navbar-nav">
            <li className="nav-item ml-auto">
              <Link
                to="/admin"
                style={{ color: "white" }}
                className="nav-link text-center"
              >
                Admin
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
