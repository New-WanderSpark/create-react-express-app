import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Icon } from 'react-materialize';
import './LoginForm.css';

class LoginForm extends Component {
    render () {
        return (
            <div>
                <div class="container" id="signIn">
                    <div class="card-panel">
                        <div class="row noMarg1">
                            <form class="col s12">
                                <div class="row noMarg1">
                                    <Input s={12} label="Username" validate><Icon>account_box</Icon></Input>
                                </div>
                                <div class="row noMarg1">
                                    <Input s={12} label="Password" type='Password' validate><Icon>lock</Icon></Input>
                                </div>
                                <Link to='/dashboard'><Button waves='light'>Submit<Icon left>cloud</Icon></Button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
