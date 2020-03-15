/* =================================
  This is the Desktop navigation
  component
==================================== */

import React from 'react';

import '../css/Nav.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <header className="main_header">
      <nav className="bar_navitagion">
        <div className="nav_toggle_button">
        </div>
        <div className="logo"><a href="/">Jose L Lopez</a></div>
        <div className="spacer" />
        <div className="bar_nav_items">
          <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link>
              <li>WORK</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
