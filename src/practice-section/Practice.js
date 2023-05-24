import React, { Component } from 'react';
import './practice.css';
import img1 from './practice1.jpg';
import img2 from './practice2.jpg';
import img3 from './practice3.jpg';

const pract = [
    {
        imag:img1,
        head:"Jessica White",
        sub_head:"Hatha Yoga",
        
    },
    {
        imag:img2,
        head:"Emily Green",
        sub_head:"Hatha Yoga",
        
    },
    {
        imag:img3,
        head:"Oliver Black",
        sub_head:"Hatha Yoga",
        
    },
]


export class Practice extends Component {
  render() {
    return (
      <section className='practice-sect'>
        <h1>Practice with Confidence</h1>
        <div className='container'>
            <div className='row'>

        
            {pract.map((rk)=>{

         return(
                <div className='col-lg-4 col-md-6'>
                    <div className='prictice-img'>
                        <img src={rk.imag} width="100%" className='pric-img'/>
                        <div className='prictice-cont'>
                                <h4>{rk.head}</h4>
                                <h5>{rk.sub_head}</h5>
                        </div>
                        <div className='prictice-icon'>
                            <div>
                                <a href='#'><i class="fa-brands fa-twitter"></i></a>
                                <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
                                <a href='#'><i class="fa-brands fa-youtube"></i></a>

                            </div>
                        </div>
                    </div>
                </div>
         )
            })}
        



            </div>
        </div>
      </section>
    )
  }
}

export default Practice
