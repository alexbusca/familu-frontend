import React from 'react';
import Sidebar from '../components/sidebar';

const IndexPage = () => {
    return (
        <div>
            <Sidebar/>
            <MainDashboard/>
        </div>
    );
};

export default IndexPage;