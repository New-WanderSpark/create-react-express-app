import React, { Component } from 'react';
import './Dashboard.css';
import SearchMenu from "../SearchMenu";
import UserFAB from "../UserFAB";
import Banner from "../Banner";
import Corkboard from "../Corkboard";
import Footer from "../Footer";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <SearchMenu />
        <UserFAB />
        <Banner />
        <Corkboard />
        <Footer />
    </div>
    );
  }
}

export default Dashboard;
