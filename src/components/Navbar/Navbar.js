import React from 'react';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../routes';
import { ReactComponent as SettingsIcon } from '../../assets/svg/settings.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/">
        <SettingsIcon className='navbar__settings-btn' width={24} height={24} />
      </Link>
      {
        publicRoutes.slice(1).map(({path, title}, i) =>
          <Link className='navbar__link' to={path} key={i}>
            <p>{title}</p>
          </Link>
        )
      }
    </nav>
  )
}

export default Navbar