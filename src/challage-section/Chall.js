import React, { Component } from 'react';
import './chall.css';

export class Chall extends Component {
  render() {
    return (
      <section className='chall-section'>
            <div className='chall'>
                <h1>Challenge Yourself</h1>
                <p>Take your practice to the next level with our on-going yoga challenges.</p>
                <button>Start Challange!</button>
            </div>
      </section>
    )
  }
}

export default Chall
