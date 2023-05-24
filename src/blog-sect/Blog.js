import React, { Component } from 'react';
import './blog.css';
import img1 from './blog1.jpg' ;
import img2 from './blog2.jpg' ;
import img3 from './blog3.jpg' ;

const blog =[
  {
    imag:img1,
    time:"March 24, 2020",
    cont:"What is the best time to do",
    
  },
  {
    imag:img2,
    time:"April 12, 2019",
    cont:"Perhaps the most useful habit",
    
  },
  {
    imag:img3,
    time:"May 17, 2002",
    cont:"Choosing a yoga mat",
    
  },
]



export class Blog extends Component {
  render() {
    return (
     <section className='blog-sect'>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-xs-12  col-xm-12 col-md-6'>
                  <div className='blog-head'>
                      <h1>The blog</h1>
                  </div>
              </div>

         

              <div className='col-lg-6 col-xs-12  col-xm-12 col-md-6'>
                  <div className='blog-btn'>
                      <button>GO TO BLOG</button>
                  </div>
              </div>
              {blog.map((rk)=>{
            return(
              
           
              <div className='col-lg-4 col-md-6'>
                <div className='blog'>
                  <div className='blog-img'>
                      <img src={rk.imag} width="100%"/>
                  </div>
                  <div className='blog-cont'>
                    <time>{rk.time}</time>
                    <p>{rk.cont} </p>
                    <button>Read More</button>
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

export default Blog
