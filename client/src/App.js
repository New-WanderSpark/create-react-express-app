import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Route exact={true} path='/' component={LoginPage} />
                    <Route exact={true} path='/login' component={LoginPage} />
                    {/* TODO userId prop on the Dashboard component should reflect the logged in user. Currently using a fixed userId for testing. */}
                    <Route exact={true} path='/dashboard' render={() => <Dashboard userId='59f3414d44cd2500123aa770' />} />
                    <Route exact={true} path='/settings' render={() => <Dashboard userId='59f3414d44cd2500123aa770' />} />
                    <ToastContainer
                        position="top-right"
                        type="success"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        pauseOnHover
                    />
                </div>
            </Router>
        );
    }
}

export default App;
