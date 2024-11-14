import React from "react";
import Sidebar from "./components/sidebar";
import MainDashboard from "./components/main-dashboard";
import "./styles/sidebar.css";

export default function Home() {
  return (
    <div className="main">
      <Sidebar />
      <MainDashboard/>
    </div>
  );
}
