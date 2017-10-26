import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Row, Input, Col } from 'react-materialize';
import { Api } from '../../../lib/Api';

class LoginForm extends Component {
    submitLogin () {
        let userName = document.getElementById( 'userName' ).getAttribute( 'value' );
        let password = document.getElementById( 'password' ).getAttribute( 'value' );

        if ( userName && password ) {
            Api
                .login( {userName, password} )
                .then( ( response ) => {
                    console.log( response );
                } )
                .catch( ( err ) => {
                    // throw new Error( err );
                    console.log( err );
                } );
        }
    }

    render () {
        return (
            <div className="loginForm">
                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label="Username" id="userName" validate name="userName"><Icon>account_box</Icon></Input>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} type='Password' label='Password' id="password" name="password"><Icon>account_box</Icon></Input>
                    </Col>
                </Row>
                <Button waves='light' onClick={this.submitLogin} type="button">Submit<Icon left>cloud</Icon></Button>
            </div>
        );
    }
}

export default LoginForm;
