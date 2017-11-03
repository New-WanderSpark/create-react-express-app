import React from 'react';

// COMPONENTS
import TextInput from './TextInput';
import SubmitBtn from './SubmitBtn';
import { Row, Col } from 'react-materialize';

export default function SearchForm (props) {
    return (
        <form>
            <Row>
                <Col s={12} className='center-align'>
                    <TextInput
                        searchValue={props.searchValue}
                        handleChange={props.handleSearchChange}
                        placeholder='search for points of interest'
                    />
                </Col>
                <Col s={12} className='center-align'><SubmitBtn handleClick={props.handleSubmit} /></Col>
            </Row>
        </form>
    );
}
