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

                    <Route exact={true} path='/register' component={LoginPage} />
                    <Route exact={true} path='/dashboard' component={Dashboard} />
                    <Route exact={true} path='/settings' component={Dashboard} />
                </div>
            </Router>
        );
    }
}

export default App;
