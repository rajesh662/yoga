import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './nav-section/Nav';
import reportWebVitals from './reportWebVitals';
import Header from './header-back/Header';
import Program from './program-section/Program';
import Price from './price-section/Price';
import Contact from './contact-section/Contact';
import Practice from './practice-section/Practice';
import Blog from './blog-sect/Blog';
import Chall from './challage-section/Chall';
import Footer from './footer-section/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Header/>
    <Program/>
    <Price/>
    <Contact/>
    <Practice/>
    <Blog/>
    <Chall/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
