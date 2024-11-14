import React from 'react';

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
          <p><a href="#">Services</a></p>
          <p><a href="#">Payments</a></p>
        </div>
        </div>
        <div className="sidebar-menu-bottom">
          <a href="#">Impostazioni</a>
          <a href="#">Aiuto</a>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;