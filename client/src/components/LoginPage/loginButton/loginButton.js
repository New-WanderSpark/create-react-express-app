import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import './loginButton.css';

class LoginButton extends Component {
    render () {
        return (
            <Link to='/login'><Button className='loginBtn' waves='light'>Login<Icon left>cloud</Icon></Button></Link>
        );
    }
}

export default LoginButton;
