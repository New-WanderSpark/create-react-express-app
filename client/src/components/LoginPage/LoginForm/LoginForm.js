import React, {Component} from 'react';
import { Button, Icon, Form, Row, Input, Col } from 'react-materialize';

class LoginForm extends Component {
    render () {
        return (
            <Row>
                <Input s={12} label="username" />
                <Input type="password" label="password" s={12} />
            </Row>
        );
    }
}

export default LoginForm;
