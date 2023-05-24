import React, { Component } from 'react';
import './footer.css';
import img1 from './footer1.png';

export class Footer extends Component {
  render() {
    return (
      <footer className='footer-sect'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-xs-12 col-xm-12 col-md-6'>
                  <div className='footer-cont'>
                  <img src={img1} width="20%"/>
                    <p>yoga@masters.com</p>
                    <span>Ph: +(123)456-78-90</span>
                  </div>
                </div>

                <div className='col-lg-3 col-xs-12 col-xm-12 col-md-6'>
                   <div className='footer-ul'>
                        <ul>
                            <li>Courses and Programs</li>
                            <li>The Lessons</li>
                            <li>Contacts</li>

                        </ul>
                   </div>
                </div>

                <div className='col-lg-3 col-xs-12 col-xm-12 col-md-6'>
                   <div className='footer-ul'>
                        <ul>
                            <li>Blog</li>
                            <li>Privacy Policy</li>
                           
                        </ul>
                   </div>
                   </div>

                   <div className='col-lg-3 col-xs-12 col-xm-12 col-md-6'>
                        <address>
                        224 Wallace Ave #200, Toronto,<br></br> ON M6H 1V7, Canada
                        </address>
                        <div className='footer-icon'>
                            <a href='#'> <i class="fa-brands fa-twitter"></i></a>
                            <a href='#'> <i class="fa-brands fa-facebook-f"></i></a>
                            <a href='#'> <i class="fa-brands fa-instagram"></i></a>

                        </div>
                   </div>
                </div>
            </div>
        
      </footer>
    )
  }
}

export default Footer
