import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './LoginPage.css';
import { Row, Col } from 'react-materialize';
import Logo from './logo/logo';
import LoginButton from './loginButton/loginButton';
import RegisterButton from './registerButton/registerButton';
import LoginForm from './LoginForm/LoginForm';
import About from './About/About';
import Footer from '../Footer';

class LoginPage extends Component {
    render () {
        return (
            <div>
                <Row>
                    <Col s={9} m={9} l={9}>
                        <Logo />
                    </Col>
                    <Col s={3} m={3} l={3}>
                        <LoginButton />
                        <RegisterButton />
                    </Col>
                </Row>
                <Switch>
                    {/* WHATS WRONG??? */}
                    <Route path='/login' component={LoginForm}/>
                    <Route path='/' component={About}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default LoginPage;
