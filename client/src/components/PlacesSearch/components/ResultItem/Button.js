// This component is a presentatial component which renders a button
// in the context of a result from the places search. ('View' or 'Pin')

import React from 'react';
import { Button as MaterializeBtn } from 'react-materialize';

function Button ( props ) {
    return <MaterializeBtn waves='light' onClick={props.handleClick}>{props.children}</MaterializeBtn>;
}
export default Button;
