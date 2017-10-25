import React from "react";
import "./SearchMenu.css";
import { Button, SideNav, SideNavItem } from 'react-materialize';
// import PlacesSearchComponent from './placesSearch/PlacesSearchContainer';

const SearchMenu = () =>
  <SideNav
    trigger={<Button floating large className='searchbtn' waves='light' icon='add' />}
    options={{ closeOnClick: true }}
    >

    <SideNavItem userView
      user={{
        background: 'amihere',
        image: 'amihere',
        name: 'John Doe',
        email: 'jdandturk@gmail.com'
      }}
    />

    {/* <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
    <SideNavItem href='#!second'>Second Link</SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>Subheader</SideNavItem>
    <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem> */}
    
    {/* <PlacesSearchComponent /> */}
  </SideNav>

export default SearchMenu;
