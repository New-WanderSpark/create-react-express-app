import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './LoginPage.css';
import Logo from './logo/logo';
import LoginButton from './loginButton/loginButton';
import RegisterButton from './registerButton/registerButton';
import About from './About/About';
import RegisterForm from './registerForm/registerForm';
// import LoginModal from './loginModal/loginModal';

class LoginPage extends Component {
    render () {
        return (
            <div>
                <Logo />
                <div class="row" id='loginbuttons'>
                    <div class="col s12">
                        <LoginButton />
                        <RegisterButton />
                    </div>
                </div>
                <About />
                <RegisterForm />
                {/* <LoginModal /> */}
            </div>
        );
    }
}

export default LoginPage;
