import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Icon } from 'react-materialize';
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
            <div>
                <div class="container" id="signIn">
                    <div class="card-panel">
                        <div class="row noMarg1">
                            <form class="col s12">
                                <div class="row noMarg1">
                                    <Input s={12} label='Username' validate name='userName'><Icon>account_box</Icon></Input>
                                </div>
                                <div class="row noMarg1">
                                    <Input s={12} label='Password' type='Password' validate name='password'><Icon>lock</Icon></Input>
                                </div>
                                <Link to='/dashboard'><Button waves='light' onClick={this.submitLogin}>Submit<Icon left>cloud</Icon></Button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
