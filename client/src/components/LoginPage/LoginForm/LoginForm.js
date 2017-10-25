import React, {Component} from 'react';
import { Button, Icon, Form, Row, Input, Col } from 'react-materialize';

class LoginForm extends Component {
    render () {
        return (
            <div className="registerForm">
                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="Username" validate><Icon>account_box</Icon></Input>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="password" label='password'><Icon>account_box</Icon></Input>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoginForm;
