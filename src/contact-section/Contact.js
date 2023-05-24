import React, { Component } from 'react';
import './contact.css';
import img from './contact.jpg';

export class Contact extends Component {
  render() {
    return (
      <section className='contact-sect'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-xs-12 col-xm-12'>
                    <div className='contact-img'>
                         <img src={img} width='100%'/>
                         <div className='contact-cont'>
                            <div className='row'>
                                <div className='col-lg-6 col-xs-12 col-xm-12'>
                                    <form className='form'>
                                        <div className='row'>
                                            <div className='col-lg-12 col-xs-12 col-xm-12'>
                                            <input type="email" width="100%" className='form-inp'placeholder='Email*'/>
                                            </div>
                                            <div className='col-lg-12 col-xs-12 col-xm-12'>
                                            <textarea type="text" className='form-text' placeholder='Message'/> 
                                            </div>
                                            <div className='col-lg-12 col-xs-12 col-xm-12'>
                                                <div className='form-btn'>
                                                <button>SEND</button>
                                                </div>
                                                
                                            </div>

                                        </div>
                                  
                                    </form>
                                </div>
                                <div className='col-lg-6 col-xs-12 col-xm-12'>
                                    <div className='form-detail'>
                                        <h2>Are you interested ? Contact us.</h2>
                                        <p>Email us at or call this number</p>
                                        <span>+(123)456-78-90</span>
                                    </div>
                                </div>
                            </div>

                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Contact
