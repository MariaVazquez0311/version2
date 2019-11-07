import React from 'react';
import MytineraryLogo from '../IMG/MYtineraryLogo.png';
class Header extends React.Component
{
    render() {
      return (
      <div>
        <img src={MytineraryLogo} alt='logo' />;
      </div>
      )
    }
}
export default Header;

