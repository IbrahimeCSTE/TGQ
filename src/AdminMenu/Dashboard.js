import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="card card1 col-md-3">
          <h2>User List</h2>
          <h4>10</h4>
        </div>
        <div className="card card2 col-md-3">
          <h2>Notice List</h2>
          <h4>5</h4>
        </div>
        <div className="card card3 col-md-3">
          <h2>Member List</h2>
          <h4>2</h4>
        </div>
      </div>
      <div className="adminImage">
        <h1 className="text-center">WELCOME</h1>
        <img src="image/admin.jpg" alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
