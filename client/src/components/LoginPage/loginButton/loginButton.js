import React, {Component} from 'react';
import {Button, Icon, Form, Row, Input, Col} from 'react-materialize';
import './loginButton.css';

class LoginButton extends Component {
    render () {
        return (
            <div>
                <Button id="login-button" waves='light'><i class="fa fa-sign-in">Login</i></Button>
            </div>
        );
    }
}

export default LoginButton;
