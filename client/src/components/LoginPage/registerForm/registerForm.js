import React, {Component} from 'react';
import { Button, Icon, Form, Row, Input, Col } from 'react-materialize';

class RegisterForm extends Component {
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
                        <Input s={6} label="Password " validate><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="Confirm Password" validate><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="Trip Name" validate><Icon>airplanemode_active</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="First Name" validate><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="Last Name" validate><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={6} l={12}>
                        <Input s={6} label="Email" validate><Icon>email</Icon></Input>
                    </Col>
                </Row>

                <Button waves='light'>Submit<Icon left>cloud</Icon></Button>
            </div>
        );
    }
}

export default RegisterForm;
