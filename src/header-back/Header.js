import React, { Component } from 'react'
import  './header.css';



export class Header extends Component {

    
  render() {
    return (
      <section className='img-back'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-xs-12 col-xm-12 col-md-12'>
                    <div>
                        <div className='header-ofer'>
                            <p><span className='off-color'>20% Off </span>for first 3 months</p>
                            <h1>Empowerment comes<br></br>
                                from within</h1>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br>
Odit sed temporibus voluptatum minus ipsa blanditiis.</h5>
                        </div>
                    </div>
                    <div className='header-btn'>
                        <div>
                            <button className='active'>Yoga for beginners <i class="fa-solid fa-chevron-right"></i></button>
                        
                        </div>
                        <div>
                            <button className='play-btn'><i class="fa-regular fa-circle-play"> </i> Where to begin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Header
