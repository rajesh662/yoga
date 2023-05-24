import React, { Component } from 'react'
import './program.css';
import img1 from './yo-1.jpg';
import img2 from './yo-2.jpg';
import img3 from './yo-3.jpg';
import img4 from './yo-4.jpg';
import img5 from './yo-5.jpg';
import img6 from './yo-6.jpg';

let item1 =[
    {
        images:img1,
        heding:"Yoga for beginners",
        cont:"Lorem ipsum dolor sit amet, consecteturadipisicing elit. Optio animi repellendus ea in impedit laborum!",
    },
    {
        images:img2,
        heding:"Ashtanga Yoga",
        cont:"Lorem ipsum dolor sit amet, consecteturadipisicing elit. Optio animi repellendus ea in impedit laborum!",
    },
    {
        images:img3,
        heding:"Yoga for a slim figure",
        cont:"Lorem ipsum dolor sit amet, consecteturadipisicing elit. Optio animi repellendus ea in impedit laborum!",
    },
    {
        images:img4,
        heding:"Healthy back",
        cont:"Lorem ipsum dolor sit amet, consecteturadipisicing elit. Optio animi repellendus ea in impedit laborum!",
    },
    {
        images:img5,
        heding:"Maternity Yoga",
        cont:"Lorem ipsum dolor sit amet, consecteturadipisicing elit. Optio animi repellendus ea in impedit laborum!",
    },
    {
        images:img6,
        heding:"Culture of movement",
        cont:"Lorem ipsum dolor sit amet, consecteturadipisicing elit. Optio animi repellendus ea in impedit laborum!",
    },
]

export class Program extends Component {
    
  render() {
    return (
      <section className='program'>
            <h1>Courses and Programs</h1>
            <div className='container'>
                <div className='row'>

               {item1.map((val)=>{

                return(
                    <div className='col-lg-4 col-md-6' >
                        <div>
                            <div className='prog-img'>
                                <img src ={val.images} width='100%'/>
                            </div>
                            <div className='prog-cont'>
                                <h3>{val.heding}</h3>
                                <p>{val.cont}</p>
                            </div>
                        </div>
                    </div>
                )
  })}
                    
                   
                </div>
            </div>
            <hr></hr>
      </section>
    )
  }
}

export default Program
