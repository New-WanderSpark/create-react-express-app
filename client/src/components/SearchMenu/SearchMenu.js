import React from 'react';
import './SearchMenu.css';
import { Button, SideNav, SideNavItem } from 'react-materialize';
import woodpanel from './woodpanel.jpg';
import Portrait from './portraitPH.png';

const SearchMenu = ( props ) =>
    <SideNav
        trigger={<Button floating large className='searchbtn' waves='light' icon='add' />}
        options={{ 'closeOnClick': true }}
    >
        <SideNavItem userView
            user={{
                'background': woodpanel,
                'image': Portrait,
                'name': 'Jane Doe',
                'email': 'jdandturk@gmail.com'
            }}
        />
        {props.children}
        <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
    </SideNav>;

export default SearchMenu;
