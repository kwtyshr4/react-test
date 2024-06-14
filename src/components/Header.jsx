import React from 'react';
import headerLogo from '../assets/header-logo.png'

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header-logo'>
          <img src={headerLogo} />
        </div>
      </div>
    );
  }
}

export default Header;
