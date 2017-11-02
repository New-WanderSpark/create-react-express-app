// This component is a presentatial component which renders a button
// in the context of the removal of a pin. ('Remove')

import React from 'react';
import { Button as MaterializeBtn } from 'react-materialize';

function Button ( props ) {
    return <MaterializeBtn waves='light' onClick={props.handleClick}>{props.children}</MaterializeBtn>;
}
export default Button;
