import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Dashboard.css';
import SearchMenu from '../SearchMenu';
import UserFAB from '../UserFAB';
import Banner from '../Banner';
import Corkboard from '../Corkboard';
import Footer from '../Footer';

class Dashboard extends Component {
    render () {
        return (
            <div className='workdesk'>
                <SearchMenu />
                <UserFAB />
                <Banner />
                <Switch>
                    <Route path='/dashboard' component={Corkboard}/>
                    <Route path='/settings' component={Banner}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
