/* =================================
  This is the MementoCRM Component
==================================== */
import React,{Component} from 'react';
import mementoPicture from '../img/mementoCRM.jpg';
import FirebaseAuth from '../img/firebaseAuth.png';
import RealTimeDB from '../img/realTimeDB.png';

import '../css/MementoCRM.css';

class MementoCRM extends Component {
    render(){
      return (
        <div className="mementoDive">
              <h2>MementoCRM</h2>
              <p>
              The MementoCRM practicum fall 2019 was my favorite project so far, our client 
              Fabian Garcilazo was very well prepared with amazing material. He had a beautiful 
              UI design that was very useful to fulfill our client's needs. We used React Native 
              so we could deploy the app for Android and IOS devices.
              </p>
              <p>
              During this project, I focused on working on front-end development. 
              Following our client's designs, I started creating components for 
              the main page of the app and continue working with child components. 
              They all have different functionalities that make the application good 
              user experience.
              </p>
              <p>
              <a href="https://play.google.com/store/apps/details?id=com.mementocrm" target="_blank"
              rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.mementocrm</a>
              </p>
              <img src={mementoPicture} alt="MementoCRM "/>
              <p>
              I also worked on some back-end development with firebase authentication. 
              We used the Google cloud service for creating personal accounts. 
              Once the user saves their credentials in the app, this connects with the 
              cloud and creates the account.
              </p>
              <img src={FirebaseAuth} alt="firebase"/>
              <p>
              Another feature that I developed working with 
              MementoCRM was to save the user's credentials in a realtime database.
              </p>
              <img src={RealTimeDB} alt="real time database"/>
              <p>
              Because we only had 3 months to work on this project, we couldn't 
              finish the application but another group of students took over the 
              app and continue working on it. The experience was amazing and I 
              learned a lot of React Native fundamentals that I temp to apply in the real world.
              </p>
        </div>
      );
    }
}

export default MementoCRM;
