import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

const HomeScreen = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <div className="buttons">
              <Link to="/join" className="btn btn-primary">
                Join Us
              </Link>
              <Link to="/user/login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
