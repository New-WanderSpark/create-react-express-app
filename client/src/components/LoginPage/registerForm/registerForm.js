import React, {Component} from 'react';
import { Button, Icon, Row, Input, Col } from 'react-materialize';
import './registerForm.css';

class RegisterForm extends Component {
    render () {
        return (
            <div className="registerForm">
                <Row>
                    <Col s={12} m={12}>
                        <Input s={6} label="Username" validate><Icon>account_box</Icon></Input>
                        <Input s={6} label="First Name" validate><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={6} label="Password" type='Password' validate><Icon>lock</Icon></Input>
                        <Input s={6} label="Last Name" validate><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={6} label="Confirm Password" type='Password' validate><Icon>lock</Icon></Input>
                        <Input s={6} label="Email" validate><Icon>email</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={6} label="Name your trip!" validate><Icon>airplanemode_active</Icon></Input>
                        <Button className='registrationBtn' s={6} waves='light'>Submit<Icon left>cloud</Icon></Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default RegisterForm;
