import React, {Component} from 'react';
import { Button, Icon, Form, Row, Input, Col } from 'react-materialize';
import { Api } from '../../../lib/Api';

class RegisterForm extends Component {
    submitRegistration () {
        let formContents = document.getElementsByClassName( 'registerForm' );

        if ( formContents && formContents.length ) {
            let formElements = formContents[0].getElementsByTagName( 'input' );
            let formData = {};
            let errors = [];

            for ( let i = 0; i < formElements.length; i++ ) {
                let name = formElements[i].getAttribute( 'name' );
                let value = formElements[i].getAttribute( 'value' );

                if ( !value ) {
                    errors.push( name + ' is a required field.' );
                }

                formData[name] = value;
            };

            // Check for password
            if ( formData.password !== formData.password2 ) {
                alert( 'Both passwords must match.' );
            }

            Api
                .register( formData )
                .then( ( response ) => {
                    console.log( response );
                } )
                .catch( ( err ) => {
                    throw new Error( err );
                } );
        }
    }

    render () {
        return (
            <div className="registerForm">
                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="Username" validate name="userName" required><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="Password " validate name="password" required><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="Confirm Password" validate name="password2" required><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="Trip Name" validate name="tripName" required><Icon>airplanemode_active</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="First Name" validate name="firstName" required><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="Last Name" validate name="lastName" required><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="Email" validate name="email" type="email" required><Icon>email</Icon></Input>
                    </Col>
                </Row>

                <Button waves='light' onClick={this.submitRegistration}>Submit<Icon left>cloud</Icon></Button>
            </div>
        );
    }
}

export default RegisterForm;
