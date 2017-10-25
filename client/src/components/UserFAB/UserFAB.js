import React from 'react';
import './UserFAB.css';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom'

const UserFAB = () =>
    <Button floating fab='horizontal click-to-toggle userFAB' icon='menu' className='' large style={{"bottom": '45px', "right": '24px'}}>
        <Link to='/dashboard'><Button floating icon='airplanemode_active' className='green' /></Link>
        <Link to='/settings'><Button floating icon='account_circle' className='yellow darken-1' /></Link>
        <Link to='/logout'><Button floating icon='power_settings_new' className='red' /></Link>
    </Button>;

export default UserFAB;
