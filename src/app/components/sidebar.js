import React from 'react';
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <div className="top-items">
        <div className="sidebar-logo-container">
          <img src="resources/logo.png" className="main-logo"></img>
        </div>
        <div className="menu-items">

          <p><a href="#">Dashboard</a></p>
          <p><a href="#">Wallet</a></p>
          <p><a href="#">Servizi</a></p>
          <p><a href="#">Pagamenti</a></p>
        </div>
        </div>
        <div className="sidebar-menu-bottom text-white">
          <a href="#">Impostazioni</a>
          <a href="#">Aiuto</a>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
