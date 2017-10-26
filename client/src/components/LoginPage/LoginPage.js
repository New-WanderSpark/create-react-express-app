import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './LoginPage.css';
import { Row, Col } from 'react-materialize';
import Logo from './logo/logo';
import LoginButton from './loginButton/loginButton';
import RegisterButton from './registerButton/registerButton';
import LoginForm from './LoginForm/LoginForm';
import About from './About/About';
import RegisterForm from './registerForm/registerForm';
import Footer from '../Footer';

class LoginPage extends Component {
    render () {
        return (
            <div>
                <Row className='header'>
                    <Col s={6} m={6} l={6}>
                        <Logo />
                    </Col>
                    <Col s={6} m={6} l={6}>
                        <LoginButton />
                        <RegisterButton />
                    </Col>
                </Row>
                <About />
                <Switch>
                    {/* WHATS WRONG??? if you switch order of login and / the components no longer load */}
                    <Route path='/login' component={LoginForm}/>
                    <Route path='/' component={RegisterForm}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default LoginPage;
