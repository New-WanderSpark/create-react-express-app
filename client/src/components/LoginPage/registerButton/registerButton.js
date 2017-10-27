import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import './registerButton.css';

class RegisterButton extends Component {
    render () {
        return (
            <a href='#registerForm'>
                <Link to ='/'>
                    <Button className='registerBtn' waves='light'>Register
                        <Icon left>cloud</Icon>
                    </Button>
                </Link>
            </a>
        );
    }
}

export default RegisterButton;
