import React from 'react';
import './SearchMenu.css';
import { Button, SideNav } from 'react-materialize';

const SearchMenu = ( props ) =>
    <SideNav
        trigger={<Button floating large className='searchbtn' waves='light' icon='add' />}
        options={{ 'closeOnClick': true }}
    >
        {/* User Info Display for future development */}
        {/* <SideNavItem userView
            user={{
                'background': woodpanel,
                'image': Portrait,
                'name': 'Jane Doe',
                'email': 'jdandturk@gmail.com'
            }}
        /> */}
        {props.children}
    </SideNav>;

export default SearchMenu;
