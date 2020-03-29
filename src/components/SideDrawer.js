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
      <ul>
        <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/resume">
            <li>RESUME</li>
          </Link>
      </ul>
    </nav>
  );
}

export default SideDrawer;