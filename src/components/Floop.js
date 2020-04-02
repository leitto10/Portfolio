/* =================================
  This is the Floop component
==================================== */
import React, {Component} from 'react';
import FloopImg from '../img/floop01.PNG';

import '../css/Floop.css';

class Floop extends Component {
  render(){
    return (
      <div className="floopDiv"> 
          <h2>Floop</h2>
          <p>
          Floop was the first project I worked on while taking classes at North Seattle College. 
          Reactjs became one of my favorite tools for developing web applications. 
          I learned how to develop components that manage state to child components. 
          </p>
          <p>
          Floop is a web app that is designed to save teachers time and helps students see the value 
          in feedback. According to the client, they needed a component that will handle the student's 
          information. We use react-table which is a library useful for creating excel interactive 
          tables.
          </p>
            <p>
            We also used firebase on this project, the Floop team had a database with mock data 
            that we use to populate the table. We added different functionalities to such us, creating, 
            deleting and updating students in the table. 
            Everything with state from a parent to child components.
            </p>
            <img src={FloopImg} alt="floop"/>
      </div>
    );
  }
}

export default Floop;
