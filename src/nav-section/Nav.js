import React, { Component } from 'react'
import  './nav.css';

import logo from './logo.png';



export class Nav extends Component {

  

  render() {
    return (
      
        <header className='nav-header'>
        <nav>
        <div className='container'>
            <div className='row nav-center'>
                <div className='col-lg-1 col-sx-6 col-xm-6 col-md-6'>
                   <img src={logo}  className='logo'/>
                </div>
                <div className='col-lg-11 col-sx-6 col-xm-6 col-md-6'>
                    <div className='nav'>
                    <div className='nav1 d-xs-none d-xm-none d-md-none '>
                        <ul className='nav-list'>
                            <a href='#'> <li>Courses and Programs <br></br>Contact</li></a>  
                            <a href='#'> <li>Price</li></a>
                            <a href='#'><li>Teachers</li></a> 
                            <a href='#'><li>Reviews</li></a> 
                          

                        </ul>
                    </div>
                    <div className='nav-icon d-xs-none d-xm-none d-md-none'>
                        <a href='#'><i class="fa-brands fa-twitter"></i></a>
                        <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
                        <a href='#'><i class="fa-brands fa-instagram"></i></a>

                      </div>   
                      <div className='nav-btn d-xs-none d-xm-none d-md-none'>
                           <button>Get started now  <i class="fa-solid fa-right-long"></i></button>
                        </div>
                        <div className='nav-btn1 d-lg-none'>
                           <button className='navbtn-bar' ><i class="fa-solid fa-bars"></i></button>
                        </div>
                  </div> 
                </div>
             
                
            </div>
        </div>
        </nav>
        </header>
      
    )
  }
}

export default Nav
