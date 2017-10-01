import React from 'react';
import NavLink from './NavLink';
import './nav.css';

const Nav = () => {
  return (
    <div className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        <NavLink path="chords" />
        <NavLink path="melody" />
        <NavLink path="sample" />
        <NavLink path="global" />
      </ul>
    </div>
  )
};

export default Nav;
