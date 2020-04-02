import React from 'react';
import '../css/SideDrawer.css';
import { Link } from 'react-router-dom';

const SideDrawer = (props) => {

  let drawerClasses = 'side_drawer';
  if(props.show){
    drawerClasses = 'side_drawer open';
  }
  return(
    <nav className={drawerClasses}>
      <ul className="menubar" onClick={props.click}>
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
        <Link to="/floop">
          <li>FLOOP</li>
        </Link>
      </ul>
    </nav>
  );
}

export default SideDrawer;
