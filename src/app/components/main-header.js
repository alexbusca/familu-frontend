import React from 'react';
import '../styles/header.css';

const MainHeader = () => {
  return (
    <div className="header-container">
      <header className="dashboard-header flex justify-between items-center ml-10 mr-10">
        <input
          className="search-bar bg-gray-500 w-96 h-9 rounded-md"
          placeholder="Search..."
        />
        <div className="user-profile flex flex-row items-center">
          <div className="user-img bg-gray-500" alt="User Avatar" />
          <p className="text-black">Gianluca M.</p>{' '}
          {/* Replace with user's name */}
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
