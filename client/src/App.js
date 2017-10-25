import React, { Component } from 'react';
import Logo from './components/LoginPage/logo/logo';
import LoginButton from './components/LoginPage/loginButton/loginButton';
import RegisterButton from './components/LoginPage/registerButton/registerButton';
import About from './components/LoginPage/About/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import RegisterForm from './components/LoginPage/registerForm/registerForm';
import LoginModal from './components/LoginPage/loginModal/loginModal'

// TODO:
// * Find out if there is a way to render all components for a path with a single route component and refactor
// * All component names and component module names should should be capitalized

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Route exact={true} path="/" component={Logo}/>
                    <Route exact={true} path="/" component={LoginButton}/>
                    <Route exact={true} path="/" component={RegisterButton}/>
                    <Route exact={true} path="/" component={About}/>
                    <Route exact={true} path="/" component={RegisterForm}/>
                    <Route exact={true} path='/' component={LoginModal}/>
                

                
                      
                   <Route exact={true} path="/dashboard" component={Dashboard} />
                </div>
            </Router>
        );
    }
}

export default App;
