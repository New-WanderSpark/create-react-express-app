import React, {Component} from 'react';
import { Button, Icon, Form, Row, Input, Col } from 'react-materialize';

class RegisterForm extends Component {
    render () {
      return (
        <div className="registerForm">

                                <Col s={12} m={6} l={12}>
                                    <Input s={6} label="Username" validate><Icon>account_box</Icon></Input>
                                </Col>
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
                            <Button id="submit-button" waves='light'>Submit</Button>
                    </div>
        );
    }
}

export default RegisterForm;