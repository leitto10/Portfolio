/* =================================
  This is the MementoCRM Component
==================================== */
import React,{Component} from 'react';
import mementoPicture from '../img/mementoCRM.jpg';

import '../css/MementoCRM.css';

class MementoCRM extends Component {
    render(){
      return (
        <div className="mementoDive">
              <h1>MementoCRM</h1>
              <p>
              The MementoCRM practicum fall 2019 was my favorite project so far, 
              our client Fabian Garcilazo was very well prepared. He had a beautiful 
              UX design that we followed to created components for this application.
              </p>
              <p>
              <a href="https://play.google.com/store/apps/details?id=com.mementocrm" target="_blank"
              rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.mementocrm</a>
              </p>
              <img src={mementoPicture} alt="MementoCRM "/>
        </div>
      );
    }
}

export default MementoCRM;
