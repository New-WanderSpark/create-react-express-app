import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';

class App extends Component {
    render () {
        return (
            <Router>
                <div className='workdesk'>
                    <Route exact={true} path="/dashboard" component={Dashboard}/>
                    <Route exact={true} path="/settings" component={Dashboard}/>
                </div>
            </Router>

        );
    }
}

export default App;
