import React from 'react';
import '../styles/dashboard.css';
import Sidebar from '../components/sidebar';
import TestForm from '../components/test-form';
import MainHeader from '../components/main-header';
import Analytics from '../sections/Analytics';
import Matching from '../sections/Matching';
import DateDay from '../components/date-test';
const Dashboard = () => {
  return (
    <div className="main-dashboard">
      <Sidebar />
      <div className="mb-8">
        <MainHeader />
      </div>
      <div className="mb-2">
        <Analytics />
      </div>
      <Matching />
      <DateDay />
      <TestForm/>
    </div>
      
    

  );
};

export default Dashboard;
