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
                    if ( response.data.success ) {
                        localStorage.setItem( 'jwt', response.data.token );
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
            <div>
                <div className="container" id="signIn">
                    <div className="card-panel">
                        <div className="row noMarg1">
                            <form className="col s12">
                                <div className="row noMarg1">
                                    <Input s={12} label="Username" validate name='userName' id='userName'><Icon>account_box</Icon></Input>
                                </div>
                                <div className="row noMarg1">
                                    <Input s={12} label="Password" type='password' validate name='password' id='password'><Icon>lock</Icon></Input>
                                </div>
                                {/* <Button waves='light' onClick={this.submitLogin} type="button">Submit<Icon left>cloud</Icon></Button> */}
                                
                                <Link to={{ 'pathname': '/dashboard' }}><Button waves='light' href='/dashboard' type="button">Submit<Icon left>cloud</Icon></Button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
