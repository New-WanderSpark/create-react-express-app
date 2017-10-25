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

class App extends Component {
    render () {
        return (
            <Router>
//<<<<<<< proj-3a
                //<div>
                    //<Route exact={true} path="/" component={Logo}/>
                    //<Route exact={true} path="/" component={LoginButton}/>
                    //<Route exact={true} path="/" component={RegisterButton}/>
                    //<Route exact={true} path="/" component={About}/>
                    //<Route exact={true} path="/" component={RegisterForm}/>
                    //<Route exact={true} path='/' component={LoginModal}/>
                

                
                      
                   //<Route exact={true} path="/dashboard" component={Dashboard} />
//=======
                <div className='workdesk'>
                    <Route exact={true} path='/dashboard' component={Dashboard} />
                    <Route exact={true} path='/settings' component={Dashboard} />
//>>>>>>> dev
                </div>
            </Router>
        );
    }
}

export default App;
