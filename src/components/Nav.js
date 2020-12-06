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
        <div className="logo"><Link to="/">Jose L Lopez</Link></div>
        <div className="spacer" />
        <div className="bar_nav_items">
          <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/resume">
              <li>RESUME</li>
            </Link>
            <Link to="/potOgold">
              <li>POTOGOLD</li>
            </Link>
            <Link to="/memento">
              <li>MEMENTO</li>
            </Link>
            <Link to="/scoreboard">
              <li>SCOREBOARD</li>
            </Link>
            <Link to="/restapis">
              <li>RESTAPIs</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
