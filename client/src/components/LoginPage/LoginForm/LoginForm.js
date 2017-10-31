import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Icon, Row, Col } from 'react-materialize';
import './LoginForm.css';
import { Api } from '../../../lib/Api';

class LoginForm extends Component {
    submitLogin () {
        let userName = document.getElementById( 'userName' ).getAttribute( 'value' );
        let password = document.getElementById( 'password' ).getAttribute( 'value' );

        if ( userName && password ) {
            Api
                .login( {userName, password} )
                .then( ( response ) => {
                    if ( response.data.success ) {
                        localStorage.setItem( 'jwt', response.data.token );
                        localStorage.setItem( 'user', JSON.stringify( response.data.user ) );
                        document.location = '/dashboard';
                    } else {
                        alert( 'Sorry, login failed.' );
                    }
                } )
                .catch( ( err ) => {
                    // throw new Error( err );
                    console.log( err );
                } );
        }
    }

    render () {
        return (
            <div className="container" id="signIn">
                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label="Username" validate name='userName' id='userName'><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label="Password" type='password' validate name='password' id='password'><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <div className="center-align" id="formBtn">
                    <Row>
                        <Col s={12} m={12}>
                            {<Button className='loginSubmit' s={12} waves='light' onClick={this.submitLogin}>Submit<Icon left>cloud</Icon></Button>}
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }
}

export default LoginForm;
