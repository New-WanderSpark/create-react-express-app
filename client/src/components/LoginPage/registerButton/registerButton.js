import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import './registerButton.css';
import PropTypes from 'prop-types';

class RegisterButton extends Component {
    render () {
        return (
            <Link
                to={{
                    'pathname': '/',
                    'hash': '#form'
                }}
                onClick={this.props.onClick}
            >
                <Button className='registerBtn' waves='light'>Register
                    <Icon left>cloud</Icon>
                </Button>
            </Link>
        );
    }
}

RegisterButton.propTypes = { 'onClick': PropTypes.func };

export default RegisterButton;
