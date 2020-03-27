/* =================================
  This is the Footer component
==================================== */

import React,{Component} from 'react';
import '../css/Footer.css';

  class Footer extends Component {
    render(){
      return (
        <div className="main-footer">
          <a href="http://gmail.com">
            <img src={require("../img/mail.png" )}
          alt="mail" class="social-mail" />
          </a>
          <p>All rights are reserved. &copy; 2020 Jose Luis Lopez</p>
        </div>
      );
    }
}

export default Footer;
