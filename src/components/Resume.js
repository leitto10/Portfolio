/* =================================
  This is the Resume component
==================================== */
import React, { Component } from 'react';
import '../css/Resume.css';

class Resume extends Component {

  render() {
    return (
      <div className="myResume">
      <div className="heading">
        <h3>206-851-0221</h3>
          <p><a href="https://github.com/leitto10" target="_blank" 
          rel="noopener noreferrer" >github.com/leitto10</a></p>
          <p><a href="https://www.linkedin.com/in/jose-llopez/" 
          target="_blank" rel="noopener noreferrer" >Jose-llopez Linkedin</a></p>
      </div>
        <h2>SUMMARY</h2>
        <p>My name is Jose, and I’m a Software Developer Engineer with Computer Science fundamentals. 
          Looking for a full-time job opportunity to work on mobile, web apps, database projects, 
          cloud computing, and find the best problem-solving solutions. I have worked on projects 
          that involved key concepts such as Linked Lists, Binary Search Trees, SQL, and NoSQL databases. 
          I have implemented RESTful API’s Development with Azure, Express, and Node JS. 
          Knowledge in Data Structures and Algorithms</p>

        <h2>EDUCATION</h2>
        <div className="bulletPoints">
          <li><b>Bachelor of Applied Science, Application Development</b>, North Seattle College  <b>2018-2021</b></li>
          <li>Focus Areas: Communication, Collaboration, Cloud Computing, and Development</li>
          <li><b>Associate of Arts and Science</b>, Seattle Central College                  <b>2015-2018</b></li>
        </div>

        <h2>RELEVANT EXPERIENCE</h2>
        <h4>Junior Developer at Kosmos Technologies (Contract) May 2020 - Jul 2020</h4>
        <div className="bulletPoints">
          <li>General programming with JavaScript and worked with Quick Base platform Apps</li>
          <li>Automate product design, create, update, delete and build SQL normalization table-to-table relationships</li>
          <li>Data Analysts with QB API_DoQquey to Add, update, delete and query table records JSON-like documents</li>
          <li>Restructured the front-end components design with React JS that provided a better user experience</li>
        </div>
        <h4>Intern at Glass Eye Studio, Jan 2020 - Mar 2020, closed covid-19</h4>
        <div className="bulletPoints">
          <li>Worked closely with the team to develop the product designed for web templates that made a significant impact to thousands of customers</li>
          <li>Collaborated and created React JS components for a 2D Web App tool Event Space </li>
          <li>Managed development and implementation to complete the project within the desired timeframe</li>
        </div>
        
        <h2>PROJECTS</h2>

        <h3>IT ChatBot</h3>
          <div className="bulletPoints">
            <p><b>Software Developer Engineer - Team Project &nbsp;&nbsp;&nbsp; Data Science Practicum Spring-2020</b></p>
            <li>Trained a deep learning model for a ChatBot using IT helpline information that improved customers service experience </li>
            <li>Use of Python, flask app, Docker, Azure, tensorflow, tflearn, numpy, pickle, nltk, and other open source python libraries</li>
            <li>Responsible for testing debugging and reporting on various IT controls</li>
          </div>
        
        <h3>Pot O' Gold Coffee</h3>
          <div className="bulletPoints">
            <p><b>Back-End Development with Azure services. &nbsp;&nbsp;&nbsp; Cloud Computing Practicum Winter-2020</b></p>
            <li>Developed and maintain a Cloud Computing Infrastructure Managed Service Provider with Azure services</li>
            <li>Work with Serverless Function Apps to create RESTful APIs for HTTP requests and reduced the cost of running the Task Management App by 20%</li>
            <li>Configured Azure storage connection string to query records and data analysis management with SQL databases</li>
            <li>Safeguard cryptographic keys and implementing security in the cloud with key vault Azure service</li>
          </div>

          <h3>MementoCRM</h3>
          <div className="bulletPoints">
            <p><b>Software Developer Engineer – UI Development &nbsp;&nbsp;&nbsp; Mobile App Practicum  Fall-2019</b></p>
            <li>Created and tested React Native components for a Customer Relationship Management App</li>
            <li>Worked closely with our mentor and development team to keep constantly communication to fulfill our client’s needs</li>
            <li>Integrated Firebase services for authentication, real-time databases and managed data analysis with JavaScript</li>
          </div>
          
        <h2>TECHNICAL SKILLS</h2>
        <div className="bulletPoints">
          <li>General programming in Java, Python, MySQL, CSS, HTML, Mongo Db, JavaScript and Git Workflow</li>
          <li>Experience working with Android Studio, React JS, React Native, Express, Node JS, and Operating System Android</li>
          <li>Cloud Computing Fundamentals with AWS and Azure services</li>
          
        </div>

        <h2>OTHER EXPERIENCE</h2>
        <div className="bulletPoints">
          <li>Data entry, Glass Eye Studio			January/2019 – February/2020</li>
          <li>General Assistan, MALTOM INC 			January/2015 - December/2018</li>
          <li>Waiter, Columbia Tower Club       January/2010 - December/2014</li>
        </div>
      </div>
    );
  }
}

export default Resume;
