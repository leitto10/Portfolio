// This is the Header Component
import React from 'react';
import Stats from './Stats';

import '../css/Header.css';

const Header = (props) => {
  return(
    <header className="litteHeader">
      <Stats
      players={props.players}/>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;