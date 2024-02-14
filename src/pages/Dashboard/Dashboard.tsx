import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Content</h2>
      <Outlet />
    </div>
  );
};

export default Dashboard;
