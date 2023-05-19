import React from 'react';

import logo from "../../img/logo.png";

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="Logo da Labenu" className='logo' />
    </div>
  )
}

export default Header