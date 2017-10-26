import React, {Component} from 'react';
import { Button, Icon, Row, Input, Col } from 'react-materialize';
import './Settings.css';

class Settings extends Component {
    render () {
        return (
            <div className="changeForm">
                <Row>
                    <Col s={12} m={12}>
                        <Input s={6} label="Change name of trip" validate><Icon>airplanemode_active</Icon></Input>
                        <Input s={6} label="Change First Name" validate><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={6} label="Change Password" type='Password' validate><Icon>lock</Icon></Input>
                        <Input s={6} label="Change Last Name" validate><Icon>account_box</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Input s={6} label="Confirm Password" type='Password' validate><Icon>lock</Icon></Input>
                        <Input s={6} label="Change Email" validate><Icon>email</Icon></Input>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <Button className='savedBtn' s={6} waves='light'>Save Changes<Icon left>cloud</Icon></Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Settings;
