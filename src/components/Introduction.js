/* =================================
  This is the introduction component
==================================== */

import React from 'react';

import '../css/Introduction.css';

const Introduction = (props) => {
  return (
    <div className="introduction">
      <h2>Jose Luis Lopez</h2>
      <p>Software Developer Engineer with Computer Science fundamentals.
      Looking to work on mobile, web apps, databases, projects and find the best problems solving solutions.
      I have worked on projects that involved key concepts such as Linked Lists,
      Binary Search Trees, database normalization, and web development.</p>
      <p>In my free time, I love to play soccer and train with my friends.
      I'm always happy to work on new and future projects.
      Please, don't hesitate to contact me if you have any questions.</p>
    </div>
  );
}

export default Introduction;
