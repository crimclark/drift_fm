import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ path }) => {
  return (
    <li className="pure-menu-item">
      <Link className="pure-menu-link" to={`/${path}`}>
        {path.toUpperCase()}
      </Link>
    </li>
  )
};

export default NavLink;
