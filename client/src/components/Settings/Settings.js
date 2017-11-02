import React, {Component} from 'react';
import { Button, Icon, Row, Input, Col } from 'react-materialize';
import './Settings.css';
import { Api } from '../../lib/Api';
import { toast } from 'react-toastify';

class Settings extends Component {
    /**
     * Submit registration information.
     */
    submitSettings () {
        let formContents = document.getElementById( 'settingsForm' );
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
                // let formatedName = formElements[i].getAttribute( 'data-name' );
                let value = formElements[i].getAttribute( 'value' );

                // if ( !value ) {
                //     errors.push( formatedName + ' is a required field.' );
                // }

                formData[name] = value;
            };

            /**
             * Check form for values
             */
            if ( !Object.keys( formData ).length ) {
                toast.error( 'Please fill in your information to update' );
                return false;
            };

            /*
            * Check for password
            */ 
            if ( formData.password && ( formData.password !== formData.password2 ) ) {
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

            let userObj = {};

            if ( formData.password ) {
                // Password change
                userObj.password = formData.password;
            }

            if ( formData.email ) {
                // Change email
                userObj.email = formData.email;
            }

            /**
             * Send the request to the register endpoint.
             */
            Api
                .updateUser( userObj )
                .then( ( response ) => {
                    // /**
                    //  * Check for trip name change
                    //  */
                    // if ( formData.tripName ) {
                    //     Api
                    //         .updateTripName( formData.tripName )
                    //         .then( ( response ) => {

                    //         } )
                    //         .catch();
                    // }

                    if ( response.status === 200 ) {
                        toast.success( 'User settings updated.' );
                    } else {
                        toast.error( 'There was a problem saving your settings: ' + response.error );
                    }
                } )
                .catch( ( err ) => {
                    toast.error( 'There was a problem saving your settings: ' + err.response.data.error );
                    console.log( err.response );
                } );
        } else {
            toast.error( 'No form found.' );
        }
    }

    render () {
        return (
            <div className="changeForm" id="settingsForm">
                {/* <Row>
                    <Col s={12} m={12}>
                        <Input s={12} name="tripName" data-name="tripName" label="Change name of trip" validate><Icon>airplanemode_active</Icon></Input>
                    </Col>
                </Row> */}

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} name="password" data-name="password" label="Change Password" type='Password' validate><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} name="password2" data-name="password2" label="Confirm Password" type='Password' validate><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} name="email" type="email" data-name="email" label="Change Email" validate><Icon>email</Icon></Input>
                    </Col>
                </Row>

                <div className="valign-wrapper">
                    <Row>
                        <Col s={12} m={12}>
                            <Button type="button" className='savedBtn' s={12} waves='light' onClick={this.submitSettings}>Save Changes<Icon left>cloud</Icon></Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Settings;
