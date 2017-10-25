import React, {Component} from "react";
import {Button, Icon, Form, Row, Input, Col} from 'react-materialize';

class RegisterButton extends Component {
  render () {
    return (
  <div>
      <Button id="login-button" waves='light'><i class="fa fa-sign-in">Register</i></Button>
  </div>
    )
  }
}
          
export default RegisterButton;