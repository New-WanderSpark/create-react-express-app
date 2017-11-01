import React, {Component} from 'react';
import { Button, Icon, Row, Input, Col } from 'react-materialize';
import './Settings.css';

class Settings extends Component {
    render () {
        return (
            <div className="changeForm">
                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label="Change name of trip" validate><Icon>airplanemode_active</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label="Change Password" type='Password' validate><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label="Confirm Password" type='Password' validate><Icon>lock</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label="Change Email" validate><Icon>email</Icon></Input>
                    </Col>
                </Row>

                <div className="valign-wrapper">
                    <Row>
                        <Col s={12} m={12}>
                            <Button className='savedBtn' s={12} waves='light'>Save Changes<Icon left>cloud</Icon></Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Settings;
