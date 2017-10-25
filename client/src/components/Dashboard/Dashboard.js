import React from 'react';
import './Dashboard.css';
import searchMenu from '../searchMenu';
import userFAB from '../userFAB';
import Banner from '../Banner';
import Corkboard from '../Corkboard';
import Footer from '../Footer';

function Dashboard () {
    return (
        <div>
            <searchMenu />
            <userFAB />
            <Banner />
            <Corkboard />
            <Footer />
        </div>
    );
}
export default Dashboard;
