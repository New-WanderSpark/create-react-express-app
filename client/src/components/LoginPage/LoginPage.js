import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './LoginPage.css';
import { Row, Col } from 'react-materialize';
import Logo from './logo/logo';
import LoginButton from './loginButton/loginButton';
import RegisterButton from './registerButton/registerButton';
import RegisterForm from './registerForm/registerForm';
import LoginForm from './LoginForm/LoginForm';
import About from './About/About';
import Footer from '../Footer';

class LoginPage extends Component {
    goToForm () {
        document.getElementById( 'form' ).scrollIntoView( { 'behavior': 'smooth' } );
    }
    render () {
        return (
            <div>
                <Row className='header'>
                    <Col s={6} m={6} l={6}>
                        <Logo />
                    </Col>
                    <Col s={6} m={6} l={6}>
                        <LoginButton onClick={this.goToForm.bind( this )} />
                        <RegisterButton onClick={this.goToForm.bind( this )} />
                    </Col>
                </Row>
                <About />
                <div id='form'>
                    <Switch>
                        <Route path='/login' component={LoginForm}/>
                        <Route path='/' component={RegisterForm}/>
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default LoginPage;
