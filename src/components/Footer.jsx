import React from 'react';
import footerLogo from '../assets/footer-logo.png'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            <img src={footerLogo} />
            <p>footer</p>
          </div>
          <ul className='footer-list'>
            <li>footer-list1</li>
            <li>footer-list2</li>
            <li>footer-list3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
