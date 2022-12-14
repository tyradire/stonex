import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const NavbarItem = ({path, title, id, image}) => {

  let location = useLocation();

  return (
    <Link className={path !== location.pathname ? 'navbar__link' : 'navbar__link navbar__link_active'} to={path} key={id}>
      <img className={path !== location.pathname ? 'navbar__icon' : 'navbar__icon navbar__icon_active'} alt={title + 'icon'} src={image} />
      <p className='navbar__title'>{title}</p>
    </Link>
  )
}

export default NavbarItem