import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as SettingsIcon } from '../../assets/svg/settings.svg';
import Navbar from '../Navbar/Navbar';
import './Header.scss';

const Header = () => {

  let location = useLocation();

  return (
    <div className='header'>
      <Link to="/">
        <SettingsIcon className={location.pathname === '/' ? 'header__settings-btn  header__settings-btn_active' : 'header__settings-btn'} width={24} height={24} />
      </Link>
      <Navbar />
    </div>
  )
}

export default Header