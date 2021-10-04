import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../AdminMenu/Dashboard";

const AdminScreen = () => {
  const [userList, setUserList] = useState(false);
  const [notice, setNotice] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  const [support, setSupport] = useState(false);

  const userHandle = () => {
    setUserList(true);
    setNotice(false);
    setDashboard(false);
    setSupport(false);
  };

  const supportHandle = () => {
    setUserList(false);

    setNotice(false);
    setDashboard(false);
    setSupport(true);
  };
  const noticeHandle = () => {
    setUserList(false);

    setNotice(true);

    setDashboard(false);
    setSupport(false);
  };
  const dashboardHandle = () => {
    setUserList(false);

    setNotice(false);

    setDashboard(true);
    setSupport(false);
  };
  return (
    <div>
      <div className="sidenav">
        <Link onClick={dashboardHandle}>Dasboard</Link>
        <Link onClick={noticeHandle}>Notice</Link>
        <Link onClick={userHandle}>Users</Link>
        <Link onClick={supportHandle}>Support</Link>
      </div>
      <div className="main">
        <div>{userList}</div>
        <div>{support}</div>
        <div>{notice}</div>
        <div>{dashboard && <Dashboard></Dashboard>}</div>
      </div>
    </div>
  );
};

export default AdminScreen;
