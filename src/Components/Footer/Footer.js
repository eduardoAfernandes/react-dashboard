import React, { Component } from 'react';
import './Footer.css';
import logoGithub from './../../github.png';

class Footer extends Component {
    render() {
        return(
            <footer id="sticky-footer" className="py-4 footer bg-dark text-white-50">
          <div className="container text-center ">
        <a href="https://github.com/eduardoAfernandes/" target="_blank" rel="noopener noreferrer">
              <span><img src={logoGithub} alt="logo"></img></span>
              <small>eduardoAfernandes</small>
              </a>  
            </div>
          </footer>
                  )
    }
}

export default Footer;