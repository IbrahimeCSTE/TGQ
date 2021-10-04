import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

export default function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
    }
  };

  const googleSignHandle = async () => {};
  return (
    <div>
      <Navbar></Navbar>
      <div className="loginForm">
        <div className="formCenter">
          <div className="card">
            <div>
              <i onClick={googleSignHandle} className="fab fa-google"></i>
              <h3 className="text-center w-100">Login Account</h3>
              <hr />
              {1 && <h5 className="bg-dark text-white p-2">Welcome</h5>}
              <hr />
            </div>
            <form className="form" onSubmit={submitHandler}>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <br />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br />
              </div>
              <div>
                <button
                  style={{ borderRadius: "10px" }}
                  className="btn btn-info w-100 text-center my-2"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div>
                <label />
                <div className="already">
                  Haven't an account? <Link to="/user/register">Register</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
