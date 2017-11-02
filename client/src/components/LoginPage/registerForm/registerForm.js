import React, {Component} from 'react';
import { Button, Icon, Row, Input, Col } from 'react-materialize';
import './registerForm.css';
import { Api } from '../../../lib/Api';
import { toast } from 'react-toastify';

class RegisterForm extends Component {
    /**
     * Submit registration information.
     */
    submitRegistration () {
        let formContents = document.getElementById( 'registerForm' );
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
                let formatedName = formElements[i].getAttribute( 'data-name' );
                let value = formElements[i].getAttribute( 'value' );

                if ( !value ) {
                    errors.push( formatedName + ' is a required field.' );
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
             * Display any errors
             */
            if ( errors.length ) {
                errors.forEach( ( error ) => {
                    toast.error( error );
                } );
                return false;
            }

            /**
             * Send the request to the register endpoint.
             */
            Api
                .register( formData )
                .then( ( response ) => {
                    /**
                     * TODO: add redirect to login page.
                     */

                    if ( response.data.success ) {
                        toast.success( 'You have successfully registered!' );
                        this.props.history.push( '/login' );
                    } else {
                        toast.error( 'There was a problem registering: ' + response.data.error );
                    }
                } )
                .catch( ( err ) => {
                    toast.error( 'There was a problem registering: ' + err );
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
                        <Input s={12} label='Username' data-name="Username" validate name='userName'><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='First Name' data-name='First Name' validate name='firstName'><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='Last Name' data-name='Last Name' validate name='lastName'><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='Password' type='password' data-name='Password' validate name='password'><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='Confirm Password' type='password' data-name='Password Confirmation' validate name='password2'><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='Email' data-name='Email' validate name='email'><Icon>email</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label='Name your trip!' data-name='Trip Name' validate name='tripName'><Icon>airplanemode_active</Icon></Input>
                    </Col>
                </Row>

                <div className="center-align" id="registerFormBtn">
                    <Row>
                        <Col s={12} m={12}>
                            <Button className='registrationBtn' s={6} waves='light' onClick={this.submitRegistration.bind( this )}>Submit<Icon left>cloud</Icon></Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
