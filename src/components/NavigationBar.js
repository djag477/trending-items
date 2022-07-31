import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const NavigationBar = () => {

  return (
    <div data-testid='test-1'>
      <Navbar style={{display: 'flex', flexDirection: 'row', backgroundColor: '#000fff'}}>
        <NavbarBrand href="/" style={{flex: 1, textAlign:'center', color: '#fff000', fontWeight: 'bold'}}>Trending Models</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavigationBar;