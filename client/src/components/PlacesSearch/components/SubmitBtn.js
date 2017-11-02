import React from 'react';
import { Button as MaterializeBtn } from 'react-materialize';

export default function SubmitBtn ( props ) {
    return <MaterializeBtn waves='light' type="submit" onClick={props.handleClick}>Search</MaterializeBtn>;
}
