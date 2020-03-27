/* =================================
  This is the Resume component
==================================== */
import React, { Component } from 'react';
import '../css/Resume.css';

class Resume extends Component {

  render() {
    return (
      <div className="myResume">
        <div>
          <h1>Jose Luis Lopez</h1>
          <h3>206-851-0221</h3>
          <p><a href="https://github.com/leitto10 ">github.com/leitto10</a></p>
          <p><a href="https://www.linkedin.com/in/jose-llopez/">Jose-llopez Linkedin</a></p>
        </div>
        <div>
          <h2>TECHNICAL SKILLS</h2>
          <li>General programming in Java, MySQL, CSS, HTML, PHP and JavaScript.</li>
          <li>Experience working with Android Studio, ReactJs, React Native, Node.js, Git workflow. </li>
          <li>Data Science development with Python programming tools.</li>
          <li>Cloud Computing Fundamentals with Azure and AWS services.</li>
          <li>Knowledge in Data Structures and Algorithms as well as Web Application Development.</li>
          <p><a href="https://teamtreehouse.com/joseluislopez">Treehouse Profile</a></p>
        </div>
        <div>
          <h2>EDUCATION</h2>
          <li>Bachelor of Applied Science, Application Development, North Seattle College.  2018-2020</li>
          <li>Focus Areas: X, Y, Z, and A</li>
          <li>Associate of Arts and Science, Seattle Central College.                  2015-2018</li>
        </div>
        <div>
          <h2>RELEVANT EXPERIENCE</h2>
          <li>Intern at Glass Eye Studio. Creating a Web Application tool with Reactjs for a 2D event space. </li>
        </div>
        <div>
          <h2>PROJECTS</h2>
          <h3>Floop </h3>
            <p>Software Developer Engineer – Floop Grade Book.           web app practicum       Spring-2019</p>
            <li>Front-end UI architecture development for web application support. </li>
            <li>Created components using ReactJs and Node.js </li>
            <li>Integrating Firebase authentication and database services.</li>
          <h3>MementoCRM</h3>
            <p>Software Developer Engineer – UI Development.            mobile app practicum        Fall-2019</p>
            <li>Created React Native components for Android applications.</li>
            <li>Integrating Firebase authentication and database services.</li>
            <a href="https://play.google.com/store/apps/details?id=com.mementocrm">https://play.google.com/store/apps/details?id=com.mementocrm</a>
          <h3>Pot O' Gold Coffee</h3>
            <p>Back-End Development with Azure services.        Cloud Computing Practicum.         Winter-2020</p>
            <li>Creating Azure Function APIs for HTTP requests.</li>
            <li>Data management in the Azure SQL database.</li>
            <li>Working with other Azure services such as Stream Analytics, Key vaults, Manage Identity, IoT Hubs, Storage accounts, etc.</li>
        </div>
        <div>
          <h2>OTHER EXPERIENCE</h2>
          <li>Job Title, Job Location							Month/Year – Present</li>
          <li>Job Title, Job Location							Month/Year – Month/Year</li>
        </div>
      </div>
    );
  }
}

export default Resume;
