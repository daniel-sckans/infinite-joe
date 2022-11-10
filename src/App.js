import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import FAQ from './components/FAQ';

import LogIn from './components/LogIn';

import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Search from './components/Search';
import Results from './components/Results';



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
      <Link to="/infinite-site/search">Search</Link>
      </div>

      <Routes>
      <Route path="/infinite-site" element={<div className='home'><h1>Welcome Y'all!</h1></div>} />
        <Route path="/infinite-site/account" element={<div className='account'><h1>Account?!</h1></div>} />
        <Route path="/infinite-site/faq" element={<FAQ />} />
        <Route path="/infinite-site/aboutus/:info" element={<AboutUs />} />
        <Route path="/infinite-site/contact/:person" element={<Contact />} />
        <Route path="/infinite-site/login" element={<LogIn />} />

        <Route path="/infinite-site/search" element={<Search />} >
        ` <Route path=":query" element={<Results />} />
        </Route>

      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
