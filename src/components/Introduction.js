/* =================================
  This is the introduction component
==================================== */

import React, {Component} from 'react';
import MyImage from '../img/joseluis.jpeg';

import '../css/Introduction.css';

class Introduction extends Component {
  render(){
    return (
      <div>
        <img className="myImage" src={MyImage} alt="" />
        <div className="introduction">
          <p className="introContent">Hello, my name is Jose and I'm a Software Developer Engineer with Computer Science fundamentals.
          Looking to work on mobile, web apps, databases, projects and find the best problems solving solutions.
          I have worked on projects that involved key concepts such as Linked Lists,
          Binary Search Trees, Databases Normalization, and web/mobile development.</p>
          <p className="introContent">In my free time, I love to play soccer and train with my friends.
          I'm always happy to work on new and future projects.
          Please, don't hesitate to contact me if you have any questions.</p>
          <a href="https://www.linkedin.com/in/jose-llopez/" target="_blank"
          rel="noopener noreferrer">
            <p>Linkedin</p>
          </a>
          <a href="https://mail.google.com/mail/" target="_blank"
          rel="noopener noreferrer">
            <p>leitto10@gmail.com</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Introduction;
