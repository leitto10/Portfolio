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
      <ul onClick={props.click}>
        <li >
          <Link to="/" >HOME</Link>
        </li>
        <li>
          <Link to="/resume">RESUME</Link>
        </li>
        <li>
          <Link to="/potogold">POTOGOLD</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideDrawer;
