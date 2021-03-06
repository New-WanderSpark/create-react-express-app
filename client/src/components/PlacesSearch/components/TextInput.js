import React from 'react';

export default function TextInput ( props ) {
    return <input type="text" value={props.searchValue} onChange={props.handleChange} placeholder={props.placeholder} />;
}
