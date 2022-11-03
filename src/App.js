import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import LogIn from './components/LogIn';

import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      

    <BrowserRouter>

      <div className='nav'>
      <Link to="/infinite-site">Home</Link>
      <Link to="/infinite-site/account">Account</Link>
      <Link to="/infinite-site/faq">FAQ</Link>
      <Link to="/infinite-site/aboutus">AboutUs</Link>
      <Link to="/infinite-site/contact">Contact</Link>
      <Link to="/infinite-site/login">LogIn</Link>
      </div>

      <Routes>
      <Route path="/infinite-site" element={<div>Home</div>} />
        <Route path="/infinite-site/account" element={<div>Account</div>} />
        <Route path="/infinite-site/faq" element={<FAQ />} />
        <Route path="/infinite-site/aboutus" element={<AboutUs />} />
        <Route path="/infinite-site/contact" element={<Contact />} />
        <Route path="/infinite-site/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
