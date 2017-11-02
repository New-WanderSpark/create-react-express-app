import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import './loginButton.css';
import PropTypes from 'prop-types';

class LoginButton extends Component {
    render () {
        return (
            <Link
                to={{
                    'pathname': '/login',
                    'hash': '#form'
                }}
                onClick={this.props.onClick}
            >
                <Button href='#signIn' className='loginBtn' waves='light'>Login
                    <Icon left>cloud</Icon>
                </Button>
            </Link>
        );
    }
}

LoginButton.propTypes = { 'onClick': PropTypes.func };

export default LoginButton;
