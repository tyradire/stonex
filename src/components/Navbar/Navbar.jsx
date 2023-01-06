import React from 'react';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../routes';
import { ReactComponent as SettingsIcon } from '../../assets/svg/settings.svg';
import NavbarItem from './NavbarItem';
import './Navbar.scss';

const Navbar = () => {

  return (
    <nav className='navbar'>
      <Link to="/">
        <SettingsIcon className='navbar__settings-btn' width={24} height={24} />
      </Link>
      {
        publicRoutes.slice(1).map(({path, title}, i) => 
          // <Link className={path !== location.pathname ? 'navbar__link' : 'navbar__link navbar__link_active'} to={path} key={i}>
          //   <p className='navbar__title'>{title}</p>
          // </Link>
          <NavbarItem path={path} id={i} title={title} key={i} />
        )
      }
    </nav>
  )
}

export default Navbar