/* =================================
  This is the Footer component
==================================== */

import React from 'react';
import '../css/Footer.css';

const Footer = (props) => {
  return (
    <div className="main-footer">
      <a href="http://twiter.com/DadddyLuis"><img src={require("../img/twitter-wrap.png" )}
      alt="Twitter Logo" class="social-icon" />
      </a>
      <a href="http://facebook.com/luis.lopez.3956"><img src={require("../img/facebook-wrap.png" )}
      alt="Facebook Logo" class="social-icon" />
      </a>
      <a href="http://gmail.com"><img src={require("../img/mail.png" )}
      alt="mail" class="social-mail" />
      </a>
      <p>All rights are reserved. &copy; 2020 Jose Luis Lopez</p>
    </div>
  );
}

export default Footer;
