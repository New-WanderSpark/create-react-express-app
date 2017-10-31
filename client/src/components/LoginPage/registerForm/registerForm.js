import React, {Component} from 'react';
import { Button, Icon, Row, Input, Col } from 'react-materialize';
import './registerForm.css';
import { Api } from '../../../lib/Api';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';

class RegisterForm extends Component {
    /**
     * Submit registration information.
     */
    submitRegistration () {
        let formContents = document.getElementById( 'registerForm' );
        console.log( formContents );
        /**
         * Make sure we found the form.
         */
        if ( formContents ) {
            let formElements = formContents.getElementsByTagName( 'input' );
            let formData = {};
            let errors = [];

            /**
             * Loop through the elements and create an object.
             */
            for ( let i = 0; i < formElements.length; i++ ) {
                let name = formElements[i].getAttribute( 'name' );
                let value = formElements[i].getAttribute( 'value' );

                if ( !value ) {
                    errors.push( name + ' is a required field.' );
                }

                formData[name] = value;
            };

            /*
            * Check for password
            */ 
            if ( formData.password !== formData.password2 ) {
                errors.push( 'Both passwords must match.' );
            }

            /**
             * Send the request to the register endpoint.
             */
            Api
                .register( formData )
                .then( ( response ) => {
                    /**
                     * TODO: add success message and redirect to login page.
                     */

                    if ( response.data.success ) {
                        alert( response.data.message );
                    } else {
                        alert( response.data.error );
                    }
                } )
                .catch( ( err ) => {
                    // throw new Error( err );
                    console.log( err );
                } );
        } else {
            console.log( 'No form found.' );
        }
    }

    render () {
        return (
            <div id="registerForm">
                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='Username' validate name='userName'><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='First Name' validate name='firstName'><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='Last Name' validate name='lastName'><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='Password' type='password' validate name='password'><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='Confirm Password' type='password' validate name='password2'><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='Email' validate name='email'><Icon>email</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='Name your trip!' validate name='tripName'><Icon>airplanemode_active</Icon></Input>
                    </Col>
                </Row>

                <div className="center-align" id="registerFormBtn">
                    <Row>
                        <Col s={12} m={12}>
                            <Button className='registrationBtn' s={6} waves='light' onClick={this.submitRegistration}>Submit<Icon left>cloud</Icon></Button>
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }
}

export default RegisterForm;
