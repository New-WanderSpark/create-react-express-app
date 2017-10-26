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
        let formContents = document.getElementsByClassName( 'registerForm' );

        /**
         * Make sure we found the form.
         */
        if ( formContents && formContents.length ) {
            let formElements = formContents[0].getElementsByTagName( 'input' );
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
                    console.log( response );
                } )
                .catch( ( err ) => {
                    throw new Error( err );
                } );
        }
    }

    render () {
        return (
            <div className='registerForm'>
                <Row>
                    <Col s={12} m={12}>
                        <Input s={6} label='Username' validate name='userName'><Icon>account_box</Icon></Input>
                        <Input s={6} label='First Name' validate name='firstName'><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={6} label='Password' type='password' validate name='password'><Icon>lock</Icon></Input>
                        <Input s={6} label='Last Name' validate name='lastName'><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={6} label='Confirm Password' type='password' validate name='password2'><Icon>lock</Icon></Input>
                        <Input s={6} label='Email' validate name='email'><Icon>email</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={6} label='Name your trip!' validate name='tripName'><Icon>airplanemode_active</Icon></Input>
                        <Button className='registrationBtn' s={6} waves='light' onClick={this.submitRegistration}>Submit<Icon left>cloud</Icon></Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default RegisterForm;
