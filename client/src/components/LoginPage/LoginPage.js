import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './LoginPage.css';
import Logo from './logo/logo';
import LoginButton from './loginButton/loginButton';
import RegisterButton from './registerButton/registerButton';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './registerForm/registerForm';
import About from './About/About';
import Footer from '../Footer';

class LoginPage extends Component {
    render () {
        return (
            <div>
                <Logo />
                <div className="row" id='loginbuttons'>
                    <div className="col s6">
                        <LoginButton />
                    </div>
                    <div className="col s6">
                        <RegisterButton />
                    </div>
                </div>
                <Switch>
                    <Route path='/login' component={LoginForm}/>
                    <Route path='/register' component={RegisterForm}/>
                    <Route path='/' component={About}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default LoginPage;
