import React from 'react';
import '../css/SideDrawer.css';

const SideDrawer = (props) => {

  let drawerClasses = 'side_drawer';
  if(props.show){
    drawerClasses = 'side_drawer open';
  }
  return(
    <nav className={drawerClasses}>
      <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/resume">RESUME</a></li>
      </ul>
    </nav>
  );
}

export default SideDrawer;
