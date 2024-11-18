import React from 'react';
import '../styles/dashboard.css';
import Sidebar from '../components/sidebar';
import MainHeader from '../components/main-header';
import Analytics from '../sections/Analytics';
import Matching from '../sections/Matching';

const Dashboard = () => {
    return (
        <div className='main-dashboard'>
            <Sidebar/>
            <MainHeader/>
            <Analytics/>
            <Matching/>
       
            
        </div>
    );
};

export default Dashboard;
