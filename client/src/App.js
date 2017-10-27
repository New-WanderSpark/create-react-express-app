import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Route exact={true} path='/' component={LoginPage} />
                    <Route exact={true} path='/login' component={LoginPage} />
                    {/* TODO userId prop on the Dashboard component should reflect the logged in user. Currently using a fixed userId for testing. */}
                    <Route exact={true} path='/dashboard' render={() => <Dashboard userId='59f006eef2f4740b1c555e2f' />} />
                    <Route exact={true} path='/settings' render={() => <Dashboard userId='59f006eef2f4740b1c555e2f' />} />
                </div>
            </Router>
        );
    }
}

export default App;
