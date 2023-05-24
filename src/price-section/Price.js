import React, { Component } from 'react';
import './price.css';
import img1 from './price1.png';
import img2 from './price2.png';
import img3 from './price3.png';

  const prices = [
    {
      head:"SINGLE VISIT",
      offer:"$7",
      lesson:"1 lesson",
      Imag:img1,
      sub_head:"Top Features",
      li1:"Morning and day",
      li2:"Evening yoga",
      li3:"Yoga in hammocks",
      btn:"START",
    },
    {
      head:"SINGLE VISIT",
      offer:"$14",
      lesson:"2 lesson",
      Imag:img2,
      sub_head:"Top Features",
      li1:"Morning and day",
      li2:"Evening yoga",
      li3:"Yoga in hammocks",
      btn:"START",
    },
    {
      head:"SINGLE VISIT",
      offer:"$33",
      lesson:"3 lesson",
      Imag:img3,
      sub_head:"Top Features",
      li1:"Morning and day",
      li2:"Evening yoga",
      li3:"",
      btn:"START",
    },
  ]

export class Price extends Component {
  render() {
    return (
      <section>
        <div className='price-sect'> 
            <h1>Flexible prices</h1>
            <h2>First lesson for free!</h2>
            <div className='container'>
                <div className='row'>

                {prices.map((rk)=>{

                return(
                    <div className='col-lg-4 col-xs-12  col-xm-12 col-md-6'>
                        <div className='price-card'>
                            <div className='price-title1'>
                                <h3>{rk.head}</h3>
                                <h4>{rk.offer}</h4>
                                <h6>{rk.lesson}</h6>
                            </div>
                            <div className='price-img'>
                                <img src={rk.Imag}/>
                            </div>
                            <div className='price-cont'>
                              <h3>{rk.sub_head}</h3>
                              <ul>
                                <li>{rk.li1}</li>
                                <li>{rk.li2}</li>
                                <li>{rk.li3}</li>
                              </ul>
                              <div className='price-btn'>
                              <button>{rk.btn}</button>
                            </div>
                            </div>     
                        </div>
                    </div>
                )
                  })}
                   

                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Price
