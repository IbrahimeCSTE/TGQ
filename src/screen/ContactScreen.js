import React from "react";
import Navbar from "../component/Navbar/Navbar";

const ContactScreen = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="contuctForm">
        <h3 className="text-center my-3">Contact Form</h3>
        <hr />
        <form action="">
          <input type="text" placeholder="Name" />
          <br />
          <input type="email" placeholder="Email" />
          <br />
          <textarea rows="10" cols="10" placeholder="Say something" />
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;
