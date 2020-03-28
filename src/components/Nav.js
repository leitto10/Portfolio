/* =================================
  This is the Desktop navigation
  component
==================================== */
import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import '../css/Nav.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <header className="main_header">
      <nav className="bar_navitagion">
        <div className="nav_toggle_button">
        <DrawerToggleButton click={props.drowerClickHandler}/>
        </div>
        <div className="logo"><a href="/">Jose L Lopez</a></div>
        <div className="spacer" />
        <div className="bar_nav_items">
          <ul>
            <Link to="/Portfolio/">
              <li>HOME</li>
            </Link>
            <Link to="/resume">
              <li>RESUME</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
