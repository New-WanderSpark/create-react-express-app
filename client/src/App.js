import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import DashboardContainer from './components/Dashboard';

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Route exact={true} path="/dashboard" component={DashboardContainer}/>
                </div>
            </Router>
        );
    }
}

export default App;
